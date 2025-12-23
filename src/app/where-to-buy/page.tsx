import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Where to Buy Silver Bullion Coins | Independent Dealer Guide",
  description:
    "Independent guide to buying silver bullion coins from online dealers, local coin shops, government mints, and authorized distributors. No endorsements. Educational information only.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/where-to-buy`,
  },
  openGraph: {
    title: "Where to Buy Silver Bullion Coins | Independent Dealer Guide",
    description:
      "Independent guide to buying silver bullion coins from online dealers, local coin shops, and authorized sources. Educational information only.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Silver Bullion Coins | Independent Dealer Guide",
    description:
      "Independent guide to buying silver bullion coins from online dealers, local coin shops, and authorized sources.",
  },
};

// Online dealers data - multiple sources for comparison
const onlineDealers = [
  {
    name: "Monex",
    description:
      "A precious metals dealer providing live market data and silver bullion coins alongside other silver products.",
    url: "https://www.monex.com/silver-coins/",
  },
  {
    name: "JM Bullion",
    description:
      "An established online precious metals dealer offering Silver Eagles, Maple Leafs, and other government-minted bullion.",
    url: "https://www.jmbullion.com/",
  },
  {
    name: "APMEX",
    description:
      "One of the largest online bullion retailers with a wide selection of silver bullion coins in various conditions.",
    url: "https://www.apmex.com/",
  },
  {
    name: "SD Bullion",
    description:
      "An online dealer known for competitive pricing on silver coins and other government-minted bullion products.",
    url: "https://sdbullion.com/",
  },
  {
    name: "Goldline",
    description:
      "A precious metals dealer offering silver coins with personalized service and market insights.",
    url: "https://www.goldline.com/",
  },
  {
    name: "GovMint",
    description:
      "A collectible coins and precious metals dealer specializing in government-issued bullion including silver coins.",
    url: "https://www.govmint.com/",
  },
  {
    name: "Bullion Exchanges",
    description:
      "A New York-based bullion dealer offering silver bullion coins with multiple payment options.",
    url: "https://bullionexchanges.com/",
  },
  {
    name: "Provident Metals",
    description:
      "An online bullion dealer offering competitive prices on silver coins and other government bullion.",
    url: "https://www.providentmetals.com/",
  },
  {
    name: "Money Metals Exchange",
    description:
      "A precious metals dealer offering silver coins with price transparency and educational content.",
    url: "https://www.moneymetals.com/",
  },
];

export default function WhereToBuyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Where to Buy Silver Bullion Coins | Independent Buying Guide",
    description:
      "Learn where to buy silver bullion coins online and locally, including major dealers, local coin shops, and authorized distributors.",
    url: `${SITE_CONFIG.domain}/where-to-buy`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Where to buy silver bullion coins",
    description:
      "Types of vendors and platforms for purchasing silver bullion coins",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Online Bullion Dealers",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Government Mint Authorized Purchasers",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Local Coin Shops",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Precious Metals IRA Custodians",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {/* Hero Section */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="accent-text">Where to Buy</span>
              <br />
              <span className="text-slate-900">Silver Bullion Coins</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6">
              An independent educational guide to understanding your options
              for purchasing silver bullion coins from various authorized sources.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-slate-600 text-sm">
                <strong className="text-slate-800">Important:</strong>{" "}
                {SITE_CONFIG.brandName} is an independent educational resource.
                We do not sell precious metals and are not affiliated with any
                of the dealers listed on this page. We encourage you to compare
                prices and services across multiple dealers before making any
                purchase. All purchasing decisions should be made after your
                own research and due diligence.
              </p>
            </div>
          </section>

          {/* How to Evaluate Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
              How to <span className="accent-text">Evaluate Dealers</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Reputation & Reviews
                </h3>
                <p className="text-slate-600 text-sm">
                  Research dealer history, customer reviews, and industry
                  accreditations. Look for established businesses with
                  transparent track records and authorized dealer status.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Pricing & Premiums
                </h3>
                <p className="text-slate-600 text-sm">
                  Compare premiums over spot price across multiple dealers.
                  Silver coins typically carry 3-6% premiums over spot
                  for standard bullion coins.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Shipping & Insurance
                </h3>
                <p className="text-slate-600 text-sm">
                  Understand shipping costs, delivery times, and insurance
                  coverage. For silver coins, fully insured and discreet
                  shipping is essential for protection.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Buyback Policies
                </h3>
                <p className="text-slate-600 text-sm">
                  Check whether the dealer offers buyback programs. Silver
                  coins have excellent liquidity, and reputable dealers maintain
                  competitive buyback prices.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Authenticity Guarantee
                </h3>
                <p className="text-slate-600 text-sm">
                  Ensure dealers guarantee authenticity. Silver coins from
                  reputable dealers should come with verification and return
                  policies if authenticity concerns arise.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Customer Support
                </h3>
                <p className="text-slate-600 text-sm">
                  For precious metals purchases, responsive customer service
                  is important. Evaluate accessibility and helpfulness before
                  committing.
                </p>
              </div>
            </div>
          </section>

          {/* Government Mints & Authorized Sources */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Government Mints</span> & Authorized Sources
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                Silver bullion coins are minted by sovereign mints worldwide. 
                While some mints sell directly to the public, most bullion coins 
                are distributed through Authorized Purchasers and dealers.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Understanding the Distribution Chain
                </h3>
                <p className="text-slate-600 text-sm">
                  Government mints typically sell bullion coins to a network of 
                  <strong className="text-slate-900"> Authorized Purchasers</strong>, large 
                  dealers who meet mint requirements. These Authorized Purchasers 
                  then sell to smaller dealers and the public.
                </p>
              </div>
              <div className="space-y-3">
                <span className="text-slate-600">
                  Major government mints include the{" "}
                  <a
                    href="https://www.usmint.gov/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >
                    U.S. Mint
                  </a>,{" "}
                  <a
                    href="https://www.mint.ca/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >
                    Royal Canadian Mint
                  </a>, and{" "}
                  <a
                    href="https://www.royalmint.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >
                    Royal Mint
                  </a>.
                </span>
              </div>
            </div>
          </section>

          {/* Online Bullion Dealers */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Online</span> Bullion Dealers
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Major online dealers offer competitive pricing on silver bullion 
              coins with convenient shipping. We encourage you to compare prices
              across multiple sources before purchasing.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineDealers.map((dealer) => (
                <div
                  key={dealer.name}
                  className="card p-6 flex flex-col"
                >
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
                    {dealer.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    {dealer.description}
                  </p>
                  <a
                    href={dealer.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium"
                  >
                    <span>Visit {dealer.name}</span>
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
              ))}
            </div>
          </section>

          {/* Local Coin Shops */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Local</span> Coin Shops & Dealers
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                Local coin shops and bullion dealers commonly stock silver bullion 
                coins, offering convenient face-to-face transactions:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Immediate possession:</strong>{" "}
                    Walk out with your silver coins the same day, no shipping delays.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Physical inspection:</strong>{" "}
                    Examine coins before purchase and verify condition in person.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Build relationships:</strong>{" "}
                    Regular customers often receive better pricing and first access 
                    to inventory.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Local expertise:</strong>{" "}
                    Many local dealers have decades of numismatic experience.
                  </span>
                </li>
              </ul>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-500 text-sm">
                  <strong className="text-slate-600">Finding local dealers:</strong>{" "}
                  Search for &ldquo;coin shop near me&rdquo; or &ldquo;silver dealer&rdquo;
                  in your area. Call ahead to confirm silver coin availability and pricing.
                </p>
              </div>
            </div>
          </section>

          {/* Precious Metals IRAs */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              <span className="accent-text">Precious Metals</span> IRA Custodians
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                For IRA purchases, you&apos;ll work with a specialized custodian 
                who handles the regulatory requirements. Many silver bullion 
                coins are IRS-approved for Precious Metals IRAs.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  IRA Eligibility Requirements
                </h3>
                <p className="text-slate-600 text-sm">
                  Silver coins meeting IRS requirements (.999 minimum purity, 
                  government-minted) qualify for Precious Metals IRAs. Coins must 
                  be held by an approved custodian in an approved depository.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Self-directed IRA required:</strong>{" "}
                    You need a self-directed IRA that allows precious metals investments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Custodian handles purchases:</strong>{" "}
                    The custodian facilitates the coin purchase and storage arrangement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">Storage requirements:</strong>{" "}
                    IRA silver must be stored at an IRS-approved depository.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Price & Data Sources */}
          <section>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
              Using Multiple <span className="accent-text">Pricing Sources</span>
            </h2>
            <div className="card p-8 max-w-3xl mx-auto">
              <p className="text-slate-600 mb-6">
                Our{" "}
                <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
                  live silver prices
                </Link>{" "}
                use data from Monex, but comparing prices across multiple
                sources helps you understand market conditions and verify
                dealer pricing.
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Additional pricing resources:
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://www.monex.com/silver-prices/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
                  >
                    <span>Monex Silver pricing</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-slate-400 text-sm ml-2">· Prices provided by Monex</span>
                </li>
                <li>
                  <span className="text-slate-600">Cross-check prices at{" "}
                    <a
                      href="https://www.kitco.com/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-slate-700 hover:underline font-medium"
                    >Kitco</a>,{" "}
                    <a
                      href="https://silverprice.org/"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="text-slate-700 hover:underline font-medium"
                    >SilverPrice.org</a>, or other market data sources</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-slate-200 pt-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl font-display font-semibold text-slate-500 mb-4">
                Disclaimer
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                {SITE_CONFIG.brandName} does not endorse, recommend, or rank any
                specific dealer, platform, or storage provider. The information
                on this page is for educational purposes only and should not be
                construed as financial advice or a recommendation to purchase
                from any particular source. We encourage you to compare prices
                and services across multiple dealers. Silver investments carry risks,
                and prices can fluctuate significantly. Always perform your own due
                diligence, verify dealer credentials, and consult with a
                qualified financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <p className="text-slate-500 mb-6">
              Related pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-silver-prices" className="btn-primary">
                View Live Silver Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Educational Resources
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
