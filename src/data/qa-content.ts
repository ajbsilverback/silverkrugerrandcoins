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
    question: "What is the Silver Krugerrand?",
    answer: "The Silver Krugerrand is a silver bullion coin minted by the South African Mint. Introduced in 2017 for the 50th anniversary of the Gold Krugerrand, it contains 1 troy ounce of .999 fine silver. The design features Paul Kruger on the obverse and the Springbok antelope on the reverse—the same iconic imagery as the original Gold Krugerrand from 1967.",
  },
  {
    question: "Why choose Silver Krugerrands?",
    answer: "Silver Krugerrands offer the heritage and global recognition of the world's most famous bullion coin name. The Krugerrand revolutionized bullion investing in 1967. Silver Krugerrands feature competitive premiums (3-5% over spot), excellent liquidity, IRA eligibility, and the trusted South African Mint quality.",
  },
  {
    question: "How much does a Silver Krugerrand cost?",
    answer: "At current silver prices, a 1 oz Silver Krugerrand costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the silver spot value plus a premium typically ranging from 3-5%.",
  },
  {
    question: "Are Silver Krugerrands easy to sell?",
    answer: "Yes, Silver Krugerrands have excellent liquidity. The Krugerrand name is recognized by dealers worldwide thanks to over 50 years of Gold Krugerrand history. Most established dealers will buy Silver Krugerrands at competitive prices, typically completing transactions within 1-2 business days.",
  },
  {
    question: "Can I hold Silver Krugerrands in my IRA?",
    answer: "Yes, Silver Krugerrand coins meet IRS requirements for Precious Metals IRAs. The .999 fine purity meets the IRS minimum fineness requirement, and the South African Mint origin satisfies government-mint criteria. IRA coins must be held by an approved custodian at an approved depository.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What determines Silver Krugerrand prices?",
    answer: "The Silver Krugerrand price equals the silver spot price (per troy ounce) plus a premium typically ranging from 3-5%. At current prices, that's approximately {{CAPITAL_REQUIREMENT}}. The premium covers South African Mint production, distribution, and dealer margins.",
  },
  {
    question: "Why do Silver Krugerrand premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers have better relationships with South African Mint distributors. Comparing multiple dealers helps identify competitive pricing.",
  },
  {
    question: "What is the bid-ask spread on Silver Krugerrands?",
    answer: "The bid-ask spread on Silver Krugerrands is typically 3-5%. With a coin priced at {{CAPITAL_REQUIREMENT}}, this represents roughly $1-$2. The Krugerrand's strong global recognition supports competitive spreads.",
  },
  {
    question: "How do Silver Krugerrand premiums compare?",
    answer: "Silver Krugerrands typically carry premiums of 3-5% over spot. This is competitive with other major government silver coins. The Krugerrand brand recognition from 50+ years of history supports these competitive spreads.",
  },
  {
    question: "When is the best time to buy Silver Krugerrands?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (3-5% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 10-15% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Silver Krugerrand resources cover?",
    answer: "Our educational library covers all aspects of Silver Krugerrand investing: understanding premiums, the .999 purity standard, storage options, IRA eligibility, authentication, market dynamics, bid-ask spreads, and portfolio allocation strategies.",
  },
  {
    question: "What makes the Silver Krugerrand unique?",
    answer: "The Silver Krugerrand benefits from the world's most recognized bullion coin name. The Gold Krugerrand revolutionized bullion investing in 1967, and the silver version—introduced in 2017—carries that heritage. The distinctive Paul Kruger portrait and Springbok design, combined with South African Mint quality, make it stand out.",
  },
  {
    question: "What are the Silver Krugerrand specifications?",
    answer: "The Silver Krugerrand contains 1 troy ounce (31.1g) of .999 fine silver. Total weight is 33.93g. Diameter is 38.725mm and thickness is 3.2mm. The obverse features Paul Kruger; the reverse shows the Springbok antelope. Face value is 1 South African Rand.",
  },
  {
    question: "What should I look for when buying Silver Krugerrands?",
    answer: "For Silver Krugerrand purchases: buy from reputable dealers, verify dealer credentials, compare premiums across multiple sources, ensure documentation, and plan your storage solution before purchasing. The South African Mint's quality control provides authenticity assurance for dealer-sourced coins.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for a Silver Krugerrand?",
      answer: "Typical premiums for Silver Krugerrands range from 3-5% over spot under normal market conditions. During supply constraints or high demand periods, premiums can temporarily rise to 10-15% or more.",
    },
    {
      question: "Why do Silver Krugerrands have premiums?",
      answer: "Premiums cover South African Mint production costs, distributor margins, dealer margins, and reflect the coin's legal tender status, .999 purity, and the globally recognized Krugerrand brand heritage built since 1967.",
    },
    {
      question: "Do I recover the premium when I sell?",
      answer: "You typically don't recover the full premium on resale, but Silver Krugerrands have competitive bid-ask spreads (3-5%). The Krugerrand's strong recognition supports good buyback prices, making them economically efficient for round-trip transactions.",
    },
  ],
  "coin-comparison": [
    {
      question: "What makes Silver Krugerrands different from other silver coins?",
      answer: "Silver Krugerrands carry the world's most recognized bullion coin name from 50+ years of Gold Krugerrand history. The South African Mint origin, iconic Paul Kruger/Springbok design, and competitive premiums (3-5%) distinguish them in the silver bullion market.",
    },
    {
      question: "How do Silver Krugerrand premiums compare?",
      answer: "Silver Krugerrand premiums (3-5%) are competitive with other major government silver coins. The Krugerrand's global recognition supports these competitive spreads—dealers worldwide instantly recognize the name.",
    },
    {
      question: "Are Silver Krugerrands IRA eligible?",
      answer: "Yes, Silver Krugerrands meet IRS requirements for Precious Metals IRAs. The .999 purity meets the minimum fineness requirement, and the South African Mint origin satisfies government-mint criteria.",
    },
  ],
  "storage-options": [
    {
      question: "What storage is best for Silver Krugerrands?",
      answer: "Silver Krugerrands work well with multiple storage options. A quality home safe suits modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage at approved depositories is required.",
    },
    {
      question: "Can I store Silver Krugerrands at home?",
      answer: "Yes, Silver Krugerrands are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security. Use protective holders to preserve the Paul Kruger portrait and Springbok design. Consider insurance coverage for valuable holdings.",
    },
    {
      question: "What are IRA storage requirements?",
      answer: "IRA Silver Krugerrands must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession while coins remain in the IRA. The custodian handles storage arrangements and maintains IRS compliance records.",
    },
  ],
  "purity-advantages": [
    {
      question: "What does .999 purity mean for Silver Krugerrands?",
      answer: "The .999 purity means each Silver Krugerrand is 99.9% pure silver with minimal alloys. This meets IRA requirements, ensures consistent silver content, and provides straightforward valuation—each 1 oz coin contains exactly 1 troy ounce of silver.",
    },
    {
      question: "Does the South African Mint guarantee purity?",
      answer: "Yes, the South African Mint—producing precious metals since 1890—guarantees .999 purity in every Silver Krugerrand. Their quality control systems ensure consistent specifications across all production.",
    },
    {
      question: "Does purity affect Silver Krugerrand value?",
      answer: "The .999 purity ensures IRA eligibility and provides consistent silver content for valuation. For investment purposes, the Krugerrand brand recognition and South African Mint backing matter most for liquidity and resale value.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell Silver Krugerrands?",
      answer: "Silver Krugerrands typically sell within 1-2 business days through established dealers. The Krugerrand name is instantly recognized worldwide thanks to 50+ years of Gold Krugerrand history. Same-day transactions are often possible at local coin shops.",
    },
    {
      question: "Why are Silver Krugerrands liquid?",
      answer: "The Krugerrand name has represented bullion investing since 1967. Dealers worldwide recognize it instantly. This established recognition means strong demand, competitive spreads, and easy transactions when you're ready to sell.",
    },
    {
      question: "What documentation helps with resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original packaging adds value. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports optimal pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What moves Silver Krugerrand prices?",
      answer: "Silver Krugerrand values follow silver spot prices, which respond to industrial demand (electronics, solar), investment flows, currency strength, inflation expectations, and supply dynamics. Premiums can also fluctuate based on physical coin demand.",
    },
    {
      question: "How does industrial demand affect Silver Krugerrands?",
      answer: "Industrial demand influences overall silver prices, directly affecting Silver Krugerrand values. Growing sectors like solar energy and electronics increase silver consumption. Unlike gold, silver has significant industrial applications affecting price.",
    },
    {
      question: "Do Silver Krugerrand premiums change?",
      answer: "Yes, premiums fluctuate with demand. During market uncertainty or crisis, demand for physical silver spikes, pushing premiums to 10-15% or higher. During calm markets, premiums settle to normal 3-5% levels.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good spread for Silver Krugerrands?",
      answer: "Under normal market conditions, spreads of 3-5% for Silver Krugerrands represent competitive pricing. The Krugerrand's strong global recognition supports these spreads. If a dealer quotes significantly wider, consider shopping elsewhere.",
    },
    {
      question: "How do I calculate break-even?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 4% over spot and sell at 3% below spot, you need 7% silver appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Silver Krugerrand, that's roughly $2-$3 in price movement.",
    },
    {
      question: "Why do Krugerrands have competitive spreads?",
      answer: "The Krugerrand name's 50+ years of global recognition means dealers can resell them easily. Strong demand and established markets support competitive bid-ask spreads compared to less-recognized coins.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Silver Krugerrand?",
      answer: "Verify weight (31.1g silver, 33.93g gross), diameter (38.725mm), thickness (3.2mm), and design details—the Paul Kruger portrait and Springbok should show sharp, consistent detail. Purchase from reputable dealers for best authenticity assurance.",
    },
    {
      question: "What design features identify authentic Krugerrands?",
      answer: "The obverse shows Paul Kruger with 'SUID-AFRIKA' and 'SOUTH AFRICA' inscriptions. The reverse displays the Springbok with 'KRUGERRAND' and 'FYNSILWER 1 OZ FINE SILVER'. Look for sharp detail and consistent quality from the South African Mint.",
    },
    {
      question: "Should I get professional authentication?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary—dealers stake their reputation on authenticity. For secondary market purchases or coins without clear provenance, professional authentication (NGC, PCGS) provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Silver Krugerrands IRA-eligible?",
      answer: "Silver Krugerrands meet IRS requirements: .999 minimum purity and production by a recognized national mint (South African Mint). They qualify for tax-advantaged Precious Metals IRAs.",
    },
    {
      question: "Can I possess my IRA Silver Krugerrands?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. Upon distribution, you can receive physical coins.",
    },
    {
      question: "What does IRA Silver Krugerrand ownership cost?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and transaction fees. Weigh these against tax advantages, especially for larger holdings.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "How much should I allocate to Silver Krugerrands?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. Silver Krugerrands can be part of that allocation. The specific percentage depends on your risk tolerance, investment horizon, and financial situation.",
    },
    {
      question: "Should I buy all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Align your approach with your investment timeline.",
    },
    {
      question: "How do Silver Krugerrands fit with other investments?",
      answer: "Silver Krugerrands provide direct ownership with no counterparty risk—unlike ETFs or mining stocks. Physical silver offers portfolio diversification and tangible value. Many investors hold both physical coins and paper silver for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What's the process for buying Silver Krugerrands?",
      answer: "The typical process: research and select a reputable dealer, compare premiums, place an order with a locked price, complete payment, and receive insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods work for Silver Krugerrands?",
      answer: "Wire transfer is common for larger transactions. Many dealers accept credit cards (often with fees), personal checks (with clearing periods), and ACH transfers. Some accept cryptocurrency. Credit cards often work well for single-coin purchases.",
    },
    {
      question: "Why do Silver Krugerrand prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers have better relationships with South African Mint distributors. Always compare prices from multiple sources.",
    },
  ],
  "tax-considerations": [
    {
      question: "How are Silver Krugerrands taxed when sold?",
      answer: "Physical silver including Silver Krugerrands is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. Specific rates depend on holding period, income level, and current tax legislation. Consult a tax professional.",
    },
    {
      question: "Do I pay sales tax on Silver Krugerrands?",
      answer: "Sales tax treatment varies by state. Many states exempt precious metals purchases entirely; others tax at standard rates; some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of IRA ownership?",
      answer: "Traditional IRA contributions may be tax-deductible with taxes deferred until distribution. Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
