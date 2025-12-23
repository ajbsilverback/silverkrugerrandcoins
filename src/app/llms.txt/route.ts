import { NextResponse } from "next/server";

const llmsTxt = `# SilverCoinsMaster.com - LLMs.txt

> An independent educational resource about silver bullion coins

## Site Overview

SilverCoinsMaster.com provides educational content about silver bullion coins, including government-minted coins like the American Silver Eagle with .999 fine purity.

## What This Site Is

- Independent educational resource
- Information about silver bullion coins
- Live silver pricing data from Monex API
- Educational articles about silver coin investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, the U.S. Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Key Topics Covered

- Silver bullion coin specifications (.999 fine, 1 oz)
- Silver Eagle vs Maple Leaf vs Britannia comparisons
- Premium and pricing dynamics
- IRA eligibility for silver coins
- Storage and authentication
- Market dynamics affecting silver prices

## Product Focus

Silver bullion coins are:
- .999 fine silver purity
- 1 troy ounce of pure silver
- Government-minted legal tender
- IRA-eligible
- Recognized worldwide for liquidity

## Pricing Data

- Product pricing uses Monex API symbol: SAEV (Silver American Eagle)
- Spot pricing uses Monex API symbol: SBSPOT (Silver Spot)
- Prices fetched fresh on page load only
- No real-time updates or polling

## Navigation

- Home: /
- Silver Prices: /live-silver-prices
- Coin Specs: /coin-specs
- Design & History: /design-history
- Where to Buy: /where-to-buy
- Resources: /resources
- About: /about

## Contact

Website: https://www.silvercoinsmaster.com

## Disclaimer

All content is for educational purposes only. Silver investments carry risks. This site does not provide financial advice. Consult qualified professionals before making investment decisions.
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
