import { fetchProductSpot, ProductSpotSummary } from "@/lib/monexSpot";
import { SITE_CONFIG } from "@/lib/siteConfig";

interface CapitalRequirementsCardProps {
  /** Optional pre-fetched price data to avoid duplicate API calls */
  priceData?: ProductSpotSummary | null;
}

/**
 * Server Component - Displays the approximate capital required to purchase a silver coin.
 * 
 * Uses configured product pricing from Monex API.
 * Can receive pre-fetched price data or will fetch its own if not provided.
 * NO polling, NO intervals - renders ONCE per page load only.
 */
export default async function CapitalRequirementsCard({ priceData }: CapitalRequirementsCardProps = {}) {
  // Use provided data or fetch product price if not available
  const data = priceData !== undefined ? priceData : await fetchProductSpot();

  // Round to nearest $1 for silver (smaller values than gold)
  const roundToOne = (value: number): string => {
    const rounded = Math.round(value);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(rounded);
  };

  // Check if we have valid data
  const hasValidPrice = data !== null && data.ask > 0;

  return (
    <div className="card p-8 max-w-sm">
      <h3 className="text-xl font-display font-semibold text-slate-800 mb-4 text-center">
        Capital Requirement
      </h3>
      <p className="text-slate-600 text-sm text-center mb-6">
        {hasValidPrice
          ? `Based on current silver coin (${SITE_CONFIG.productSymbol}) ask price:`
          : "To purchase a single silver bullion coin:"}
      </p>
      <div className="text-center py-6 rounded-lg bg-slate-100 border border-slate-200">
        {hasValidPrice ? (
          <>
            <span className="text-4xl font-display font-bold accent-text">
              ≈ {roundToOne(data.ask)}
            </span>
            <p className="text-slate-600 text-sm mt-2">per 1 oz silver coin</p>
          </>
        ) : (
          <>
            <span className="text-xl font-display font-medium text-slate-500">
              Market pricing unavailable
            </span>
            <p className="text-slate-400 text-sm mt-2">Please check back later</p>
          </>
        )}
      </div>
      <p className="text-slate-500 text-xs text-center mt-4">
        {SITE_CONFIG.productSymbol} pricing varies with silver spot and dealer premiums
      </p>
    </div>
  );
}
