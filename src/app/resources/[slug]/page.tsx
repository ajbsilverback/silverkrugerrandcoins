import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { resources, getResourceBySlug } from "@/data/resources";
import { getArticleContent } from "@/data/article-content";
import AISummary from "@/components/AISummary";
import QASection from "@/components/QASection";
import Container from "@/components/Container";
import { resourceQA } from "@/data/qa-content";
import { fetchProductSpot } from "@/lib/monexSpot";
import { replaceTokens } from "@/lib/priceTokens";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `${SITE_CONFIG.canonicalDomain}/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE_CONFIG.domain}/resources/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.description,
    },
  };
}

// Generate descriptive Monex anchor text for each article
function getMonexAnchorText(slug: string): string {
  const anchorTextMap: Record<string, string> = {
    "premiums-explained": "Monex silver market pricing information",
    "coin-comparison": "Monex guide to investing in silver",
    "storage-options": "Monex silver investment knowledge base",
    "purity-advantages": "Monex silver coin product information",
    "liquidity-considerations": "Monex silver investment resources",
    "market-dynamics": "Monex live silver prices",
    "spreads-explained": "Monex silver price data",
    "authentication-guide": "Monex silver investing knowledge base",
    "ira-eligibility": "Monex silver IRA information",
    "portfolio-allocation": "Monex investing in silver resources",
    "first-time-buyers-guide": "Monex silver coin products and pricing",
    "tax-considerations": "Monex silver investment knowledge base",
  };
  return anchorTextMap[slug] || "Monex silver resources";
}

// Generate AI summary bullets based on resource content
function generateAISummaryBullets(slug: string, title: string): string[] {
  const summaryMap: Record<string, string[]> = {
    "premiums-explained": [
      "This article explains why silver coins have premiums over spot",
      "Learn how premiums of 3-6% compare across different silver coins",
      "Understand the factors that cause premium fluctuations",
      "Discover strategies to secure the best pricing when purchasing",
      "Compare total cost of ownership for different silver coin options",
    ],
    "coin-comparison": [
      "This article compares Silver Eagle, Maple Leaf, and Britannia coins",
      "Learn the key differences: .999 purity vs .9999 (Maple Leaf)",
      "Understand that all 1 oz coins contain exactly 1 oz of silver",
      "Discover which coin best fits different investment goals",
      "Get guidance on IRA eligibility for each coin type",
    ],
    "storage-options": [
      "This article covers storage solutions for silver coins",
      "Learn about home safes, safe deposit boxes, and vault options",
      "Understand IRA storage requirements at approved depositories",
      "Discover insurance considerations for your silver holdings",
      "Get guidance on protecting your silver investment",
    ],
    "purity-advantages": [
      "This article explains the significance of .999 fine purity",
      "Learn why purity standards matter for silver coins",
      "Understand purity vs silver content (all contain 1 oz silver)",
      "Discover when higher purity matters for investors",
      "Compare different silver coins for various use cases",
    ],
    "liquidity-considerations": [
      "This article explains liquidity dynamics for silver coins",
      "Learn how government-minted products ensure strong dealer demand",
      "Understand typical sale timelines (1-2 business days)",
      "Discover strategies for efficient buying and selling",
      "Get guidance on documentation for smooth transactions",
    ],
    "market-dynamics": [
      "This article explains the forces that move silver prices",
      "Learn how industrial demand and investment flows affect silver values",
      "Understand the role of economic events and safe-haven demand",
      "Discover how supply dynamics influence the silver market",
      "Get context for interpreting silver price movements",
    ],
    "spreads-explained": [
      "This article explains bid-ask spreads on silver coins",
      "Learn why silver coin spreads are typically 3-5%",
      "Understand how spreads affect your total cost of ownership",
      "Discover strategies to minimize spread impact on returns",
      "Calculate your break-even point including spread costs",
    ],
    "authentication-guide": [
      "This article covers authentication for silver coins",
      "Learn the official specifications for major silver coins",
      "Understand professional authentication options (NGC, PCGS)",
      "Discover visual verification techniques for government coins",
      "Get guidance on avoiding counterfeits and red flags",
    ],
    "ira-eligibility": [
      "This article explains silver coin IRA eligibility",
      "Learn why .999 purity meets IRS requirements",
      "Understand custodian and depository requirements",
      "Discover the costs of IRA silver ownership",
      "Compare IRA ownership vs personal possession",
    ],
    "portfolio-allocation": [
      "This article covers strategic allocation to silver coins",
      "Learn typical precious metals allocations (5-15% of portfolio)",
      "Understand physical silver vs ETF trade-offs",
      "Discover dollar-cost averaging vs lump-sum strategies",
      "Get guidance on balancing IRA and personal holdings",
    ],
    "first-time-buyers-guide": [
      "This article guides first-time buyers through silver coin purchases",
      "Learn how to evaluate and select reputable dealers",
      "Understand payment methods, settlement, and delivery",
      "Discover why dealer pricing varies and how to compare",
      "Get practical tips for documentation and storage preparation",
    ],
    "tax-considerations": [
      "This article provides a high-level overview of silver tax considerations",
      "Learn how physical silver is classified for federal tax purposes",
      "Understand capital gains basics and holding period implications",
      "Discover how state tax treatment varies across jurisdictions",
      "Get guidance on IRA ownership vs personal possession trade-offs",
    ],
  };

  return summaryMap[slug] || [
    `This article provides comprehensive coverage of ${title.toLowerCase()}`,
    "Learn key concepts and practical considerations for silver coin investors",
    "Understand how this topic affects your silver coin investment strategy",
    "Get actionable guidance based on industry best practices",
    "Find answers to common questions in this area",
  ];
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const content = getArticleContent(slug);
  const qa = resourceQA[slug] || [];
  const aiSummaryBullets = generateAISummaryBullets(slug, resource.title);
  
  // Fetch price data for dynamic FAQ tokens
  const priceData = await fetchProductSpot();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.description,
    url: `${SITE_CONFIG.domain}/resources/${slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/resources/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <section className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 accent-bar-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <Container className="relative">
          {/* Breadcrumb row */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Link
              href="/resources"
              className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Resources
            </Link>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              {resource.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
            {resource.title}
          </h1>

          {/* AI Summary - placed after H1 */}
          <AISummary bullets={aiSummaryBullets} />
        </Container>
      </section>

      {/* Key Takeaways */}
      <section className="py-4 md:py-6 border-b border-slate-200">
        <Container>
          <div className="card p-5 md:p-6 bg-slate-50 border-slate-200">
            <h2 className="text-lg md:text-xl font-display font-semibold text-slate-800 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 flex-shrink-0 text-slate-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {content.keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start text-slate-700 text-sm md:text-base">
                  <span className="text-slate-500 mr-2 mt-0.5">•</span>
                  <span>{replaceTokens(takeaway, priceData)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <article className="py-8 md:py-10 bg-white">
        <Container>
          <div className="prose prose-lg max-w-none space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-slate-900">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-slate-600 leading-relaxed text-base md:text-lg"
                  >
                    {replaceTokens(paragraph, priceData)}
                  </p>
                ))}
                {section.subheading && (
                  <div className="space-y-3 pt-4">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-slate-800">
                      {section.subheading}
                    </h3>
                    {section.subcontent?.map((paragraph, sIndex) => (
                      <p
                        key={sIndex}
                        className="text-slate-600 leading-relaxed text-base md:text-lg"
                      >
                        {replaceTokens(paragraph, priceData)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <div className="mt-10 p-5 md:p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-3 text-sm md:text-base">
              Continue learning about silver bullion coins:
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/live-silver-prices"
                className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                <span>View current silver prices</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/where-to-buy"
                className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                <span>Where to buy silver coins</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                <span>Browse all resources</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Monex Link - Contextual external citation */}
          <div className="mt-5 p-5 md:p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-600 mb-2 text-sm md:text-base">
              For more detailed information and current pricing:
            </p>
            <a
              href={resource.monexLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 transition-colors font-medium"
            >
              <span>{getMonexAnchorText(slug)}</span>
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
        </Container>
      </article>

      {/* Q&A Section - Topic Specific */}
      {qa.length > 0 && <QASection items={qa} priceData={priceData} />}

      {/* CTA Section */}
      <section className="py-12 md:py-16 section-dark">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Continue Your <span className="accent-text">Education</span>
            </h2>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto text-sm md:text-base">
              Explore more{" "}
              <Link href="/resources" className="text-slate-700 hover:underline font-medium">
                resources about silver coins
              </Link>{" "}
              or check{" "}
              <Link href="/live-silver-prices" className="text-slate-700 hover:underline font-medium">
                current market prices
              </Link>{" "}
              to inform your investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/live-silver-prices" className="btn-primary">
                View Silver Prices
              </Link>
              <Link href="/resources" className="btn-secondary">
                More Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Resources */}
      <section className="py-12 md:py-16 bg-white">
        <Container size="wide">
          <h2 className="text-xl md:text-2xl font-display font-semibold text-slate-900 mb-6">
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {resources
              .filter((r) => r.slug !== slug)
              .slice(0, 3)
              .map((relatedResource) => (
                <Link
                  key={relatedResource.slug}
                  href={`/resources/${relatedResource.slug}`}
                  className="card p-5 group hover:border-slate-300 transition-all"
                >
                  <span className="text-xs text-slate-600 font-medium">
                    {relatedResource.category}
                  </span>
                  <h3 className="text-base md:text-lg font-display font-semibold text-slate-900 mt-2 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {relatedResource.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {relatedResource.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
}
