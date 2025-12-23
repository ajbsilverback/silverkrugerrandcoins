import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$35" (ask price rounded)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$32-$38" (ask ± range)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$35+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$35+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What are silver bullion coins?",
    answer: "Silver bullion coins are government-minted coins containing a specific weight of .999 fine silver. Popular examples include the American Silver Eagle, Canadian Silver Maple Leaf, and British Britannia. These coins carry legal tender status and are recognized worldwide for their purity and authenticity.",
  },
  {
    question: "Why choose government-minted silver coins over bars or rounds?",
    answer: "Government-minted coins offer legal tender status, guaranteed weight and purity backed by sovereign nations, and superior liquidity. While bars and rounds may have slightly lower premiums, coins are more easily authenticated, widely recognized by dealers, and often qualify for IRA accounts.",
  },
  {
    question: "How much does a silver bullion coin cost?",
    answer: "At current silver prices, a 1 oz silver bullion coin costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the silver spot value plus a premium typically ranging from 3-6% for standard bullion coins.",
  },
  {
    question: "Are silver coins easy to sell?",
    answer: "Yes, government-minted silver coins are highly liquid. As products of sovereign mints with legal tender status, they are recognized and readily purchased by dealers worldwide. Most established dealers will buy silver coins at competitive prices, typically within 2-4% of spot.",
  },
  {
    question: "Can I hold silver coins in my IRA?",
    answer: "Yes, many silver bullion coins are IRS-approved for Precious Metals IRAs. The .999 fine purity meets the IRS minimum requirement, and government-minted status meets eligibility requirements. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and silver coin prices?",
    answer: "The silver coin price equals the silver spot price (per troy ounce) plus a premium typically ranging from 3-6%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers mint production, distribution through Authorized Purchasers, and dealer margins.",
  },
  {
    question: "Why do silver coin premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers may have better relationships with Authorized Purchasers. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my silver coin investment?",
    answer: "The bid-ask spread on silver coins is typically 3-5% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $1-$2. Your silver must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do different silver coins have different premiums?",
    answer: "Yes, premiums vary by coin. American Silver Eagles typically carry slightly higher premiums (4-6%) due to strong U.S. demand. Canadian Maple Leafs and other international coins often have lower premiums (3-5%). All are government-minted legal tender coins with excellent liquidity.",
  },
  {
    question: "When is the best time to buy silver coins based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-6% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 10-15% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your silver coin resources cover?",
    answer: "Our educational library covers all aspects of silver coin investing including: understanding premiums, coin comparisons (Eagle vs Maple Leaf vs Britannia), storage options, purity standards, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How do different silver coins compare?",
    answer: "Popular silver coins share .999 fine purity but differ in design, mint, and premiums. The American Silver Eagle is the most traded in the U.S. Canadian Maple Leafs offer .9999 purity. British Britannias feature advanced security. All are IRA-eligible and highly liquid.",
  },
  {
    question: "Which silver coin is best for investment?",
    answer: "No single coin is universally best; each serves different investor needs. American Silver Eagles offer maximum liquidity in U.S. markets. Canadian Maple Leafs provide highest purity at competitive premiums. Consider your priorities: liquidity, premium cost, or specific features.",
  },
  {
    question: "What should I look for when buying my first silver coin?",
    answer: "For first-time silver coin buyers: purchase from reputable dealers, verify the dealer credentials, compare premiums across multiple sources, ensure full documentation, and plan your storage solution before purchasing. Government-minted coins from authorized channels provide the best authenticity assurance.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a silver bullion coin?",
      answer: "Typical premiums for silver bullion coins range from 3-6% over spot under normal market conditions. American Silver Eagles tend toward the higher end; Canadian Maple Leafs and others toward the lower end. During supply constraints, premiums can temporarily rise to 10-15% or more.",
    },
    {
      question: "Why do silver coin premiums exist?",
      answer: "Premiums cover mint production costs, Authorized Purchaser margins, dealer margins, and reflect the value of the coin's legal tender status and .999 purity. Government-minted coins command premiums for their guaranteed authenticity and worldwide recognition.",
    },
    {
      question: "Do I recover the premium when I sell my silver coin?",
      answer: "You typically don't recover the full premium on resale, but government-minted silver coins have competitive bid-ask spreads (3-5%). Their strong recognition supports good buyback prices. The combination of reasonable purchase premiums and competitive spreads makes silver coins economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Silver Eagle and Maple Leaf?",
      answer: "The primary differences are mint origin and purity: Silver Eagles are .999 fine from the U.S. Mint; Maple Leafs are .9999 fine from the Royal Canadian Mint. Both contain 1 troy ounce of silver. Eagles typically have slightly higher premiums but stronger U.S. liquidity.",
    },
    {
      question: "Which silver coin has the lowest premium?",
      answer: "Among major silver bullion coins, Canadian Maple Leafs and British Britannias typically have slightly lower premiums (3-4%) than American Silver Eagles (4-6%). Premium differences are modest among major government coins, and liquidity should also factor into your decision.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, American Silver Eagles, Canadian Maple Leafs, and British Britannias are all IRS-approved for Precious Metals IRAs. They meet the .999 minimum purity requirement (Maple Leaf exceeds it at .9999). All are government-minted legal tender coins.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for silver coins?",
      answer: "Silver bullion coins are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store silver coins at home?",
      answer: "Yes, silver coins are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security for a modest collection. Consider insurance coverage for high-value holdings. Keep coins in protective holders to prevent scratching and tarnish.",
    },
    {
      question: "Do IRA silver coins have special storage requirements?",
      answer: "Yes, IRA silver must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA silver while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does .999 purity matter?",
      answer: "The .999 purity means the silver coin contains minimal alloy metals. It's essentially pure silver. This meets IRA requirements, ensures consistent silver content across coins, and provides straightforward valuation based on silver weight.",
    },
    {
      question: "Is .9999 silver more valuable than .999 silver?",
      answer: "Spot value is based on silver content, not purity grade. A 1 oz .999 coin and a 1 oz .9999 coin both contain essentially 1 troy ounce of silver with the same value. The practical difference is negligible for investment purposes. Premiums are similar for both.",
    },
    {
      question: "Does higher purity mean better resale value?",
      answer: "Not significantly for well-known coins. Both .999 and .9999 coins are highly liquid with similar resale dynamics. Dealer recognition and government-mint status matter more than the minor purity difference. All major silver coins trade equally well.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a silver bullion coin?",
      answer: "Silver bullion coins can typically be sold within 1-2 business days through established dealers. As government-minted products with legal tender status, they are instantly recognized. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do all silver coins trade equally well?",
      answer: "Major government-minted coins (Eagles, Maple Leafs, Britannias) all have excellent liquidity. American Silver Eagles have the strongest demand in U.S. markets. International coins trade well globally. Lesser-known coins may have slightly wider spreads.",
    },
    {
      question: "What documentation helps with silver coin resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original mint packaging (if purchased from mint) adds value for collectors. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes silver prices to rise or fall?",
      answer: "Silver prices respond to multiple factors: industrial demand (electronics, solar), investment flows, currency strength, inflation expectations, and supply dynamics. Silver is more volatile than gold due to its dual role as industrial metal and precious metal.",
    },
    {
      question: "How does industrial demand affect silver coin values?",
      answer: "Industrial demand influences overall silver prices, which directly affects coin values. Growing sectors like solar energy and electronics increase silver consumption. Unlike gold, silver has significant industrial applications that can drive price independently of investment demand.",
    },
    {
      question: "Do silver coin premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market uncertainty or crisis, demand for physical silver often spikes, pushing premiums to 10-15% or higher. During calm markets, premiums settle to normal 3-6% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for silver coins?",
      answer: "Under normal market conditions, spreads of 3-5% for silver bullion coins represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a silver coin?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 5% over spot and expect to receive 3% below spot when selling, you need 8% silver appreciation to break even. On a {{CAPITAL_REQUIREMENT}} silver coin, that's roughly $2-$3 in silver price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins (Eagle, Maple Leaf, Britannia). All benefit from strong recognition and dealer markets. Lesser-known coins or generic rounds may face wider spreads. For silver purchases, stick with major coins for best spreads.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a silver coin is authentic?",
      answer: "Key verification methods: confirm correct weight (1 oz coins should weigh 31.1g), verify diameter and thickness against specifications, check design details against known specimens, purchase from reputable dealers. For secondary market purchases, consider professional authentication.",
    },
    {
      question: "What security features do silver coins have?",
      answer: "Modern silver coins include various security features: precise specifications, detailed design elements, consistent weight/dimensions, and some (like Britannias) include micro-engraving and other anti-counterfeiting measures. Mint quality control ensures consistency.",
    },
    {
      question: "Should I have silver coins professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary because dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are silver coins IRA-eligible?",
      answer: "Silver coins meeting IRS requirements (.999 minimum purity, government-minted) qualify for Precious Metals IRAs. Popular coins like Silver Eagles, Maple Leafs, and Britannias all meet these standards and are approved assets for tax-advantaged retirement accounts.",
    },
    {
      question: "Can I take physical possession of my IRA silver coins?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding silver coins in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership, especially for larger holdings.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in silver coins?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. Silver can be part of that allocation alongside gold. The specific percentage depends on your risk tolerance, investment horizon, and overall financial situation.",
    },
    {
      question: "Should I buy silver coins all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline and market outlook.",
    },
    {
      question: "How do silver coins fit with other investments?",
      answer: "Silver coins provide direct ownership with no counterparty risk, unlike ETFs or mining stocks. Physical silver offers portfolio diversification and a tangible store of value. Many investors hold both physical coins and paper silver (ETFs) for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a silver coin?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for silver purchases?",
      answer: "Wire transfer is common for larger precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work well for single-coin purchases.",
    },
    {
      question: "Why do silver coin prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers are Authorized Purchasers with direct mint access; others buy from distributors. Always compare prices from multiple sources before purchasing.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical silver taxed when sold?",
      answer: "Physical silver is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a silver coin?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding silver in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
