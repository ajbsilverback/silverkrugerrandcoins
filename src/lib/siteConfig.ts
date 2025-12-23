/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * South African Silver Krugerrand Coins
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (SKR for product, SBSPOT for spot)
 * - Monex API endpoints
 * - Monex chart embed script
 * - Navigation IA
 * 
 * PRICING RULES:
 * - spotSymbol: live silver spot price per troy ounce (market reference ONLY)
 * - productSymbol: specific product pricing (product cards + charts ONLY)
 * - Do NOT interchange these symbols
 * 
 * DEPLOYMENT:
 * - main branch is protected
 * - No force-pushes
 * - Vercel auto-deploys from main only
 * 
 * CONTENT:
 * - This site is for South African Silver Krugerrand coin education
 * - Focus on: purity (.999 fine), premiums, liquidity, IRA eligibility,
 *   South African Mint, obverse/reverse designs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.silverkrugerrandcoins.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.silverkrugerrandcoins.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "Silver Krugerrand Coins",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "South African Silver Krugerrand coins",
  
  /** Metal type: "gold" | "silver" | "platinum" | "palladium" */
  metal: "silver",
  
  /** Product form: "bars" | "coins" | "rounds" */
  form: "coins",
  
  /** Size or series identifier */
  sizeOrSeries: "1 oz",

  /** Troy ounce equivalent */
  troyOunces: 1,

  // ============================================================
  // MONEX API SYMBOLS
  // ============================================================
  
  /** 
   * Product price symbol for Monex API
   * SKR = Silver Krugerrand (product pricing)
   */
  productSymbol: "SKR",
  
  /**
   * Spot index symbol for Monex API (raw metal spot price)
   * SBSPOT = Silver Spot Index (market reference ONLY)
   */
  spotSymbol: "SBSPOT",

  // ============================================================
  // CONTENT & MESSAGING
  // ============================================================
  
  /** Target audience description */
  angle:
    "investors seeking South African Silver Krugerrand coins with .999 fine purity and strong liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/",
    "https://www.monex.com/silver-south-african-krugerrand-price-charts/",
    "https://www.monex.com/investing-in-silver/",
    "https://www.monex.com/silver-prices/",
  ],
} as const;

export type SiteConfig = typeof SITE_CONFIG;

/**
 * Helper: Get Monex API URL for product symbol
 */
export function getProductApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.productSymbol}`;
}

/**
 * Helper: Get Monex API URL for spot symbol
 */
export function getSpotApiUrl(): string {
  return `https://api.monex.com/api/v2/Metals/spot/summary?metals=${SITE_CONFIG.spotSymbol}`;
}
