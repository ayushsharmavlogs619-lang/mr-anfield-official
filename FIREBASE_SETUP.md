# 🔥 Firebase Setup & Deployment Guide

## Critical Manual Steps Required

### 1. Deploy Firestore Security Rules

The `firestore.rules` file has been created. You MUST deploy it to Firebase:

```bash
firebase deploy --only firestore:rules
```

**What this fixes:**

- ✅ Match Center data loads (no more permission denied)
- ✅ League Table displays correctly
- ✅ Newsletter subscriptions work
- ✅ All public content is accessible

---

### 2. Create Missing Firestore Composite Index

The Hero Article query requires a composite index:

**Manual Steps:**

1. Open [Firebase Console](https://console.firebase.google.com/)
2. Go to **Mr. Anfield** project
3. Navigate to **Firestore Database** → **Indexes**
4. Click **Create Index**
5. Configure:
   - **Collection ID**: `news`
   - **Fields to index**:
     - Field: `type` | Order: **Ascending**
     - Field: `timestamp` | Order: **Descending**
6. Click **Create**
7. Wait 2-5 minutes for indexing to complete

**Alternative (from browser console logs):**

- When you visit the homepage, check browser console
- Look for a link that says "Create index here"
- Click it and it will auto-configure

**What this fixes:**

- ✅ Hero article loads instantly
- ✅ No more "Missing index" errors in console

---

### 3. Configure Environment Variables

Update `.env.local` with actual values:

```env
# Analytics & Tracking
NEXT_PUBLIC_META_PIXEL_ID="your-actual-meta-pixel-id"
NEXT_PUBLIC_COOKIEBOT_ID="your-actual-cookiebot-id"

# Google Search Console
# Update in app/layout.tsx line 50:
# verification: { google: "your-actual-verification-code" }
```

**How to get these values:**

1. **Meta Pixel ID**: [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. **Cookiebot ID**: [Cookiebot Dashboard](https://www.cookiebot.com/)
3. **Google Verification**: [Search Console](https://search.google.com/search-console)

---

## Current Firebase Configuration Status

### ✅ Already Configured

- Firebase SDK initialized (`app/lib/firebase.ts`)
- Firestore database connection working
- Storage and Auth services available

### ⚠️ Pending Deployment

- **Firestore Rules**: Created but not deployed
- **Composite Index**: Needs manual creation

---

## Testing After Deployment

1. Deploy the rules:

   ```bash
   firebase deploy --only firestore:rules
   ```

2. Create the composite index (see instructions above)

3. Test the site:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` and check:
   - ✅ Hero article loads
   - ✅ Match Center shows upcoming fixtures
   - ✅ League Table displays
   - ✅ No console errors about permissions or missing indexes

---

## Troubleshooting

### If Match Center still shows "Permission Denied"

- Verify rules deployed: `firebase firestore:indexes`
- Check Firebase Console → Firestore → Rules tab
- Rules should match `firestore.rules` file

### If Hero Article doesn't load

- Check browser console for index creation link
- Verify index exists in Firebase Console → Indexes
- Index status should show "Enabled" (not "Building")

### If Newsletter popup doesn't save

- Check network tab for 403 errors
- Verify `newsletter_subscribers` collection allows `create: if true`

---

## Quick Reference

**Firebase CLI Commands:**

```bash
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project (already done)
firebase init

# Deploy rules only
firebase deploy --only firestore:rules

# View deployed rules
firebase firestore:get --collection-path=/

# Check indexes
firebase firestore:indexes
```

---

**Need Help?**
Check the [Firebase Documentation](https://firebase.google.com/docs/firestore/security/get-started) for more details on security rules.
