import { NextResponse } from "next/server";

const llmsTxt = `# SilverKrugerrandCoins.com - LLMs.txt

> An independent educational resource about South African Silver Krugerrand coins

## Site Overview

SilverKrugerrandCoins.com provides educational content about South African Silver Krugerrand coins, minted by the South African Mint with .999 fine purity.

## What This Site Is

- Independent educational resource
- Information about South African Silver Krugerrand coins
- Live silver pricing data from Monex API
- Educational articles about Silver Krugerrand investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, the South African Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Key Topics Covered

- Silver Krugerrand specifications (.999 fine, 1 oz)
- Silver Krugerrand vs Eagle vs Maple Leaf comparisons
- Premium and pricing dynamics
- IRA eligibility for Silver Krugerrands
- Storage and authentication
- Market dynamics affecting silver prices
- Krugerrand history and design (Paul Kruger, Springbok)

## Product Focus

South African Silver Krugerrand coins are:
- .999 fine silver purity
- 1 troy ounce of pure silver
- Minted by the South African Mint
- Feature Paul Kruger (obverse) and Springbok (reverse)
- IRA-eligible
- Recognized worldwide for liquidity
- Part of the 50+ year Krugerrand heritage

## Pricing Data

- Product pricing uses Monex API symbol: SKR (Silver Krugerrand)
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

Website: https://www.silverkrugerrandcoins.com

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
