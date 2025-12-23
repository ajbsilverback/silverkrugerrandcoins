import Link from "next/link";
import { fetchProductSpot, formatUSD, formatChange, formatTimestamp } from "@/lib/monexSpot";
import { SITE_CONFIG } from "@/lib/siteConfig";

type LiveProductPriceCardProps = {
  showCta?: boolean;
};

/**
 * Server Component - Fetches silver coin price ONCE per page load
 * 
 * Uses Monex API with configured product symbol
 * This is PRODUCT-SPECIFIC pricing, NOT raw silver spot.
 * 
 * ABSOLUTELY NO setInterval, useEffect, or client-side polling.
 * This renders ONCE per page load and never refreshes again.
 */
export default async function LiveProductPriceCard({ showCta = true }: LiveProductPriceCardProps) {
  // Fetches product pricing from Monex
  const data = await fetchProductSpot();

  // Error state - if data === null
  if (data === null) {
    return (
      <div className="max-w-3xl mx-auto rounded-xl border border-slate-200 shadow-md p-6 sm:p-10 bg-white">
        <p className="text-slate-500 text-center text-lg">
          Silver coin pricing ({SITE_CONFIG.productSymbol}) is temporarily unavailable.
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
            Silver Bullion Coin Price
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Product pricing ({SITE_CONFIG.productSymbol})
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-500 font-medium">Live</span>
        </div>
      </div>

      {/* Main Price Display with accent gradient */}
      <div className="relative text-center py-6">
        {/* Subtle gradient streak behind price */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/50 to-slate-100 rounded-lg" />
        
        <div className="relative">
          <p className="text-lg text-slate-500 mb-2">Current Ask Price</p>
          <p className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight accent-text">
            {formatUSD(data.ask)}
          </p>
          <p className="text-lg text-slate-500 mt-2">per 1 oz silver coin</p>
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

      {/* Bid/Ask row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 rounded-lg bg-slate-50">
          <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Bid</p>
          <p className="text-xl font-semibold text-slate-700">{formatUSD(data.bid)}</p>
        </div>
        <div className="text-center p-4 rounded-lg bg-slate-100 border border-slate-200">
          <p className="text-sm text-slate-600 uppercase tracking-wide mb-1">Ask</p>
          <p className="text-xl font-semibold text-slate-800">{formatUSD(data.ask)}</p>
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

      {/* CTA Button - only shown when showCta is true */}
      {showCta && (
        <div className="text-center pt-2">
          <Link 
            href="/live-silver-prices" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 font-medium hover:bg-slate-200 transition-colors"
          >
            <span>View Full Pricing &amp; Charts</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {/* Attribution */}
      <p className="text-xs text-slate-400 text-center pt-4 border-t border-slate-200">
        Silver coin ({SITE_CONFIG.productSymbol}) pricing from{" "}
        <a
          href="https://www.monex.com/silver-coins/"
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

