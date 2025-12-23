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
    title: "Understanding Silver Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why silver coins have premiums over spot, and how to evaluate costs when purchasing silver bullion coins.",
    excerpt:
      "Discover why silver bullion coins carry premiums over spot and how to maximize your silver buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "coin-comparison",
    title: "Silver Eagle vs Maple Leaf vs Britannia: Comparing Silver Coins",
    description:
      "A detailed comparison of major silver bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare American Silver Eagle, Canadian Maple Leaf, and British Britannia coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver-coins/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Silver Coins: Options and Best Practices",
    description:
      "Compare storage solutions for silver bullion coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your silver coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/silver-investing/",
  },
  {
    slug: "purity-advantages",
    title: "The .999 Purity Standard: Why Silver Purity Matters",
    description:
      "Understanding the significance of .999 fine purity in silver coins and how it compares across different mints.",
    excerpt:
      "Learn why silver coin purity standards matter for investors and IRA eligibility.",
    category: "Products",
    monexLink: "https://www.monex.com/silver-coins/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Silver Coins",
    description:
      "Understanding the liquidity of silver bullion coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of silver coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "market-dynamics",
    title: "Silver Market Dynamics: What Moves Silver Coin Prices",
    description:
      "Understanding the economic factors, industrial demand, and market forces that influence silver prices.",
    excerpt:
      "Explore the key drivers behind silver price movements and what they mean for silver coin investors.",
    category: "Market",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Silver Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling silver coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your silver trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/silver-prices/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Silver Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on silver bullion coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/silver-coins/",
  },
  {
    slug: "ira-eligibility",
    title: "Silver Coin IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how silver bullion coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how silver coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Silver Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating silver bullion coins into a diversified investment portfolio.",
    excerpt:
      "Discover how silver coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-silver/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Silver Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing silver bullion coins.",
    excerpt:
      "Learn what to expect when purchasing your first silver coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/silver-coins/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Silver Coins",
    description:
      "A high-level overview of tax considerations related to physical silver coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical silver investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge-base/silver-investing/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
