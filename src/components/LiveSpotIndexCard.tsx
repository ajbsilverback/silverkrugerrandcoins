import { fetchMetalSpotIndex, formatUSD, formatChange, formatTimestamp } from "@/lib/monexSpot";
import { SITE_CONFIG } from "@/lib/siteConfig";

/**
 * Server Component - Fetches Silver Spot Price ONCE per page load
 * 
 * Uses Monex API with configured spot symbol (silver spot index per troy ounce)
 * This is RAW SILVER SPOT pricing, NOT product-specific pricing.
 * 
 * ABSOLUTELY NO setInterval, useEffect, or client-side polling.
 * This renders ONCE per page load and never refreshes again.
 */
export default async function LiveSpotIndexCard() {
  // Fetches silver spot index from Monex
  const data = await fetchMetalSpotIndex();

  // Error state - if data === null
  if (data === null) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 shadow-md p-6 sm:p-10 bg-white">
        <p className="text-slate-500 text-center text-lg">
          Silver spot pricing ({SITE_CONFIG.spotSymbol}) is temporarily unavailable.
        </p>
      </div>
    );
  }

  const isPositive = data.change >= 0;
  const isNeutral = data.change === 0;

  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 shadow-md p-6 sm:p-10 bg-white space-y-6">
      {/* Header with live indicator */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900">
            Silver Spot Price
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Raw silver spot ({SITE_CONFIG.spotSymbol})
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-500 font-medium">Live</span>
        </div>
      </div>

      {/* Main Price Display */}
      <div className="relative text-center py-6">
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-slate-200/30 to-slate-100/50 rounded-lg" />
        
        <div className="relative">
          <p className="text-lg text-slate-500 mb-2">Current Silver Spot</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight accent-text">
            {formatUSD(data.last)}
          </p>
          <p className="text-base text-slate-500 mt-2">per troy ounce (spot)</p>
        </div>
      </div>

      {/* Change indicator */}
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${
          isNeutral
            ? "bg-neutral-100 border border-neutral-200"
            : isPositive 
              ? "bg-emerald-50 border border-emerald-200" 
              : "bg-red-50 border border-red-200"
        }`}>
          {!isNeutral && (
            <svg 
              className={`w-5 h-5 ${isPositive ? "text-emerald-600" : "text-red-600 rotate-180"}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          )}
          <span className={`text-lg font-semibold ${
            isNeutral 
              ? "text-neutral-600" 
              : isPositive 
                ? "text-emerald-600" 
                : "text-red-600"
          }`}>
            {formatChange(data.change, data.changePercent)}
          </span>
        </div>
      </div>

      {/* Market Stats - OHLC + Previous Close */}
      <div className="space-y-3">
        <p className="text-sm text-slate-500 uppercase tracking-wide text-center">Market Stats</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Open</p>
            <p className="text-sm md:text-base font-semibold text-slate-700">
              {data.open > 0 ? formatUSD(data.open) : "-"}
            </p>
          </div>
          <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">High</p>
            <p className="text-sm md:text-base font-semibold text-emerald-600">
              {data.high > 0 ? formatUSD(data.high) : "-"}
            </p>
          </div>
          <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Low</p>
            <p className="text-sm md:text-base font-semibold text-red-600">
              {data.low > 0 ? formatUSD(data.low) : "-"}
            </p>
          </div>
          <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3 text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Prev Close</p>
            <p className="text-sm md:text-base font-semibold text-slate-700">
              {data.previousClose > 0 ? formatUSD(data.previousClose) : "-"}
            </p>
          </div>
        </div>
      </div>

      {/* Timestamp */}
      <p className="text-sm text-slate-500 text-center">
        As of: {formatTimestamp(data.timestamp)}
      </p>

      {/* Attribution */}
      <p className="text-xs text-slate-400 text-center pt-4 border-t border-slate-200">
        Silver spot ({SITE_CONFIG.spotSymbol}) data from{" "}
        <a
          href="https://www.monex.com/silver-prices/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:underline"
        >
          Monex
        </a>
        {" "}• Updated on page load
      </p>
    </div>
  );
}

