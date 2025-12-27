# ⚡ QUICK DEPLOYMENT COMMANDS

**Run these 3 commands in order:**

## 1️⃣ Firebase Login & Deploy (CRITICAL)

```bash
firebase login
firebase deploy --only firestore
```

**What it does:** Deploys security rules + creates composite index  
**Time:** 5 minutes (including 2-3 min index build time)  
**Fixes:** Match Center, League Table, Hero Article

---

## 2️⃣ Verify Deployment

Check Firebase Console to confirm index is building:
👉 <https://console.firebase.google.com/project/mr-anfield/firestore/indexes>

Status should show: **"Building"** → **"Enabled"** (2-3 mins)

---

## 3️⃣ Check Vercel Auto-Deploy

Your code is already pushed to GitHub. Check if Vercel is auto-deploying:
👉 <https://vercel.com/dashboard>

**If auto-deploy is NOT enabled:**

```bash
vercel --prod
```

---

## ✅ SUCCESS CHECKLIST

After deploying, verify:

- [ ] Visit <https://mr-anfield.vercel.app>
- [ ] Hero article loads (no errors in console)
- [ ] Scroll to Match Center section
- [ ] League Table displays teams
- [ ] No "Permission denied" errors
- [ ] Newsletter popup works

---

## 🆘 IF SOMETHING BREAKS

**Firebase errors persist?**

- Wait 5 minutes for index to fully build
- Hard refresh browser (Ctrl+Shift+R)

**Build fails on Vercel?**

- Build already passed locally ✅
- Check Vercel environment variables match `.env.local`

**Need to redeploy?**

```bash
git add .
git commit -m "Quick fix"
git push origin main
```

---

**YOU'RE BASICALLY DONE! Just run the Firebase commands above.** 🎉
