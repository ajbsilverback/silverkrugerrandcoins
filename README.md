# Silver Coins Master

A Next.js template for silver bullion coin educational websites.

## Overview

This is a reusable template for creating educational sites about silver bullion coins. It includes:

- Live silver pricing via Monex API
- Educational resources about silver coins
- Responsive design with unified site chrome
- SEO-optimized structure

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with semantic accent variables
- **Fonts**: Playfair Display + Source Sans 3
- **Pricing Data**: Monex API integration

## Configuration

All site-specific configuration is centralized in `src/lib/siteConfig.ts`:

- `productSymbol`: Monex product code (e.g., "SAEV" for Silver American Eagle)
- `spotSymbol`: Spot price symbol (e.g., "SBSPOT")
- `brandName`: Site display name
- `domain`: Canonical domain

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── live-silver-prices/   # Live pricing page
│   ├── coin-specs/           # Coin specifications
│   ├── design-history/       # Design & history
│   ├── where-to-buy/         # Dealer guide
│   ├── resources/            # Educational library
│   └── about/                # About page
├── components/
│   ├── Header.tsx            # Site header
│   ├── Footer.tsx            # Site footer
│   └── ...
├── data/
│   ├── article-content.ts    # Resource article content
│   ├── qa-content.ts         # FAQ content
│   └── resources.ts          # Resource metadata
└── lib/
    ├── siteConfig.ts         # Central configuration
    └── monexSpot.ts          # Pricing API utilities
```

## Development

```bash
npm install
npm run dev
```

## Deployment

The site is configured for Vercel deployment with standalone output mode.

## License

Private - not for redistribution.
