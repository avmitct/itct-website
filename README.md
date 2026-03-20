# ITCT Computer Education Website

**Domain:** itctnandurbar.com  
**Institute:** ITCT Computer Education, Nandurbar  
**Authorised MKCL ALC for:** MS-CIT & KLiC Courses

---

## Pages

| File | Page |
|---|---|
| `index.html` | Home Page |
| `about.html` | About Us |
| `courses.html` | Courses (MS-CIT + KLiC) |
| `profile.html` | Institute Profile |
| `contact.html` | Contact Us |
| `enquiry.html` | Student Enquiry Form |
| `styles.css` | All Styles |
| `nav.js` | Shared Navbar & Footer |

---

## Deploying on Render

### Step 1: Push to GitHub
1. Create a new GitHub repository (e.g., `itct-website`)
2. Upload all the files from this folder to the repository

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up / log in
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub account and select the `itct-website` repository
4. Configure:
   - **Name:** itct-nandurbar
   - **Branch:** main
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.` (just a dot)
5. Click **"Create Static Site"**

Render will deploy the site and give you a URL like `itct-nandurbar.onrender.com`

### Step 3: Connect Your Custom Domain (itctnandurbar.com)
1. In Render dashboard → your site → **"Settings"** → **"Custom Domains"**
2. Add `itctnandurbar.com` and `www.itctnandurbar.com`
3. Render will show you DNS records to add
4. Go to your domain registrar (wherever you bought itctnandurbar.com)
5. Add the DNS records provided by Render:
   - **A Record:** `@` → Render's IP
   - **CNAME:** `www` → `itct-nandurbar.onrender.com`
6. Wait 24–48 hours for DNS propagation. Render provides free SSL certificate automatically.

---

## Customisation Checklist

Before going live, update these details in the files:

- [ ] **Phone numbers** in `contact.html`, `enquiry.html`, `nav.js` footer
- [ ] **Address** in `contact.html` and `profile.html`
- [ ] **Email** → replace `info@itctnandurbar.com` with actual email
- [ ] **Google Maps link** in `contact.html` → replace with actual Google Maps URL
- [ ] **Student count** (currently 5000+) → update if different
- [ ] **ALC Code** → add your MKCL ALC registration number in `profile.html`
- [ ] **Director/Owner name** → add in About page if desired
- [ ] **Social media links** → add Facebook, Instagram in footer if available
- [ ] **Logo image** → replace the "IT" text logo with your actual logo image

---

## Files Structure

```
itct-website/
├── index.html       ← Home Page
├── about.html       ← About Us
├── courses.html     ← Courses (MS-CIT + KLiC)
├── profile.html     ← Institute Profile
├── contact.html     ← Contact Page
├── enquiry.html     ← Enquiry / Admission Form
├── styles.css       ← All CSS Styles
├── nav.js           ← Shared Navigation & Footer
├── render.yaml      ← Render Deployment Config
└── README.md        ← This file
```
