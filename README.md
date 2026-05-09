# WeyDev - Full-Stack Developer Portfolio

Welcome to my professional portfolio website! This site showcases my projects and technical expertise in full-stack development.

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```text
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page with hero & projects
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links
│   └── ProjectCard.tsx     # Project card component
├── lib/
│   └── projects.ts         # Projects data
├── public/                 # Static assets
├── DEPLOYMENT.md           # Deployment guide
└── PROJECTS_GUIDE.md       # How to add projects
```

## 📝 Managing Projects

See [PROJECTS_GUIDE.md](./PROJECTS_GUIDE.md) for detailed instructions.

Quick example:

```typescript
// lib/projects.ts
export const projects: Project[] = [
  {
    id: "my-project",
    title: "My Project Title",
    description: "One-line description",
    longDescription: "Detailed description...",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/tasuke567/project",
    highlights: ["Feature 1", "Feature 2"],
  },
];
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import this repository
4. Add custom domain `weydev.com`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## ✨ Features

- 📱 Responsive design (mobile, tablet, desktop)
- 🌙 Dark mode support
- ⚡ Fast performance (static generation)
- 🎨 Modern UI with Tailwind CSS
- 🔍 SEO optimized
- 📄 TypeScript for type safety

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

## 📧 Contact

- Email: admin@weydev.com
- GitHub: [@tasuke567](https://github.com/tasuke567)
- LinkedIn: [@tasuke567](https://linkedin.com/in/tasuke567)

---

Built with ❤️ by Thapanakorn Yotyothinkul
