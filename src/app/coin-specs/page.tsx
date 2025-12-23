import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Krugerrand Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for the South African Silver Krugerrand: .999 fine purity, 1 oz weight, dimensions, legal tender status, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Silver Krugerrand Specifications | Technical Details",
    description:
      "Complete technical specifications for the South African Silver Krugerrand: .999 purity, 1 troy oz weight, South African Mint backing, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Krugerrand Specifications",
    description:
      "Complete technical specifications for the South African Silver Krugerrand: .999 purity, 1 troy oz weight, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Purity", value: ".999 fine silver", highlight: true },
  { label: "Silver Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "33.93 grams" },
  { label: "Diameter", value: "38.725 mm" },
  { label: "Thickness", value: "3.2 mm" },
  { label: "Face Value", value: "1 Rand (South Africa)" },
  { label: "Mint", value: "South African Mint" },
  { label: "Edge", value: "Reeded" },
  { label: "IRA Eligible", value: "Yes", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the Silver Krugerrand?",
    answer:
      "The Silver Krugerrand is struck in .999 fine silver, meaning it contains 99.9% pure silver. This high purity ensures maximum silver content and meets the IRS minimum requirement for Precious Metals IRA eligibility.",
  },
  {
    question: "How much silver is in a Silver Krugerrand?",
    answer:
      "Each 1 oz Silver Krugerrand contains exactly 1.0000 troy ounce (31.1035 grams) of pure silver. The gross weight of 33.93 grams includes the coin's silver content plus a small amount of alloy for durability.",
  },
  {
    question: "Is the Silver Krugerrand legal tender?",
    answer:
      "Yes, the Silver Krugerrand carries a face value of 1 South African Rand, making it legal tender in South Africa. Like all bullion coins, its silver content is worth significantly more than its face value. This government backing provides authenticity assurance.",
  },
  {
    question: "Can I hold Silver Krugerrands in an IRA?",
    answer:
      "Yes, Silver Krugerrand coins meet IRS requirements for inclusion in a Precious Metals IRA. The .999 purity meets the IRS minimum fineness requirement. You will need a qualified custodian and approved depository to hold IRA-owned coins.",
  },
  {
    question: "Why do Silver Krugerrands have a premium over spot price?",
    answer:
      "Premiums reflect South African Mint production costs, dealer margins, and supply/demand dynamics. Premiums account for minting, distribution, the coin's legal tender status, and its recognition as a product from the world's most famous bullion coin family.",
  },
  {
    question: "When was the Silver Krugerrand introduced?",
    answer:
      "The Silver Krugerrand was first minted in 2017 to commemorate the 50th anniversary of the Gold Krugerrand. It shares the same iconic design as the original 1967 Gold Krugerrand, featuring Paul Kruger on the obverse and the Springbok antelope on the reverse.",
  },
  {
    question: "What affects Silver Krugerrand premiums?",
    answer:
      "Key premium drivers include: South African Mint production capacity, dealer inventory levels, overall demand for physical silver, the Krugerrand's global recognition, and broader precious metals market conditions. During high demand periods, premiums typically increase.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "South African Silver Krugerrand Specifications",
    description:
      "Complete technical specifications and investor facts for the South African Silver Krugerrand coin.",
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
              <span className="accent-text">Silver Krugerrand</span> Specifications
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Technical details and investor-facing facts for the South African Silver Krugerrand coin.
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
              At .999 fineness, the Silver Krugerrand contains 99.9% pure silver with minimal alloys.
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
                <span><strong className="text-slate-900">Global recognition</strong>: Standard purity level matching other major silver bullion coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong className="text-slate-900">Simple valuation</strong>: Silver content equals one troy ounce, making spot price calculations straightforward</span>
              </li>
            </ul>
            <p className="text-slate-500 text-sm mt-4">
              Learn more about Silver Krugerrand coins at{" "}
              <a
                href="https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Krugerrand
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Legal Tender Status
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Silver Krugerrand carries a face value of 1 South African Rand, making it legal tender in South Africa. This government backing provides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-slate-500 text-sm">
                  Produced by the South African Mint with strict quality controls and anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Government Guarantee</h3>
                <p className="text-slate-500 text-sm">
                  Weight and purity backed by the South African government.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Market Recognition</h3>
                <p className="text-slate-500 text-sm">
                  The Krugerrand name is recognized worldwide by dealers and investors, supporting liquidity.
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
              Silver Krugerrand coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-slate-600 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Meets IRS purity requirement (.999 minimum)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600">✓</span>
                <span>Produced by the South African Mint (approved national mint)</span>
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
              Silver Krugerrands trade at a premium above the spot price of silver. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Minting Costs</h3>
                <p className="text-slate-500 text-sm">
                  South African Mint production, quality control, and distribution expenses.
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
                  South African Mint production capacity versus investor demand for Silver Krugerrands.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Market Conditions</h3>
                <p className="text-slate-500 text-sm">
                  Economic uncertainty, inflation concerns, and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Brand Recognition</h3>
                <p className="text-slate-500 text-sm">
                  The Krugerrand name carries 50+ years of bullion heritage, supporting competitive spreads.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              View current Silver Krugerrand pricing at{" "}
              <a
                href="https://www.monex.com/silver-south-african-krugerrand-price-charts/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-slate-700 hover:underline font-medium"
              >
                Monex Silver Krugerrand Price Charts
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
