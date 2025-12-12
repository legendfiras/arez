# AREZ Real Estate

A modern real estate platform built with Next.js.

## Features

- Responsive design for all device sizes
- Property listings and collaborations
- Contact form with social media integration
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

This project is configured for deployment to GitHub Pages using GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

For GitHub Pages deployment, the project uses:
- Static export configuration in `next.config.js`
- Image optimization disabled for static export
- GitHub Actions workflow that builds and deploys the static site

For local development, revert the changes in `next.config.js`:
- Remove `output: 'export'`
- Remove `unoptimized: true`

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utility functions
│   ├── pages/         # Next.js pages (in src directory)
│   ├── styles/        # Global styles
│   └── types/         # TypeScript types
├── public/            # Static assets
├── .github/workflows/ # GitHub Actions workflows
├── next.config.js     # Next.js configuration
└── tsconfig.json      # TypeScript configuration
```

## Environment Variables

Create a `.env` file based on `.env.example` for local development.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)