import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { MetalPriceChart } from "@/components/MonexWidgets";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import LiveProductPriceCard from "@/components/LiveProductPriceCard";
import LiveSpotIndexCard from "@/components/LiveSpotIndexCard";
import { pricesQA } from "@/data/qa-content";
import { fetchProductSpot, fetchMetalSpotIndex, formatUSD } from "@/lib/monexSpot";

export const metadata: Metadata = {
  title: "Live Silver Coin Prices & Silver Spot Price Charts",
  description:
    "Track live silver coin prices and silver spot prices with interactive charts. Understand premiums, bid-ask spreads, and market dynamics for informed silver coin investing.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/live-silver-prices`,
  },
  openGraph: {
    title: "Live Silver Coin Prices & Silver Spot Price Charts",
    description:
      "Track live silver coin prices and silver spot prices with interactive charts. Understand premiums and market dynamics.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Silver Coin Prices & Silver Spot Price Charts",
    description:
      "Track live silver coin prices and silver spot prices with interactive charts and market data.",
  },
};

export default async function PricesPage() {
  // Fetch price data once for the entire page
  const priceData = await fetchProductSpot();
  const spotData = await fetchMetalSpotIndex();
  
  // Get spot price per oz for examples (rounded to nearest dollar)
  const spotPerOz = spotData ? Math.round(spotData.last) : 30;
  const formatSpotPrice = (price: number) => formatUSD(price).replace(".00", "");
  
  // Calculate example prices based on current spot
  const eaglePrice = Math.round(spotPerOz * 1.05);  // 5% premium
  const maplePrice = Math.round(spotPerOz * 1.04); // 4% premium
  
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Coin Prices & Live Silver Spot Prices",
    description:
      "Track live silver coin prices and silver spot prices. Real-time charts and market data for silver coin investors.",
    url: `${SITE_CONFIG.domain}/live-silver-prices`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What determines the price of a silver bullion coin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The price of a silver bullion coin consists of the silver spot price plus a premium that covers minting, distribution, and dealer margins. Premiums typically range from 3-6% over spot.",
        },
      },
      {
        "@type": "Question",
        name: "Why do silver coins have a premium over spot price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The premium covers mint production costs, Authorized Purchaser margins, dealer margins, and the value of the coin's .999 fine purity and legal tender status. Government-minted coins carry premiums for their guaranteed authenticity and liquidity.",
        },
      },
      {
        "@type": "Question",
        name: "How often do silver prices change?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Silver prices change continuously during market hours as the precious metals market operates nearly 24 hours a day, five days a week. Major price movements are influenced by currency fluctuations, industrial demand, geopolitical events, and supply and demand dynamics.",
        },
      },
    ],
  };

  const aiSummaryBullets = [
    "This page displays live silver coin prices via Monex data",
    "Track silver spot prices per troy ounce for reference",
    "Understand how spot prices relate to silver coin retail pricing",
    "Learn about premium structures: silver coins have 3-6% premiums",
    "Compare pricing across different silver bullion coins",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 accent-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Silver Coin Prices</span>
              <br />
              <span className="text-slate-900">& Live Silver Spot Prices</span>
            </h1>

            {/* AI Summary - placed after H1 */}
            <AISummary bullets={aiSummaryBullets} />

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mt-6 text-left">
              Track live silver prices and understand how spot pricing affects 
              the cost of silver bullion coins. Use these tools to make 
              informed decisions about your precious metals investments. Return 
              to our{" "}
              <Link href="/" className="text-slate-700 hover:underline font-medium">
                Silver Bullion Coins overview
              </Link>{" "}
              or explore our{" "}
              <Link href="/resources" className="text-slate-700 hover:underline font-medium">
                educational resources
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Zone - Live Cards */}
      <section className="py-10 md:py-12 section-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Live Silver Coin Price Card */}
          <LiveProductPriceCard showCta={false} />

          {/* Live Silver Spot Index Card */}
          <LiveSpotIndexCard />

          {/* Chart Widget */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-900 text-center">
              Silver Price Chart
            </h2>
            <div className="max-w-4xl mx-auto">
              <MetalPriceChart />
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Silver Coin Pricing */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Understanding <span className="accent-text">Silver Coin Pricing</span>
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="card">
                <h3 className="text-2xl font-display font-semibold mb-4 text-slate-800">
                  Spot Price vs. Silver Coin Price
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When purchasing a silver bullion coin, you&apos;ll pay a premium 
                  above the spot price. The spot price represents the current market 
                  rate for silver traded in bulk on commodities exchanges.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Silver coins typically carry <strong className="text-slate-900">3-6% 
                  premiums over spot</strong>, which covers mint production costs, 
                  Authorized Purchaser margins, dealer margins, and reflects the coin&apos;s 
                  .999 fine purity and legal tender status.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Why Government Coins Carry Premiums
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Minting Costs:</strong> Government mints 
                      use precision manufacturing to achieve .999 fine purity with 
                      exact weight specifications.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Distribution Chain:</strong> Coins 
                      flow from the Mint to Authorized Purchasers to dealers, each adding 
                      margin for their services.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Government Guarantee:</strong> Legal 
                      tender status and government backing provide authenticity assurance 
                      that commands value.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-500 mr-3">•</span>
                    <span>
                      <strong className="text-slate-900">Strong Liquidity:</strong> Recognized 
                      worldwide, government-minted silver coins are easy to sell, which supports their 
                      pricing power.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 text-slate-800">
                  Premium Comparison: Silver Coins
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Silver coin premiums vary by mint and coin type:
                </p>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-sm mb-2">
                    <strong className="text-slate-700">Example at {formatSpotPrice(spotPerOz)}/oz spot:</strong>
                  </p>
                  <ul className="text-slate-600 text-sm space-y-2">
                    <li>• <strong className="text-slate-900">Silver Eagle (~5% premium):</strong> ~{formatSpotPrice(eaglePrice)}</li>
                    <li>• <strong className="text-slate-900">Canadian Maple (~4% premium):</strong> ~{formatSpotPrice(maplePrice)}</li>
                    <li>• <strong className="text-slate-900">Britannia (~4% premium):</strong> ~{formatSpotPrice(Math.round(spotPerOz * 1.04))}</li>
                    <li className="pt-2 border-t border-slate-200">
                      <strong className="text-slate-700">Key factor:</strong> Government-minted coins offer strong liquidity at competitive premiums
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <QASection items={pricesQA} includeSchema={false} priceData={priceData} />

      {/* Monex Research Link */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 mb-6">
            For detailed market analysis and pricing information:
          </p>
          <a
            href="https://www.monex.com/silver-prices/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
          >
            <span>Research silver prices at Monex</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Silver Coin Resources
          </h2>
          <p className="text-slate-600 mb-6">
            Explore our comprehensive{" "}
            <Link href="/resources" className="text-slate-700 hover:underline font-medium">
              educational resources
            </Link>{" "}
            to deepen your understanding of silver coin investing, or return to our{" "}
            <Link href="/" className="text-slate-700 hover:underline font-medium">
              Silver Bullion Coins overview
            </Link>.
          </p>
          <Link href="/resources" className="btn-primary">
            Explore Resources
          </Link>
        </div>
      </section>
    </>
  );
}
