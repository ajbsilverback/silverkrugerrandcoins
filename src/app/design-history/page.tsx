import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Krugerrand Design & History | South African Bullion Heritage",
  description:
    "Explore the history and design of the South African Silver Krugerrand. Learn about Paul Kruger, the Springbok design, and the 50-year legacy of the Krugerrand name.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Silver Krugerrand Design & History | South African Bullion Heritage",
    description:
      "The story behind the iconic Silver Krugerrand design and its connection to 50+ years of South African bullion history.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Krugerrand Design & History",
    description:
      "Explore the history and design of the South African Silver Krugerrand coin.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Krugerrand Design & History",
    description:
      "The history and design origins of the South African Silver Krugerrand coin.",
    url: `${SITE_CONFIG.domain}/design-history`,
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Design <span className="accent-text">&amp; History</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              The story behind the iconic Silver Krugerrand design and its connection to 50+ years of South African bullion heritage.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The Krugerrand Legacy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Krugerrand is the world&apos;s most famous bullion coin. First minted in gold in 1967 by the South African Mint, the Krugerrand revolutionized precious metals investing by making gold accessible to individual investors.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In 2017, to commemorate the 50th anniversary of the Gold Krugerrand, the South African Mint introduced the Silver Krugerrand. The silver version carries the same iconic design that has made the Krugerrand name synonymous with bullion investing worldwide.
            </p>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Text Column */}
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Obverse: Paul Kruger Portrait
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The obverse of the Silver Krugerrand features the portrait of Stephanus Johannes Paulus Kruger (1825-1904), commonly known as Paul Kruger. Key features include:
                </p>
                <ul className="space-y-3 text-slate-600 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Presidential portrait</strong>: Paul Kruger served four terms as President of the South African Republic (1883-1900)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Historical significance</strong>: Kruger is a foundational figure in South African history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Design continuity</strong>: The same portrait has appeared on Krugerrands since 1967</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  The inscription &quot;SUID-AFRIKA&quot; and &quot;SOUTH AFRICA&quot; appears on either side of the portrait, reflecting South Africa&apos;s bilingual heritage.
                </p>
              </div>
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  <Image
                    src="/south-african-silver-krugerrand-obverse.png"
                    alt="South African Silver Krugerrand obverse showing Paul Kruger portrait"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  <Image
                    src="/south-african-silver-krugerrand-reverse.png"
                    alt="South African Silver Krugerrand reverse showing Springbok antelope"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Reverse: Springbok Antelope
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The reverse features the Springbok antelope, South Africa&apos;s national animal and a symbol recognized worldwide through South African sports teams and national identity.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The design was created by Coert Steynberg and has remained unchanged since the first Krugerrand in 1967. Key specifications inscribed on the reverse include:
                </p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">&quot;KRUGERRAND&quot;</strong> - the iconic coin name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">&quot;FYNSILWER 1 OZ FINE SILVER&quot;</strong> - weight and purity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Year of mintage</strong> - below the Springbok</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Krugerrand History */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The Krugerrand Story
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Krugerrand has a unique place in precious metals history:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Revolutionary Concept (1967)</h3>
                <p className="text-slate-500 text-sm">
                  The Gold Krugerrand was the first modern bullion coin designed for investment. It made gold ownership accessible to ordinary investors, not just governments and institutions.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Global Success</h3>
                <p className="text-slate-500 text-sm">
                  By the 1980s, the Krugerrand accounted for 90% of the global gold coin market. Over 50 million Gold Krugerrands have been minted.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Silver Introduction (2017)</h3>
                <p className="text-slate-500 text-sm">
                  The 50th anniversary brought the Silver Krugerrand, offering the iconic design in an accessible silver format for a new generation of investors.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Continuing Legacy</h3>
                <p className="text-slate-500 text-sm">
                  Today, the Silver Krugerrand continues the tradition of the world&apos;s most recognized bullion coin name.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
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

          {/* What Design Signals to Investors */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              What the Krugerrand Design Signals to Investors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For investors, the Krugerrand design conveys more than visual appeal:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Proven Heritage</h3>
                <p className="text-slate-500 text-sm">
                  50+ years of the Gold Krugerrand establishes the design as the most recognized bullion image worldwide.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Global Recognition</h3>
                <p className="text-slate-500 text-sm">
                  The Krugerrand name and design are recognized by dealers and investors on every continent, facilitating transactions.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Government Backing</h3>
                <p className="text-slate-500 text-sm">
                  The South African Mint guarantee provides authenticity assurance and weight/purity backing.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Collector Crossover</h3>
                <p className="text-slate-500 text-sm">
                  Gold Krugerrand collectors often expand into silver, creating additional demand and supporting liquidity.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Key Dates in Krugerrand History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1967</div>
                <p className="text-slate-600">First Gold Krugerrand minted by South African Mint</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1970s</div>
                <p className="text-slate-600">Krugerrand becomes the dominant global gold coin</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1980</div>
                <p className="text-slate-600">Krugerrand accounts for 90% of world gold coin market</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2017</div>
                <p className="text-slate-600">Silver Krugerrand introduced for 50th anniversary</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2018+</div>
                <p className="text-slate-600">Silver Krugerrand becomes annual bullion program</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-slate-600">Silver Krugerrand joins the world&apos;s premier silver bullion coins</p>
              </div>
            </div>
          </section>

          {/* Design Comparison */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Silver Krugerrand vs Gold Krugerrand
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Silver Krugerrand maintains design continuity with its gold predecessor:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">Shared Elements</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• Paul Kruger portrait on obverse</li>
                  <li>• Springbok antelope on reverse</li>
                  <li>• &quot;KRUGERRAND&quot; name inscription</li>
                  <li>• South African Mint production</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">Key Differences</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• .999 fine silver vs .9167 gold alloy</li>
                  <li>• Larger diameter (38.725mm vs 32.6mm)</li>
                  <li>• Different weight inscriptions</li>
                  <li>• Introduced 50 years after gold version</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-slate-200">
            <p className="text-slate-500 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Coin Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
