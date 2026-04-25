# Deployment Guide for weydev.com

## Overview
This is a Next.js portfolio website for Thapanakorn Yotyothinkul. The site showcases featured projects and technical skills.

## Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site locally.

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official deployment platform for Next.js and makes it super easy.

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and set up the build
6. Add your custom domain `weydev.com`:
   - In Vercel dashboard, go to Settings → Domains
   - Add `weydev.com`
   - Follow DNS configuration instructions

#### Environment Variables
Add in Vercel dashboard > Settings > Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://weydev.com
```

### Option 2: Traditional Hosting (Node.js required)

If you want to host on a VPS or traditional hosting:

```bash
# Build the app
npm run build

# Start production server
npm run start
```

The app will run on `http://localhost:3000` and serve production-optimized pages.

### Option 3: Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./
COPY public ./public
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t weydev .
docker run -p 3000:3000 weydev
```

## Adding New Projects

To add a new project to your portfolio:

1. Edit `lib/projects.ts`
2. Add a new object to the `projects` array:

```typescript
{
  id: "my-project",
  title: "Project Title",
  description: "Short description",
  longDescription: "Longer description",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/tasuke567/repo-name",
  highlights: ["Feature 1", "Feature 2"],
}
```

3. Build and deploy:
```bash
npm run build
npm run start
```

## DNS Setup for weydev.com

If you own `weydev.com`, point it to your hosting:

**For Vercel:**
- Update your domain registrar DNS to point to Vercel nameservers

**For Traditional Hosting:**
- Point A record to your server IP address
- Set up SSL certificate (Let's Encrypt is free)

## Performance Optimization

The portfolio is built with:
- ✅ Next.js 16 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Static generation for fast page loads
- ✅ Dark mode support
- ✅ SEO optimized

## Troubleshooting

### Build errors
```bash
# Clear build cache and rebuild
rm -rf .next
npm run build
```

### Port already in use
```bash
# Use different port
PORT=3001 npm run dev
```

## Next Steps

1. ✅ Build and test locally: `npm run build && npm run start`
2. ✅ Push to GitHub
3. ✅ Deploy to Vercel (recommended)
4. ✅ Configure domain `weydev.com`
5. ✅ Add projects to `lib/projects.ts` as needed
