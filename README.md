# Skills Club — MERN Demo Website

A clean, responsive demo inspired by the supplied Skills Club reference, built with the MERN stack.

## Stack
- MongoDB — persistence for registrations
- Express.js — REST API
- React + Vite — frontend UI
- Node.js — backend runtime

## Task requirements fulfilled
1. **Reference website used for design/layout inspiration** — the visual direction follows the supplied Skills Club reference: dark/navy hero, strong headline, learning-focused cards, clear CTA hierarchy, and professional rounded UI.
2. **Own design and UI** — the implementation is original and does not copy the reference site verbatim.
3. **Content provided for this task** — includes Skills Club, MyProFunnels Ventures, graduate audience (BA/BSc/BCom/MA/MSc/MCom), Niche Clarity, Personality Test, and 15-Day Learning Curriculum.
4. **Clean, professional, responsive, user-friendly** — responsive navigation, mobile layout, accessible buttons/forms, clear sections, and polished spacing/typography.

## Run locally

### 1. Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

Set `MONGODB_URI` in `.env`. If MongoDB is unavailable, the registration endpoint still returns a useful demo response but does not persist data.

### 2. Frontend
In another terminal:
```bash
cd client
npm install
npm run dev
```

Open the Vite URL shown in the terminal.

## API
- `GET /api/health`
- `POST /api/register`

Example body:
```json
{
  "name": "Aman Singh",
  "email": "amansingh83779@gmail.com",
  "qualification": "B.tech",
  "interest": "Career clarity"
}
```
