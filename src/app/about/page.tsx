import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Silver Bullion Coins | Independent Educational Resource",
  description:
    "Silver Bullion Coins is an independent educational resource about silver bullion coins. We do not sell precious metals, provide financial advice, or endorse any dealers.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/about`,
  },
  openGraph: {
    title: "About Silver Bullion Coins | Independent Educational Resource",
    description:
      "Independent educational resource about silver bullion coins. We do not sell precious metals or provide financial advice.",
    url: `${SITE_CONFIG.domain}/about`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About Silver Bullion Coins | Independent Educational Resource",
    description:
      "Independent educational resource about silver bullion coins. We do not sell precious metals or provide financial advice.",
  },
};

export default function AboutPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Silver Bullion Coins",
    description:
      "Learn about Silver Bullion Coins, an independent educational resource about silver bullion coins.",
    url: `${SITE_CONFIG.domain}/about`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="accent-text">{SITE_CONFIG.brandName}</span>
            </h1>
            <p className="text-xl text-slate-600">
              An independent educational resource for silver coin investors
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* What We Are */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                What We Are
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} is an independent educational website
                dedicated to helping investors understand{" "}
                {SITE_CONFIG.primaryProduct}, including government-minted coins 
                with .999 fine purity.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to provide clear, unbiased information about 
                silver coin investing, including pricing mechanics, purity 
                standards, IRA eligibility, and how different silver coins compare 
                to each other.
              </p>
            </section>

            {/* What We Are NOT */}
            <section className="card p-6 md:p-8 border-red-200">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                What We Are{" "}
                <span className="text-red-500">NOT</span>
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not a dealer:</strong> We do
                    not sell silver coins, bars, or any precious metals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not affiliated:</strong> We
                    have no financial relationship with Monex, any government mint, or 
                    any of the dealers mentioned on our site.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">Not financial advisors:</strong>{" "}
                    We do not provide investment advice, recommendations, or
                    personalized guidance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>
                    <strong className="text-slate-900">No endorsements:</strong> Listing
                    a dealer or resource does not constitute an endorsement or
                    recommendation.
                  </span>
                </li>
              </ul>
            </section>

            {/* Pricing Data */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                How We Source Pricing Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The live silver prices displayed on our{" "}
                <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
                  prices page
                </Link>{" "}
                are fetched from the Monex API. We display two price feeds:
              </p>
              <ul className="space-y-2 text-slate-600 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span>
                    <strong className="text-slate-900">Silver coin price</strong> (current
                    ask price for silver bullion coins)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span>
                    <strong className="text-slate-900">Silver spot price</strong> (raw
                    spot price per troy ounce)
                  </span>
                </li>
              </ul>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-slate-500 text-sm">
                  <strong className="text-slate-700">Important:</strong> Prices
                  are fetched once per page load for display purposes only. We
                  strongly encourage cross-checking prices with multiple sources
                  (<a
                    href="https://www.kitco.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >Kitco</a>, <a
                    href="https://silverprice.org/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-slate-700 hover:underline font-medium"
                  >SilverPrice.org</a>, dealer websites) before making any
                  purchasing decisions.
                </p>
              </div>
            </section>

            {/* Editorial Independence */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                Editorial Independence
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                {SITE_CONFIG.brandName} operates independently. We:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Do not receive commissions or referral fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Do not accept payment for listings or rankings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>List multiple dealers for educational comparison</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Encourage readers to conduct independent research</span>
                </li>
              </ul>
            </section>

            {/* About Silver Bullion Coins */}
            <section className="card p-6 md:p-8 bg-slate-50 border-slate-200">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                About Silver Bullion Coins
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Silver bullion coins are government-minted coins containing a specific 
                weight of .999 fine silver. Popular examples include:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">American Silver Eagle</strong> (U.S. Mint)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">Canadian Silver Maple Leaf</strong> (Royal Canadian Mint)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">British Silver Britannia</strong> (Royal Mint)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">1 troy ounce</strong> of silver content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500">•</span>
                  <span><strong className="text-slate-900">IRA eligible</strong> for Precious Metals IRAs</span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="card p-6 md:p-8">
              <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For questions, corrections, or feedback about the educational
                content on this site:
              </p>
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-900">Website:</strong>{" "}
                <a
                  href={SITE_CONFIG.domain}
                  className="text-slate-700 hover:underline font-medium"
                >
                  {SITE_CONFIG.domain}
                </a>
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Note: We cannot provide investment advice or dealer
                recommendations. Please consult a qualified financial advisor
                for personalized guidance.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
                All content on {SITE_CONFIG.brandName} is for educational and
                informational purposes only. Silver investments carry risks, and
                prices can fluctuate significantly. Past performance does not
                guarantee future results. Always conduct your own research and
                consult with qualified professionals before making investment
                decisions.
              </p>
            </section>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/" className="btn-primary">
                Return Home
              </Link>
              <Link href="/live-silver-prices" className="btn-secondary">
                View Silver Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
