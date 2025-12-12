# AREZ Real Estate

A modern real estate platform built with Next.js.

## Features

- Responsive design for all device sizes
- Property listings and collaborations
- Contact methods with social media integration
- Admin dashboard

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

### Deployment

This project can be deployed to various platforms including Vercel, Netlify, or GitHub Pages.

For GitHub Pages deployment, you can use the workflow defined in `.github/workflows/deploy.yml`.

## Project Structure

```
├── pages/            # Next.js pages
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   ├── styles/       # Global styles
│   └── types/        # TypeScript types
├── .github/workflows/# GitHub Actions workflows
├── next.config.js    # Next.js configuration
└── tsconfig.json     # TypeScript configuration
```

## Environment Variables

Create a `.env` file based on `.env.example` for local development.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Recent Updates

- Updated contact page to remove form section
- Fixed logo display issues with correct paths
- Improved image optimization with sharp package
- Configured proper GitHub Pages deployment settings
- Switched to plain img tags with absolute paths for reliable logo display
- Simplified logo paths to use relative paths for GitHub Pages compatibility
- Fixed logo paths to include basePath prefix for consistent navigation