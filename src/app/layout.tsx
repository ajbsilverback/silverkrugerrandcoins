import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | .999 Fine Silver Coin Guide`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about silver bullion coins. Government-minted, .999 fine silver coins with strong liquidity. Expert insights on pricing, premiums, and investing.",
  keywords: [
    "silver bullion coins",
    "silver coin",
    "1 oz silver coin",
    ".999 fine silver",
    "silver bullion",
    "buy silver coins",
    "silver coin prices",
    "silver coin investment",
    "IRA eligible silver",
    "Silver Eagle",
    "Silver Maple Leaf",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | .999 Fine Silver Coin Guide`,
    description:
      "Discover everything about silver bullion coins. Government-minted, .999 fine silver coins with strong liquidity.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Silver Bullion Coins - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | .999 Fine Silver Coin Guide`,
    description:
      "Discover everything about silver bullion coins. Government-minted, .999 fine silver coins with strong liquidity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
