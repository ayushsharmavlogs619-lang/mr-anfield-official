# 🚀 Firebase Manual Setup Instructions

Since Firebase CLI is not installed globally, follow these manual steps to complete the Firebase data setup.

---

## ✅ STEP 1: Install Firebase CLI (One-time)

Open PowerShell as Administrator and run:

```powershell
npm install -g firebase-tools
```

**Verify installation:**
```powershell
firebase --version
```

---

## ✅ STEP 2: Login to Firebase

```powershell
firebase login
```

This will open your browser for Google authentication. Select the Google account associated with the `mr-anfield` Firebase project.

---

## ✅ STEP 3: Deploy Firestore Security Rules

From the project directory, run:

```powershell
cd "c:\googlwe anti gravity Project agents\business agents taking care of code for mr.anfielld\mr-anfield-official"
firebase deploy --only firestore:rules
```

**Expected Output:**
```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/mr-anfield/overview
```

---

## ✅ STEP 4: Deploy Composite Indexes

```powershell
firebase deploy --only firestore:indexes
```

**Wait 2-5 minutes** for the index to build. You can check status in [Firebase Console → Firestore → Indexes](https://console.firebase.google.com/project/mr-anfield/firestore/indexes).

---

## ✅ STEP 5: Create .env.local File

**IMPORTANT:** Create a file named `.env.local` in the project root directory:

```
c:\googlwe anti gravity Project agents\business agents taking care of code for mr.anfielld\mr-anfield-official\.env.local
```

**File contents:**

```env
# Firebase Configuration - Mr. Anfield
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

**To create this file:**
1. Open Notepad or VS Code
2. Copy the content above
3. Save as `.env.local` (with the dot at the beginning)
4. Make sure it's in the `mr-anfield-official` folder

---

## ✅ STEP 6: Seed Initial Data

**Option A: Using Firebase Console (Easiest)**

Go to [Firebase Console → Firestore Database](https://console.firebase.google.com/project/mr-anfield/firestore/databases/-default-/data)

### Create Collection: `news`

Click **"Start collection"** → Name it `news`

**Add these documents:**

**Document 1: Hero Article**
- Document ID: `liverpool-tactical-masterclass`
- Fields:
  ```
  id: "liverpool-tactical-masterclass" (string)
  type: "hero" (string)
  category: "Tactics" (string)
  title: "The Slot Era: How Liverpool's Midfield Box is Dominating Europe" (string)
  excerpt: "From double pivots to inverted wing-backs, we break down..." (string)
  author: "Mr. Anfield Football Editorial" (string)
  image: "/stadium.png" (string)
  slug: "liverpool-tactical-masterclass" (string)
  readTime: "8 min read" (string)
  timestamp: [Click timestamp icon, select today's date] (timestamp)
  published: true (boolean)
  featured: true (boolean)
  ```

**Document 2: Latest News**
- Document ID: `salah-contract-latest`
- Fields:
  ```
  id: "salah-contract-latest" (string)
  type: "news" (string)
  category: "News" (string)
  title: "Salah Contract: Latest Updates" (string)
  excerpt: "Breaking down the latest developments..." (string)
  author: "Mr. Anfield Football Editorial" (string)
  image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=640" (string)
  slug: "salah-contract-latest" (string)
  readTime: "5 min read" (string)
  timestamp: [Today's date] (timestamp)
  published: true (boolean)
  featured: false (boolean)
  ```

### Create Collection: `matches`

**Add Document:**
- Document ID: `lfc-vs-manu-2025-12-28`
- Fields:
  ```
  id: "lfc-vs-manu-2025-12-28" (string)
  competition: "Premier League" (string)
  homeTeam: "Liverpool" (string)
  awayTeam: "Manchester United" (string)
  homeScore: null
  awayScore: null
  status: "scheduled" (string)
  kickoffTime: [Set to Dec 28, 2025 15:00] (timestamp)
  venue: "Anfield" (string)
  ```

### Create Collection: `leagueTable`

**Add Document:**
- Document ID: `premier-league-2025-26`
- Fields:
  ```
  id: "premier-league-2025-26" (string)
  season: "2025-26" (string)
  competition: "Premier League" (string)
  lastUpdated: [Now] (timestamp)
  standings: [array]
    - [0]:
      position: 1 (number)
      team: "Liverpool" (string)
      played: 18 (number)
      won: 14 (number)
      drawn: 3 (number)
      lost: 1 (number)
      gf: 45 (number)
      ga: 15 (number)
      gd: 30 (number)
      points: 45 (number)
    - [1]:
      position: 2 (number)
      team: "Arsenal" (string)
      played: 18 (number)
      won: 12 (number)
      drawn: 4 (number)
      lost: 2 (number)
      gf: 38 (number)
      ga: 18 (number)
      gd: 20 (number)
      points: 40 (number)
  ```

---

**Option B: Using Seed Script (Advanced)**

If you prefer automated seeding:

```powershell
npx ts-node scripts/seed-firebase.ts
```

**Note:** This requires proper Firebase Admin authentication setup.

---

## ✅ STEP 7: Test Everything

```powershell
npm run dev
```

Visit `http://localhost:3000` and verify:

- ✅ Homepage loads without errors
- ✅ Hero article displays
- ✅ Match center shows fixture data
- ✅ League table renders
- ✅ No Firebase permission errors in browser console (F12)

---

## 🎯 Verification Checklist

- [ ] Firebase CLI installed globally
- [ ] Logged into Firebase (`firebase login`)
- [ ] Firestore rules deployed
- [ ] Composite indexes deployed (and showing "Enabled" status)
- [ ] `.env.local` file created in project root
- [ ] At least 1 news article in Firestore `news` collection with `type: 'hero'`
- [ ] At least 1 match in `matches` collection
- [ ] League table data in `leagueTable` collection
- [ ] Dev server runs without Firebase errors
- [ ] Production build succeeds (`npm run build`)

---

## 🛠️ Troubleshooting

### "Permission denied" errors
→ Make sure you deployed firestore rules: `firebase deploy --only firestore:rules`

### "Missing index" errors
→ Either:
1. Deploy indexes: `firebase deploy --only firestore:indexes`
2. Or click the auto-generated link in browser console

### Hero article not loading
→ Check that you have a document in `news` collection where `type === 'hero'`

### .env.local not working
→ Restart the dev server after creating/editing .env.local

---

## 📞 Need Help?

If you encounter issues:

1. Check [Firebase Console](https://console.firebase.google.com/project/mr-anfield) for errors
2. Review browser console (F12) for specific error messages
3. Verify all collections exist with proper field names (case-sensitive!)

---

**Once all steps are complete, your Firebase backend will be fully operational!** 🚀
