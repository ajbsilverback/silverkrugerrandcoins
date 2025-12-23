/**
 * SITE CONFIGURATION - Single Source of Truth
 * 
 * Silver Coins Master Template
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 * GUARDRAILS - Do Not Modify Without Intentional Review
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * PROTECTED ELEMENTS:
 * - Pricing symbols (placeholder - update for specific site)
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
 * - This template is for silver bullion coin educational sites
 * - Focus on: purity (.999 fine), premiums, liquidity, IRA eligibility,
 *   government-minted coins, obverse/reverse designs
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const SITE_CONFIG = {
  // ============================================================
  // DOMAIN & BRANDING
  // ============================================================
  
  /** Primary domain with https:// prefix */
  domain: "https://www.silvercoinsmaster.com",
  
  /** Canonical domain (usually same as domain) */
  canonicalDomain: "https://www.silvercoinsmaster.com",
  
  /** Brand name displayed in UI and metadata */
  brandName: "Silver Bullion Coins",

  // ============================================================
  // PRODUCT DEFINITION
  // ============================================================
  
  /** Primary product name */
  primaryProduct: "silver bullion coins",
  
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
   * SAEV = Silver American Eagle (product pricing)
   */
  productSymbol: "SAEV",
  
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
    "investors seeking government-minted silver bullion coins with .999 fine purity and strong liquidity",

  /** Array of relevant Monex.com links for citations */
  monexLinks: [
    "https://www.monex.com/silver-coins/",
    "https://www.monex.com/silver-prices/",
    "https://www.monex.com/investing-in-silver/",
    "https://www.monex.com/knowledge-base/silver-investing/",
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
