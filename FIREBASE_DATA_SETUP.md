# 🔥 Firebase Data Setup - Complete Guide

## 📋 Prerequisites Checklist

- [x] Firebase project created (`mr-anfield`)
- [x] Firebase config in `app/lib/firebase.ts`
- [x] Firestore rules defined in `firestore.rules`
- [x] Composite index defined in `firestore.indexes.json`
- [ ] `.env.local` file created
- [ ] Firebase CLI installed
- [ ] Firestore rules deployed
- [ ] Composite indexes deployed
- [ ] Initial data seeded

---

## 🚀 Quick Setup (5 Steps)

### Step 1: Create .env.local File

Create `.env.local` in the project root with:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDn1-xggEGeRDgYQqjf2hXLpDfSIy8KyK8
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=mr-anfield.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=mr-anfield
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=mr-anfield.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=741789597634
NEXT_PUBLIC_FIREBASE_APP_ID=1:741789597634:web:908dccce74f77be50be05b
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-RT3Z2F95C3

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RT3Z2F95C3
```

---

### Step 2: Install Firebase Admin SDK

```bash
npm install firebase-admin --save-dev
```

---

### Step 3: Deploy Firestore Rules & Indexes

```bash
# Login to Firebase (if not already logged in)
firebase login

# Deploy security rules
firebase deploy --only firestore:rules

# Deploy composite indexes
firebase deploy --only firestore:indexes
```

**What this fixes:**
- ✅ Public read access to news, matches, league table
- ✅ Newsletter subscription write permissions
- ✅ Composite index for hero article queries (type + timestamp)

---

### Step 4: Seed Initial Data

**Option A: Using the seed script (Recommended)**

```bash
# Run the seeding script
npx ts-node scripts/seed-firebase.ts
```

**Option B: Manual Firebase Console Entry**

Go to [Firebase Console](https://console.firebase.google.com/project/mr-anfield/firestore) and manually add:

1. **Collection: `news`**
   - Create documents with fields: `id`, `type`, `category`, `title`, `excerpt`, `content`, `author`, `image`, `slug`, `readTime`, `timestamp`, `published`, `featured`

2. **Collection: `matches`**
   - Create documents with fields: `id`, `competition`, `homeTeam`, `awayTeam`, `homeScore`, `awayScore`, `status`, `kickoffTime`

3. **Collection: `leagueTable`**
   - Create a document with a `standings` array containing team data

---

### Step 5: Verify Setup

```bash
# Start dev server
npm run dev
```

Visit `http://localhost:3000` and verify:
- ✅ Hero article loads
- ✅ Match center displays upcoming/recent matches
- ✅ League table shows standings
- ✅ No Firebase permission errors in console

---

## 📊 Firestore Database Structure

### Collections Overview

```
firestore (root)
│
├── news/                           # News articles & content
│   ├── {article-id}
│   │   ├── id: string
│   │   ├── type: string           # 'hero', 'news', 'transfer', 'analysis'
│   │   ├── category: string       # 'News', 'Tactics', 'Transfer', etc.
│   │   ├── title: string
│   │   ├── excerpt: string
│   │   ├── content: string        # Full markdown content
│   │   ├── author: string
│   │   ├── image: string          # URL or path
│   │   ├── slug: string           # URL-friendly identifier
│   │   ├── readTime: string       # '5 min read'
│   │   ├── timestamp: timestamp   # Publication date
│   │   ├── published: boolean
│   │   └── featured: boolean
│
├── matches/                        # Liverpool FC matches
│   ├── {match-id}
│   │   ├── id: string
│   │   ├── competition: string    # 'Premier League', 'Champions League'
│   │   ├── season: string         # '2025-26'
│   │   ├── matchday: number
│   │   ├── homeTeam: string
│   │   ├── awayTeam: string
│   │   ├── homeScore: number | null
│   │   ├── awayScore: number | null
│   │   ├── status: string         # 'scheduled', 'live', 'completed'
│   │   ├── kickoffTime: timestamp
│   │   ├── venue: string
│   │   └── referee: string
│
├── leagueTable/                    # Premier League standings
│   ├── {season-id}
│   │   ├── id: string
│   │   ├── season: string
│   │   ├── competition: string
│   │   ├── lastUpdated: timestamp
│   │   └── standings: array
│   │       └── [
│   │           {
│   │             position: number,
│   │             team: string,
│   │             played: number,
│   │             won: number,
│   │             drawn: number,
│   │             lost: number,
│   │             gf: number,        # Goals For
│   │             ga: number,        # Goals Against
│   │             gd: number,        # Goal Difference
│   │             points: number
│   │           }
│   │         ]
│
└── newsletter_subscribers/         # Email subscriptions
    ├── {subscriber-id}
    │   ├── email: string
    │   ├── subscribedAt: timestamp
    │   └── source: string          # 'homepage', 'article', etc.
```

---

## 🔐 Security Rules Summary

Current `firestore.rules` configuration:

| Collection | Read | Create | Update | Delete |
|-----------|------|--------|--------|--------|
| `news` | ✅ Public | ❌ Admin only | ❌ Admin only | ❌ Admin only |
| `matches` | ✅ Public | ❌ Admin only | ❌ Admin only | ❌ Admin only |
| `leagueTable` | ✅ Public | ❌ Admin only | ❌ Admin only | ❌ Admin only |
| `newsletter_subscribers` | ❌ Private | ✅ Public | ❌ Locked | ❌ Locked |

---

## 📈 Composite Indexes

Required index for hero article query:

**Collection:** `news`
- Field: `type` (Ascending)
- Field: `timestamp` (Descending)

This enables queries like:
```typescript
const heroArticle = await getDocs(
  query(
    collection(db, 'news'),
    where('type', '==', 'hero'),
    orderBy('timestamp', 'desc'),
    limit(1)
  )
);
```

---

## 🛠️ Troubleshooting

### Issue: "Missing or insufficient permissions"
**Solution:** Deploy firestore rules
```bash
firebase deploy --only firestore:rules
```

### Issue: "The query requires an index"
**Solution:** Deploy composite indexes
```bash
firebase deploy --only firestore:indexes
```

Or click the auto-generated link in browser console.

### Issue: Hero article not loading
**Checklist:**
1. Verify at least one document in `news` collection has `type: 'hero'`
2. Verify timestamp field is a Firestore Timestamp (not string)
3. Check browser console for specific error messages
4. Confirm composite index status is "Enabled" in Firebase Console

### Issue: Newsletter signup fails
**Solution:** 
1. Check firestore rules allow `create: if true` for `newsletter_subscribers`
2. Verify client-side code uses `addDoc()` not `setDoc()`

---

## 🎯 Next Steps After Setup

1. **Content Management:**
   - Use `/admin` page to publish new articles
   - Update match results after games
   - Refresh league table weekly

2. **Performance Optimization:**
   - Enable Firebase caching
   - Implement pagination for news list
   - Add search functionality using Algolia/Firebase Extensions

3. **Analytics:**
   - Track most-read articles
   - Monitor newsletter conversion rate
   - Analyze user engagement patterns

---

## 📞 Quick Commands Reference

```bash
# Firebase CLI
firebase login                           # Authenticate
firebase projects:list                   # View projects
firebase deploy --only firestore:rules   # Deploy security rules
firebase deploy --only firestore:indexes # Deploy indexes
firebase firestore:delete --all-collections # Clear database (DANGER!)

# Development
npm run dev                              # Start dev server
npm run build                            # Production build
npx ts-node scripts/seed-firebase.ts     # Seed database
```

---

**Status:** Ready for deployment! 🚀

All Firebase infrastructure files are configured. Just execute Steps 1-5 above to go live.
