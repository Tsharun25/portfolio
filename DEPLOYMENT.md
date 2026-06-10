# Deployment

This project is ready for separate Vercel deployments from the same GitHub repo.

## Frontend on Vercel

- Root Directory: `client`
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables:
  - `VITE_API_URL`: your deployed backend URL, for example `https://your-api.vercel.app`

## Backend on Vercel

- Root Directory: `server`
- Framework Preset: Other
- Environment Variables:
  - `MONGODB_URI`: MongoDB Atlas connection string
  - `CLIENT_URL`: frontend URL, for example `https://your-site.vercel.app`

After deployment, check:

```bash
https://your-api.vercel.app/api/health
```

It should return `database: "connected"`.

## Future VPS

The backend also works as a normal Express server for VPS hosting:

```bash
npm --prefix server install
npm --prefix server start
```

Run it with PM2 behind Nginx, and keep the same `MONGODB_URI` in `server/.env`.
