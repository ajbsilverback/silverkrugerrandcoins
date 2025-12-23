export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Silver Krugerrand Premiums: What You Pay Over Spot",
    description:
      "Learn why Silver Krugerrands carry premiums over spot price, how South African Mint production costs factor in, and strategies for securing competitive pricing.",
    excerpt:
      "Discover why Silver Krugerrand coins carry premiums and how to evaluate your true cost when purchasing from dealers.",
    category: "Pricing",
    monexLink: "https://www.monex.com/silver-south-african-krugerrand-price-charts/",
  },
  {
    slug: "coin-comparison",
    title: "How Silver Krugerrands Compare to Other Silver Bullion Coins",
    description:
      "See how the Silver Krugerrand's heritage, premiums, and liquidity stack up against other silver bullion options for investment purposes.",
    excerpt:
      "Understand the Silver Krugerrand's unique advantages: 50+ years of Krugerrand heritage, competitive premiums, and global dealer recognition.",
    category: "Investment",
    monexLink: "https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/",
  },
  {
    slug: "storage-options",
    title: "Storing Silver Krugerrands: Home Safes, Bank Boxes & IRA Vaults",
    description:
      "Compare storage solutions for your Silver Krugerrand collection from home safes to bank safe deposit boxes and IRS-approved depositories.",
    excerpt:
      "A practical guide to securing your Silver Krugerrand investment with the right storage solution for your needs.",
    category: "Security",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "purity-advantages",
    title: "Silver Krugerrand .999 Purity: What It Means for Investors",
    description:
      "Understanding the .999 fine silver purity standard in Silver Krugerrands, IRA eligibility requirements, and how purity affects valuation.",
    excerpt:
      "Learn why the Silver Krugerrand's .999 purity matters for IRA eligibility and investment value.",
    category: "Products",
    monexLink: "https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/",
  },
  {
    slug: "liquidity-considerations",
    title: "Silver Krugerrand Liquidity: Buying and Selling with Confidence",
    description:
      "How the Krugerrand name's 50-year heritage supports strong liquidity, fast dealer transactions, and competitive buyback pricing worldwide.",
    excerpt:
      "Explore why Silver Krugerrands enjoy excellent liquidity and dealer demand globally.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver-south-african-krugerrand-price-charts/",
  },
  {
    slug: "market-dynamics",
    title: "What Moves Silver Krugerrand Prices: Market Forces Explained",
    description:
      "Understanding how industrial demand, investment flows, currency movements, and global events affect Silver Krugerrand values.",
    excerpt:
      "Learn the key market forces that drive silver prices and what they mean for your Silver Krugerrand holdings.",
    category: "Market",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Silver Krugerrand Bid-Ask Spreads: Calculating Your True Costs",
    description:
      "How dealer spreads work for Silver Krugerrands, what constitutes competitive pricing, and strategies to minimize transaction costs.",
    excerpt:
      "Master bid-ask spreads to get the best pricing on Silver Krugerrand purchases and sales.",
    category: "Pricing",
    monexLink: "https://www.monex.com/silver-south-african-krugerrand-price-charts/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Silver Krugerrands: Specifications & Verification",
    description:
      "Official Silver Krugerrand specifications from the South African Mint, visual verification of the Paul Kruger and Springbok designs, and authentication best practices.",
    excerpt:
      "Protect your investment by knowing how to verify authentic Silver Krugerrands from the South African Mint.",
    category: "Security",
    monexLink: "https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/",
  },
  {
    slug: "ira-eligibility",
    title: "Silver Krugerrand IRA Eligibility: Requirements & Process",
    description:
      "How Silver Krugerrands qualify for Precious Metals IRAs under IRS rules, custodian requirements, and storage at approved depositories.",
    excerpt:
      "Learn how Silver Krugerrands meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "portfolio-allocation",
    title: "Adding Silver Krugerrands to Your Investment Portfolio",
    description:
      "Strategic considerations for incorporating Silver Krugerrands into a diversified portfolio, allocation percentages, and balancing physical vs paper silver.",
    excerpt:
      "Discover how Silver Krugerrands fit into portfolio diversification and wealth preservation strategies.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Your First Silver Krugerrand: A Step-by-Step Guide",
    description:
      "Everything first-time buyers need to know about purchasing Silver Krugerrands: choosing dealers, understanding pricing, payment, and taking delivery.",
    excerpt:
      "A practical walkthrough for purchasing your first Silver Krugerrand from dealer selection to delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/south-african-silver-krugerrand-coins-for-sale/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations for Silver Krugerrand Investors",
    description:
      "Overview of federal and state tax treatment for Silver Krugerrand purchases, sales, and IRA ownership. Educational information only—consult a tax professional.",
    excerpt:
      "Understand the tax landscape for physical Silver Krugerrand ownership before making investment decisions.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
