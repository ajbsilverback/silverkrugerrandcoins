import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Silver Coin Design & History | Iconic Government Mint Designs",
  description:
    "Explore the history and design of silver bullion coins from government mints worldwide. Learn about iconic designs, artistic heritage, and what coin design signals to investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Silver Coin Design & History | Iconic Government Mint Designs",
    description:
      "The story behind iconic silver coin designs from government mints worldwide and what they mean for modern silver investors.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Silver Coin Design & History",
    description:
      "Explore the history and design of silver bullion coins from government mints worldwide.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Silver Coin Design & History",
    description:
      "The history and design origins of silver bullion coins from government mints worldwide.",
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
              The story behind iconic silver coin designs from government mints worldwide, from classical artistry to modern bullion programs.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              The Art of Silver Coinage
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Silver coins have been a medium of artistic expression and store of value for thousands of years. Modern silver bullion coins from government mints combine centuries of numismatic tradition with investment-grade quality.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Each major silver coin program features distinctive designs that reflect national identity, artistic heritage, and the values of the issuing nation. These designs contribute to the coins&apos; recognition, authenticity, and liquidity in global markets.
            </p>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Text Column */}
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Obverse: National Symbols & Heritage
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The obverse (front) of silver bullion coins typically features imagery that represents the issuing nation. Common themes include:
                </p>
                <ul className="space-y-3 text-slate-600 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">National symbols</strong>: Liberty, monarchs, or emblems representing the country of origin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Historical figures</strong>: Iconic representations from the nation&apos;s history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-500">•</span>
                    <span><strong className="text-slate-900">Artistic interpretations</strong>: Classic designs that have stood the test of time</span>
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  These designs serve dual purposes: establishing authenticity through government authority and creating collector appeal through artistic merit.
                </p>
              </div>
              {/* Image Column */}
              <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  <Image
                    src="/silver-american-eagle-obverse.png"
                    alt="Silver coin obverse design example"
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
                    src="/silver-american-eagle-reverse.png"
                    alt="Silver coin reverse design example"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 320px, 320px"
                  />
                </div>
              </div>
              {/* Text Column */}
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                  Reverse: National Identity & Specifications
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The reverse (back) of silver coins typically displays national emblems, wildlife, or symbolic imagery that reinforces the coin&apos;s origin and authenticity.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Key information inscribed on the reverse includes the country of origin, denomination, weight, and purity specifications. This standardized information allows for immediate verification and supports global liquidity.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Modern security features may also be incorporated into reverse designs, including micro-engraving and other anti-counterfeiting measures.
                </p>
              </div>
            </div>
          </section>

          {/* Major Silver Coin Programs */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Major Silver Coin Programs
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Government mints around the world produce silver bullion coins with distinctive designs and specifications:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">American Silver Eagle</h3>
                <p className="text-slate-500 text-sm">
                  Featuring Walking Liberty on the obverse and a heraldic eagle on the reverse. First minted in 1986 by the U.S. Mint.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Canadian Maple Leaf</h3>
                <p className="text-slate-500 text-sm">
                  The iconic maple leaf design with .9999 fine purity. Produced by the Royal Canadian Mint since 1988.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">British Britannia</h3>
                <p className="text-slate-500 text-sm">
                  Features the classical figure of Britannia. Produced by the Royal Mint with advanced security features.
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="text-slate-800 font-semibold mb-2">Austrian Philharmonic</h3>
                <p className="text-slate-500 text-sm">
                  Musical instruments of the Vienna Philharmonic Orchestra. Minted by the Austrian Mint.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm">
              Learn more about silver coins at{" "}
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

          {/* What Design Signals to Investors */}
          <section className="card p-6 md:p-8 mb-10 bg-slate-50 border-slate-200">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              What Design Signals to Investors
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For investors, coin design conveys more than visual appeal:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Government Authority</h3>
                <p className="text-slate-500 text-sm">
                  Official designs signal authenticity and weight/purity guarantees backed by sovereign governments.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Global Recognition</h3>
                <p className="text-slate-500 text-sm">
                  Well-known designs are recognized by dealers and investors worldwide, facilitating transactions and supporting liquidity.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Collector Crossover</h3>
                <p className="text-slate-500 text-sm">
                  Artistic merit appeals to both bullion investors and numismatists, potentially broadening the buyer pool when selling.
                </p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <h3 className="text-slate-900 font-semibold">Security Features</h3>
                <p className="text-slate-500 text-sm">
                  Modern designs incorporate anti-counterfeiting measures that protect investors and support confidence in the secondary market.
                </p>
              </div>
            </div>
          </section>

          {/* Design Evolution */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-4">
              Design Comparison: Major Silver Coins
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Each major silver coin has distinctive design characteristics:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">American Silver Eagle</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• Adolph Weinman&apos;s 1916 Walking Liberty design</li>
                  <li>• Heraldic eagle reverse (redesigned 2021)</li>
                  <li>• Celebrates American freedom and ideals</li>
                  <li>• Most traded silver coin in the world</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="text-slate-800 font-semibold mb-3">Canadian Maple Leaf</h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  <li>• Iconic maple leaf national symbol</li>
                  <li>• Queen Elizabeth II / King Charles III portrait</li>
                  <li>• Highest purity (.9999 fine)</li>
                  <li>• Advanced security features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-slate-900 mb-6">
              Key Dates in Silver Bullion History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1986</div>
                <p className="text-slate-600">American Silver Eagle program launches</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1988</div>
                <p className="text-slate-600">Canadian Silver Maple Leaf introduced</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">1997</div>
                <p className="text-slate-600">British Silver Britannia begins production</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2008</div>
                <p className="text-slate-600">Austrian Silver Philharmonic launched</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">2021</div>
                <p className="text-slate-600">American Silver Eagle reverse redesigned</p>
              </div>
              <div className="flex gap-4">
                <div className="text-slate-700 font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-slate-600">Silver bullion coins remain popular investment vehicles worldwide</p>
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
