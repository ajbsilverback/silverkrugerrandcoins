import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-chrome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-display font-semibold accent-text-light">
                {SITE_CONFIG.brandName}
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted educational resource for {SITE_CONFIG.primaryProduct}. 
              Helping investors understand government-minted silver coins with 
              .999 fine purity and strong liquidity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/live-silver-prices"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Silver Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/coin-specs"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Coin Specifications
                </Link>
              </li>
              <li>
                <Link
                  href="/design-history"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Design &amp; History
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/where-to-buy"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Where to Buy Silver Coins
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/premiums-explained"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Understanding Premiums
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/coin-comparison"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Comparing Silver Coins
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/storage-options"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Storage Options
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-300 text-sm">
              © {currentYear} {SITE_CONFIG.brandName}. All rights reserved.
            </p>
            <p className="text-slate-400 text-xs">
              Educational content only. Not financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
