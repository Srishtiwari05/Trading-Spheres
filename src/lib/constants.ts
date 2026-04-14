// WhatsApp Configuration
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919464807614";
export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi%2C%20I%20want%20to%20enroll%20in%20Trading%20Spheres";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// Navigation
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// Learn topics
export const LEARN_TOPICS = [
  {
    icon: "📊",
    title: "Technical Analysis",
    description: "Master chart patterns, indicators, and price action trading.",
  },
  {
    icon: "🛡️",
    title: "Risk Management",
    description: "Protect your capital with proven risk-reward strategies.",
  },
  {
    icon: "🧠",
    title: "Trading Psychology",
    description: "Overcome emotions and trade with discipline and clarity.",
  },
  {
    icon: "🕯️",
    title: "Candlestick Patterns",
    description: "Read and interpret powerful candlestick formations.",
  },
  {
    icon: "📈",
    title: "Options & Futures",
    description: "Trade derivatives with confidence using proven strategies.",
  },
  {
    icon: "⚡",
    title: "Live Market Trading",
    description: "Real-time trading sessions in actual market conditions.",
  },
  {
    icon: "💰",
    title: "Money Management",
    description: "Optimize position sizing and grow your trading account.",
  },
  {
    icon: "🔧",
    title: "Trading System",
    description: "Build your own rules-based, repeatable trading system.",
  },
];

// Courses
export const COURSES = [
  {
    name: "Technical Analysis Masterclass",
    badge: "Online",
    description:
      "Complete A–Z guide to reading charts, indicators, and building a profitable strategy from scratch.",
    duration: "8 Weeks",
    price: "₹4,999",
    originalPrice: "₹9,999",
    popular: true,
  },
  {
    name: "Options Trading Pro",
    badge: "Online",
    description:
      "Learn options buying & selling, delta hedging, and income strategies used by professional traders.",
    duration: "6 Weeks",
    price: "₹6,999",
    originalPrice: "₹12,999",
    popular: false,
  },
  {
    name: "Offline Batch — Foundation",
    badge: "Offline",
    description:
      "Hands-on classroom training covering market basics, chart reading, and live trade execution.",
    duration: "4 Weeks",
    price: "₹8,999",
    originalPrice: "₹15,000",
    popular: false,
  },
  {
    name: "Intraday Trading Blueprint",
    badge: "Online",
    description:
      "High-probability intraday setups, scalping techniques, and momentum trading strategies.",
    duration: "5 Weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    popular: false,
  },
  {
    name: "Offline Batch — Advanced",
    badge: "Offline",
    description:
      "Deep-dive into futures, options Greeks, algorithmic systems, and live portfolio management.",
    duration: "8 Weeks",
    price: "₹14,999",
    originalPrice: "₹25,000",
    popular: true,
  },
  {
    name: "Futures & Derivatives",
    badge: "Online",
    description:
      "Master F&O strategies, rollover techniques, hedging with index futures & commodity markets.",
    duration: "6 Weeks",
    price: "₹5,499",
    originalPrice: "₹10,999",
    popular: false,
  },
];

// Stats
export const STATS = [
  { number: 2000, suffix: "+", label: "Students Trained", icon: "🎓" },
  { number: 10, suffix: "Cr+", prefix: "₹", label: "Profits Generated", icon: "💹" },
  { number: 95, suffix: "%", label: "Success Rate", icon: "🏆" },
  { number: 5, suffix: "+", label: "Years of Teaching", icon: "📅" },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    avatar: "RS",
    role: "Full-time Trader",
    quote:
      "Trading Spheres completely changed my perspective. I went from losing money to consistently profitable in just 3 months!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    avatar: "PP",
    role: "IT Professional & Part-time Trader",
    quote:
      "The options strategies I learned here generate me a monthly income of ₹40,000 alongside my job. Life-changing!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    avatar: "AM",
    role: "Entrepreneur",
    quote:
      "The risk management module alone saved me from multiple big losses. Best investment I've ever made.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    avatar: "SG",
    role: "Homemaker & Trader",
    quote:
      "I started with zero knowledge. Now I trade intraday every morning and earn a steady side income.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    avatar: "VS",
    role: "Engineer",
    quote:
      "The live market sessions are incredible. You learn real strategies, not just theory from a textbook.",
    rating: 5,
  },
];

// YouTube video IDs (sample - replace with actual)
export const YOUTUBE_VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "Student Success Story – Rahul Sharma" },
  { id: "dQw4w9WgXcQ", title: "100% ROI in 6 Months – Priya's Journey" },
  { id: "dQw4w9WgXcQ", title: "From Zero to Profitable – Real Student" },
];

// Founder info
export const FOUNDER = {
  name: "Raj Patel",
  title: "Founder — Trading Spheres",
  bio: "Raj Patel is a seasoned market veteran with over a decade of experience in equity, futures, and options trading. Having navigated bull runs, bear markets, and every kind of volatility, he built Trading Spheres to share battle-tested strategies with everyday Indians who want financial freedom through markets.",
  achievements: [
    "10+ years of live market trading experience",
    "Trained 2,000+ students across India",
    "Expert in Options & Futures strategies",
    "₹10 Crore+ in combined student profits",
    "Mentor to full-time traders & working professionals",
  ],
};

// Blog posts (fallback if Sanity not configured)
export const FALLBACK_BLOG_POSTS = [
  {
    _id: "1",
    title: "Top 5 Candlestick Patterns Every Trader Must Know",
    excerpt:
      "Candlestick patterns are the language of the market. Master these 5 formations and you'll read price action like a pro.",
    category: "Technical Analysis",
    slug: { current: "top-5-candlestick-patterns" },
    publishedAt: "2025-01-15",
    readTime: "5 min read",
  },
  {
    _id: "2",
    title: "How to Manage Risk and Survive Any Market Crash",
    excerpt:
      "Most traders blow their accounts not from bad entries, but from terrible risk management. Here's how to protect your capital.",
    category: "Risk Management",
    slug: { current: "risk-management-guide" },
    publishedAt: "2025-01-10",
    readTime: "7 min read",
  },
  {
    _id: "3",
    title: "The Options Strategy That Made ₹50,000 in One Month",
    excerpt:
      "A simple but powerful options income strategy that our students use consistently to generate monthly cash flow.",
    category: "Options Trading",
    slug: { current: "options-strategy-50k-month" },
    publishedAt: "2025-01-05",
    readTime: "6 min read",
  },
];
