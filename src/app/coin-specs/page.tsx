import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Bullion Coin Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for 1 oz silver bullion coins: .999 fine purity, weight, dimensions, legal tender status, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Silver Bullion Coin Specifications | Technical Details",
    description:
      "Complete technical specifications for 1 oz silver bullion coins: .999 purity, 1 troy oz weight, government-minted legal tender status, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Bullion Coin Specifications",
    description:
      "Complete technical specifications for 1 oz silver bullion coins: .999 purity, 1 troy oz weight, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Purity", value: ".999 fine silver", highlight: true },
  { label: "Silver Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "Approximately 31.1 grams (varies by coin)" },
  { label: "Diameter", value: "Varies by mint (typically 38-40mm)" },
  { label: "Thickness", value: "Varies by mint (typically 2.5-3.2mm)" },
  { label: "Face Value", value: "Varies by issuing nation" },
  { label: "Mints", value: "U.S. Mint, Royal Canadian Mint, Royal Mint, others" },
  { label: "Edge", value: "Typically reeded" },
  { label: "IRA Eligible", value: "Yes (most government-minted coins)", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of government-minted silver coins?",
    answer:
      "Most government-minted silver bullion coins are .999 fine silver, meaning they contain 99.9% pure silver. The Canadian Silver Maple Leaf is .9999 fine (99.99% pure). This high purity ensures maximum silver content and IRA eligibility.",
  },
  {
    question: "How much silver is in a 1 oz silver coin?",
    answer:
      "Each 1 oz silver bullion coin contains exactly 1.0000 troy ounce (31.1035 grams) of pure silver. The gross weight may vary slightly due to manufacturing tolerances, but the silver content is guaranteed.",
  },
  {
    question: "Are silver bullion coins legal tender?",
    answer:
      "Yes, government-minted silver bullion coins carry legal tender status in their country of origin. The American Silver Eagle has a $1 face value, though its silver content is worth significantly more. This government backing provides authenticity assurance.",
  },
  {
    question: "Can I hold silver coins in an IRA?",
    answer:
      "Yes, many silver bullion coins meet IRS requirements for inclusion in a Precious Metals IRA. The .999 purity meets the IRS minimum fineness requirement. You will need a qualified custodian and approved depository to hold IRA-owned coins.",
  },
  {
    question: "Why do silver coins have a premium over spot price?",
    answer:
      "Premiums reflect minting costs, dealer margins, and supply/demand dynamics. Premiums account for mint production costs, distribution, the coin's legal tender status, and its recognition as a trusted government-minted product. Premiums vary based on market conditions.",
  },
  {
    question: "How do different silver coins compare in specifications?",
    answer:
      "Most 1 oz government silver coins share similar specifications: .999 purity, 1 troy oz silver content, and legal tender status. Key differences include diameter, thickness, design, and the issuing mint. The Canadian Maple Leaf offers .9999 purity.",
  },
  {
    question: "What affects silver coin premiums?",
    answer:
      "Key premium drivers include: mint production capacity, dealer inventory levels, overall demand for physical silver, the coin's recognition and liquidity, and broader precious metals market conditions. During high demand periods, premiums typically increase.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Bullion Coin Specifications",
    description:
      "Complete technical specifications and investor facts for 1 oz silver bullion coins.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="accent-text">Silver Coin</span> Specifications
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technical details and investor-facing facts for 1 oz silver bullion coins from major government mints.
            </p>
          </div>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-slate-50" : ""}>
                      <td className="py-4 pr-4 text-slate-500 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-slate-800 font-semibold" : "text-slate-700"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Purity Standard */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The .999 Purity Standard
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At .999 fineness, government-minted silver coins contain 99.9% pure silver with minimal alloys.
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Maximum silver content</strong>: Virtually all of the coin&apos;s weight is pure silver</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">IRS compliance</strong>: Meets the .999 minimum fineness for Precious Metals IRAs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Global recognition</strong>: Standard purity for major silver bullion coins worldwide</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Simple valuation</strong>: Silver content equals coin weight, making spot price calculations straightforward</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">
              Learn more about silver purity at{" "}
              <a
                href="https://www.monex.com/silver-coins/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Coins
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Legal Tender Status
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Government-minted silver coins carry legal tender status in their country of origin. This government backing provides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-slate-500 text-sm">
                  Produced by sovereign mints with strict quality controls and anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Government Guarantee</h3>
                <p className="text-slate-500 text-sm">
                  Weight and purity backed by the issuing government.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Market Recognition</h3>
                <p className="text-slate-500 text-sm">
                  Widely recognized and accepted by dealers worldwide, supporting liquidity.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-slate-500 text-sm">
                  Legal tender status is one requirement for Precious Metals IRA inclusion.
                </p>
              </div>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Many silver bullion coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-slate-600 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Meets IRS purity requirement (.999 minimum)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Produced by an approved national mint</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Must be held by an IRS-approved custodian and depository</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Cannot be stored at home for IRA purposes</span>
              </li>
            </ul>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-700">Note:</strong> This is general information, not tax or investment advice. Consult a qualified tax professional or IRA custodian for guidance specific to your situation.
              </p>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver coins trade at a premium above the spot price of silver. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Minting Costs</h3>
                <p className="text-slate-500 text-sm">
                  Sovereign mint production, quality control, and distribution expenses.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Dealer Margins</h3>
                <p className="text-slate-500 text-sm">
                  Wholesale and retail markups that fund dealer operations.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Supply & Demand</h3>
                <p className="text-slate-500 text-sm">
                  Mint production capacity versus investor demand for physical silver.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Market Conditions</h3>
                <p className="text-slate-500 text-sm">
                  Economic uncertainty, inflation concerns, and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Product Recognition</h3>
                <p className="text-slate-500 text-sm">
                  Government backing and global recognition support competitive spreads.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              View current silver pricing at{" "}
              <a
                href="https://www.monex.com/silver-prices/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Prices
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-silver-prices" className="btn-primary">
                View Silver Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
