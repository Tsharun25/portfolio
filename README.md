# Harun Ar Rashid Portfolio

Full MERN portfolio website with a dark green developer theme.

## Stack

- React + Vite
- Node.js + Express
- MongoDB + Mongoose
- Lucide icons

## Run locally

```bash
npm run install:all
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

Copy `server/.env.example` to `server/.env` and add your MongoDB URI to save contact messages.

The frontend can call a separate API domain by setting `VITE_API_URL`.
Leave it empty when the API is served from the same domain.

## Deployment shape

The backend is structured to work in both serverless hosting and a future VPS:

- `server/app.js` contains the Express app, routes, middleware, and error handler.
- `server/index.js` starts the app with `app.listen(...)` for local development or VPS/PM2.
- `server/api/[...path].js` exports the app for Vercel Functions.

For VPS deployment, run the backend with `npm --prefix server start` behind Nginx or another reverse proxy.
For Vercel backend deployment, use `server` as the project root and add `MONGODB_URI` and `CLIENT_URL` in the Vercel environment variables.

## Customize

- Update project data in `client/src/main.jsx`
- Update email/social links in the contact section
- Update theme colors in `client/src/styles.css`
