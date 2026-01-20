# Ekart — Static + Snipcart + Firebase (Starter)

This repository contains a simple static Ekart e‑commerce starter using plain HTML/CSS/Vanilla JS for the frontend, Snipcart for cart & checkout, and Firebase (Auth + Firestore) for user accounts, order history and admin product CRUD. A Netlify Function captures Snipcart webhooks to save orders to Firestore and send notification emails.

## What’s included
- index.html — product listing (reads data/products.json)
- product.html — single product page
- css/styles.css — styling
- js/products.js, js/product.js, js/auth.js — client JS
- data/products.json — sample product data
- account.html — auth + order history UI
- admin.html — admin UI (reads/writes Firestore)
- netlify/functions/snipcart-webhook.js — webhook to store orders & send emails
- netlify.toml, _redirects — Netlify configuration

## Environment variables / secrets
Set these in Netlify UI (Site settings → Build & deploy → Environment):
- YOUR_SNIPCART_API_KEY — Snipcart public API key (client) (also present in HTML)
- SNIPCART_WEBHOOK_SECRET — (optional) secret to verify webhook HMAC
- FIREBASE_SERVICE_ACCOUNT — JSON string for Firebase Admin SDK (used by Netlify function)
- FIREBASE_PROJECT_ID — Firebase project id
- SENDGRID_API_KEY — SendGrid API key (for outgoing order emails)
- SENDER_EMAIL — Email address used as sender for notification emails (e.g. orders@yourdomain.com)

Do NOT place service account or API keys in client-side files.

## Quick local test (static)
1. Clone the repo.
2. Serve the folder with a static server:
   - Python: `python -m http.server 8080`
   - Or use Live Server extension in VSCode.
3. Open `http://localhost:8080` and test listing & product pages.
4. Snipcart will only work with a valid Snipcart key and valid page origin.

## Deploy to Netlify
1. Push to GitHub.
2. Connect repo to Netlify.
3. Ensure `netlify.toml` and `netlify/functions` are present (Netlify will build functions automatically).
4. Add environment variables (see above).
5. Deploy.

## Setup Snipcart
1. Sign up at https://app.snipcart.com/
2. Get your Snipcart public API key.
3. Put it in `index.html` and `product.html` (replace `YOUR_SNIPCART_API_KEY`) OR add to Netlify as an env var and set via build-injection.
4. In Snipcart dashboard → Developer → Webhooks, add a webhook for `order.completed` (or the events you need) pointing to:
   `https://<your-site>.netlify.app/.netlify/functions/snipcart-webhook`
   and set the secret equal to `SNIPCART_WEBHOOK_SECRET`.

## Setup Firebase
1. Create Firebase project.
2. Enable Authentication (Email/Password).
3. Create Firestore DB.
4. Create a Service Account JSON (Project Settings → Service accounts → Generate new private key) and paste the JSON into Netlify `FIREBASE_SERVICE_ACCOUNT` environment variable (stringify it).

## Notes & next improvements
- Enforce admin-only actions with Firestore security rules (client checks are not sufficient).
- Verify Snipcart webhook HMAC for security (function includes verification).
- Replace placeholder images and enrich product data.
- Add validations and error handling in client UI.

If you want, I can also scaffold these files directly into a branch in your repo. Tell me if you want that.