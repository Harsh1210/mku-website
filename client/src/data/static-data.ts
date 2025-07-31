// Static data for the website
export interface Testimonial {
  id: number;
  name: string;
  nameHi: string;
  role: string;
  roleHi: string;
  location: string;
  locationHi: string;
  content: string;
  contentHi: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Narendar Singh",
    nameHi: "नरेंद्र सिंह",
    role: "Buesinessman",
    roleHi: "व्यवसायी",
    location: "Ludhiyana, Punjab, India",
    locationHi: "लुधियाना, पंजाब, भारत",
    content: "I've been with Mohan Krushi Udyog since the beginning, and the partnership has been exceptional. The quality of their products is unmatched in the market, the communication is always wonderful, and I can always count on timely deliveries. It's a pleasure doing business with them.",
    contentHi: "मैं मोहन कृषि उद्योग के साथ शुरुआत से ही जुड़ा हुआ हूँ, और हमारी यह साझेदारी शानदार रही है। बाज़ार में उनके उत्पादों की गुणवत्ता का कोई मुकाबला नहीं है, बातचीत हमेशा बेहतरीन रहती है, और मैं उनकी समय पर डिलीवरी पर हमेशा भरोसा कर सकता हूँ। उनके साथ व्यापार करना एक सुखद अनुभव है।",
    rating: 5,
  },
  {
    id: 3,
    name: "Sourabh Gupta",
    nameHi: "सौरभ गुप्ता",
    role: "Businessman",
    roleHi: "व्यवसायी",
    location: "Karnal, Haryana",
    locationHi: "करनाल, हरियाणा",
    content: "I've been working with Mohan Krushi Udyog for the last few years and I'm more than satisfied. Their quality is better than anywhere else in India, and my own customers love their Chandrayan brand. The recent addition of their cold storage has made the entire process tension-free. They are a reliable partner who always fulfills our needs.",
    contentHi: "मैं पिछले कुछ वर्षों से मोहन कृषि उद्योग के साथ काम कर रहा हूँ और मैं उनकी सेवा से बहुत संतुष्ट हूँ। उनकी गुणवत्ता भारत में कहीं और से बेहतर है, और मेरे अपने ग्राहकों को उनका 'चंद्रयान' ब्रांड बहुत पसंद है। हाल ही में उनके कोल्ड स्टोरेज के शुरू होने से पूरी प्रक्रिया बहुत तनाव-मुक्त हो गई है। वे एक भरोसेमंद भागीदार हैं जो हमेशा हमारी जरूरतों को पूरा करते हैं।",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Patel",
    nameHi: "अरुण पटेल",
    role: "Restaurant Owner",
    roleHi: "रेस्टोरेंट मालिक",
    location: "Gujarat, India",
    locationHi: "गुजरात, भारत",
    content: "As a restaurant owner, quality is paramount. Mohan Krushi Udyog consistently delivers premium grains that enhance the taste of our traditional dishes.",
    contentHi: "एक रेस्टोरेंट मालिक के रूप में, गुणवत्ता सबसे महत्वपूर्ण है। मोहन कृषि उद्योग लगातार प्रीमियम अनाज प्रदान करता है जो हमारे पारंपरिक व्यंजनों के स्वाद को बढ़ाता है।",
    rating: 4,
  },
  {
    id: 4,
    name: "Sunita Devi",
    nameHi: "सुनीता देवी",
    role: "Farm Cooperative Leader",
    roleHi: "कृषि सहकारी नेता",
    location: "Bihar, India",
    locationHi: "बिहार, भारत",
    content: "Mohan Krushi Udyog has been a blessing for our farming community. Their direct partnership model ensures better income for our farmers and quality products for consumers.",
    contentHi: "मोहन कृषि उद्योग हमारे कृषि समुदाय के लिए एक वरदान रहा है। उनका प्रत्यक्ष साझेदारी मॉडल हमारे किसानों के लिए बेहतर आय और उपभोक्ताओं के लिए गुणवत्तापूर्ण उत्पाद सुनिश्चित करता है।",
    rating: 5,
  },
];

export interface BlogContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'subheading';
  content: string;
  items?: string[]; // For list type
}

export interface BlogPost {
  id: number;
  title: string;
  titleHi: string | null;
  excerpt: string;
  excerptHi: string | null;
  content: BlogContentBlock[];
  contentHi: BlogContentBlock[] | null;
  category: string;
  categoryHi: string | null;
  image: string | null;
  video?: string; // Optional video URL
  publishedAt: Date;
  featured: boolean | null;
}

export interface Product {
  id: number;
  name: string;
  nameHi: string | null;
  description: string;
  descriptionHi: string | null;
  category: string;
  categoryHi: string | null;
  images: string[]; // Changed from image: string | null to images: string[]
  video?: string;   // Optional video URL
  badge: string | null;
  badgeHi: string | null;
  featured: boolean | null;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Chana Chapa Gold",
    nameHi: "चना छापा गोल्ड",
    description: "Premium quality chickpeas known for their rich flavor and nutritional value.",
    descriptionHi: "अपनी समृद्ध स्वाद और पोषण मूल्य के लिए जाने जाने वाले प्रीमियम गुणवत्ता वाले चने।",
    category: "Chana",
    categoryHi: "चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/chapa-chana-gold.jpg",
      "https://sadabahaar-167866605.imgix.net/chapa-chana-gold-2.png"
    ],
    video: "https://drive.google.com/file/d/1oRmkr3WPKEf8nVNLXPg6MEaVu9t_wT64/preview",
    badge: "Best Seller",
    badgeHi: "सबसे ज्यादा बिकने वाला",
    featured: true
  },
  {
    id: 2,
    name: "Chana Chapa Red",
    nameHi: "चना छापा रेड",
    description: "A special variety of red chickpeas, offering a unique, earthy flavor and a firm texture.",
    descriptionHi: "लाल चने की एक विशेष किस्म, जो एक अनूठा, मिट्टी जैसा स्वाद और दृढ़ बनावट प्रदान करती है।",
    category: "Chana",
    categoryHi: "चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/chapa-chana-red.jpg",
      "https://sadabahaar-167866605.imgix.net/chana-chapa-red-2.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://drive.google.com/file/d/1Qml8PQX67D6PDvIAn-ZF2mQp4Yv22Th9/preview",
    badge: "New Arrival",
    badgeHi: "नया आगमन",
    featured: true
  },
  {
    id: 3,
    name: "Chana Chapa Blue",
    nameHi: "चना छापा ब्लू",
    description: "An exotic and rare variety of chickpeas with a subtle bluish hue, perfect for gourmet recipes.",
    descriptionHi: "एक दुर्लभ और अनोखी किस्म के चने, जिनमें हल्का नीला रंग होता है, जो विशेष व्यंजनों के लिए एकदम सही हैं।",
    category: "Chana",
    categoryHi: "चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/chapa-chana-blue.jpg",
      "https.images.unsplash.com/photo-1615732692693-945789f829a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "",
    badge: "Limited Edition",
    badgeHi: "सीमित संस्करण",
    featured: true
  },
  {
    id: 4,
    name: "Kabuli Chana Green",
    nameHi: "काबुली चना ग्रीन",
    description: "Fresh and tender green Kabuli chickpeas, harvested young for a sweeter taste. Perfect for snacking or light, healthy meals.",
    descriptionHi: "ताज़े और कोमल हरे काबुली चने, जिन्हें मीठे स्वाद के लिए कच्चा तोड़ा जाता है। स्नैकिंग या हल्के, स्वस्थ भोजन के लिए बिल्कुल सही।",
    category: "Kabuli Chana",
    categoryHi: "काबुली चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-green.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-green-2.jpeg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://drive.google.com/file/d/1jv5PIzEhB3Zm1nGDeThDITnKHR6eoT5P/preview",
    badge: "Farm Fresh",
    badgeHi: "खेत से ताज़ा",
    featured: true
  },
  {
    id: 5,
    name: "Kabuli Maxico",
    nameHi: "काबुली मेक्सिको",
    description: "Extra-large Kabuli chickpeas sourced from Mexico, known for their superior size and creamy texture. The ultimate choice for authentic hummus.",
    descriptionHi: "मेक्सिको से प्राप्त अतिरिक्त-बड़े काबुली चने, जो अपने बेहतर आकार और मलाईदार बनावट के लिए जाने जाते हैं। प्रामाणिक हम्मस के लिए अंतिम विकल्प।",
    category: "Kabuli Chana",
    categoryHi: "काबुली चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/kabuli-maxico-gold.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://sadabahaar-167866605.imgix.net/kabuli-maxico-2.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://drive.google.com/file/d/1KLmBU3JLZ0oA1vmNZ3Xx_mNUoG0JCvEM/preview",
    badge: "Jumbo Size",
    badgeHi: "जंबो आकार",
    featured: true
  },
  {
    id: 6,
    name: "Kabuli Chana Red",
    nameHi: "काबुली चना रेड",
    description: "A vibrant red variety of Kabuli chana, prized for its rich, nutty flavor and firm texture, ideal for salads and curries.",
    descriptionHi: "काबुली चने की एक जीवंत लाल किस्म, जो अपने समृद्ध, पौष्टिक स्वाद और दृढ़ बनावट के लिए जानी जाती है, सलाद और करी के लिए आदर्श है।",
    category: "Kabuli Chana",
    categoryHi: "काबुली चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-red.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-red.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://drive.google.com/file/d/1v8BD3q4mwc0n-BWd4YTpo3Hoclgsd78c/preview",
    badge: "High Protein",
    badgeHi: "उच्च प्रोटीन",
    featured: true
  },
  {
    id: 7,
    name: "Kabuli Chana Orange",
    nameHi: "काबुली चना ऑरेंज",
    description: "A rare orange-hued Kabuli chana with a mildly sweet flavor profile. Adds beautiful color and nutrition to any dish.",
    descriptionHi: "एक दुर्लभ नारंगी रंग का काबुली चना जिसमें हल्का मीठा स्वाद होता है। किसी भी व्यंजन में सुंदर रंग और पोषण जोड़ता है।",
    category: "Kabuli Chana",
    categoryHi: "काबुली चना",
    images: [
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-orange.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://sadabahaar-167866605.imgix.net/kabuli-chana-orange-2.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://drive.google.com/file/d/1VY7LyR5X3SP3YunT11wqAOf05qui_grG/preview",
    badge: "Exotic Variety",
    badgeHi: "विदेशी किस्म",
    featured: false
  },
  {
    id: 8,
    name: "Rajma Orange",
    nameHi: "राजमा ऑरेंज",
    description: "A unique orange-colored kidney bean with a smooth, buttery texture that absorbs flavors beautifully in slow-cooked dishes.",
    descriptionHi: "एक अनोखा नारंगी रंग का राजमा जिसमें एक चिकनी, मक्खन जैसी बनावट होती है जो धीरे-धीरे पके हुए व्यंजनों में स्वाद को खूबसूरती से सोख लेती है।",
    category: "Rajma",
    categoryHi: "राजमा",
    images: [
      "https://sadabahaar-167866605.imgix.net/rajma-orange.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1607616611348-7d5d2838c64f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    badge: "New Flavor",
    badgeHi: "नया स्वाद",
    featured: false
  },
  {
    id: 9,
    name: "Rajma Gold",
    nameHi: "राजमा गोल्ड",
    description: "Premium, golden-hued kidney beans known for their rich taste and creamy consistency, perfect for making an exquisite Rajma Masala.",
    descriptionHi: "प्रीमियम, सुनहरे रंग का राजमा जो अपने समृद्ध स्वाद और मलाईदार स्थिरता के लिए जाना जाता है, एक उत्तम राजमा मसाला बनाने के लिए बिल्कुल उपयुक्त है।",
    category: "Rajma",
    categoryHi: "राजमा",
    images: [
      "https://sadabahaar-167866605.imgix.net/rajma-gold.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1547496614-54737a7b8232?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    badge: "Premium Quality",
    badgeHi: "प्रीमियम गुणवत्ता",
    featured: true
  },
  {
    id: 10,
    name: "Urad Light Green",
    nameHi: "उड़द हल्का हरा",
    description: "Split and husked light green urad dal, offering a mild flavor and soft texture. Cooks quickly and is easy to digest.",
    descriptionHi: "छिलके वाली हल्की हरी उड़द की दाल, जो हल्का स्वाद और नरम बनावट प्रदान करती है। जल्दी पक जाती है और पचाने में आसान होती है।",
    category: "Urad",
    categoryHi: "उड़द",
    images: [
      "https://sadabahaar-167866605.imgix.net/urad-light-green.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1594282436458-755a18a93e24?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    badge: "Easy to Cook",
    badgeHi: "पकाने में आसान",
    featured: true
  },
  {
    id: 11,
    name: "Urad Dark Green",
    nameHi: "उड़द गहरा हरा",
    description: "Whole dark green urad beans with the skin on, delivering a robust, earthy flavor and high nutritional value. Ideal for authentic Dal Makhani.",
    descriptionHi: "छिलके सहित साबुत गहरे हरे उड़द की दाल, जो एक मजबूत, मिट्टी जैसा स्वाद और उच्च पोषण मूल्य प्रदान करती है। प्रामाणिक दाल मखनी के लिए आदर्श।",
    category: "Urad",
    categoryHi: "उड़द",
    images: [
      "https://sadabahaar-167866605.imgix.net/urad-dark-green.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1570479204278-f791552a4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    badge: "Rich & Earthy",
    badgeHi: "समृद्ध और मिट्टी जैसा",
    featured: true
  },
  {
    id: 12,
    name: "Urad Pink",
    nameHi: "उड़द गुलाबी",
    description: "A rare and beautiful pink-skinned urad dal, known for its delicate flavor and creamy texture. A perfect choice for unique culinary creations.",
    descriptionHi: "एक दुर्लभ और सुंदर गुलाबी छिलके वाली उड़द की दाल, जो अपने नाजुक स्वाद और मलाईदार बनावट के लिए जानी जाती है। अद्वितीय पाक कृतियों के लिए एक आदर्श विकल्प।",
    category: "Urad",
    categoryHi: "उड़द",
    images: [
      "https://sadabahaar-167866605.imgix.net/urad-pink.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1595462589921-2a1e1d3b2dc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    ],
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    badge: "Rare Find",
    badgeHi: "दुर्लभ खोज",
    featured: false
  }
];

export const blogPosts: BlogPost[] = [
  /**
   * BLOG POST STRUCTURE GUIDE
   * ========================
   * 
   * To add a new blog post, copy this structure and fill in your content:
   * 
   * {
   *   id: [INCREMENT_NUMBER], // Start from 2 for next blog
   *   title: "Your Blog Title in English",
   *   titleHi: "आपके ब्लॉग का हिंदी शीर्षक", // Hindi translation of title
   *   excerpt: "Brief summary of your blog post in English (2-3 sentences max)",
   *   excerptHi: "आपके ब्लॉग पोस्ट का हिंदी में संक्षिप्त विवरण", // Hindi translation of excerpt
   *   
   *   // CONTENT STRUCTURE - Use these content block types:
   *   content: [
   *     {
   *       type: 'paragraph',
   *       content: 'Your paragraph text goes here. This is for regular content blocks.'
   *     },
   *     {
   *       type: 'heading', 
   *       content: 'Your Main Section Heading' // Will render as large heading (h2)
   *     },
   *     {
   *       type: 'subheading',
   *       content: 'Your Subsection Heading' // Will render as medium heading (h3)
   *     },
   *     {
   *       type: 'list',
   *       content: 'Optional intro text for the list:', // Optional description before list
   *       items: [
   *         'First list item',
   *         'Second list item',
   *         'Item with Bold Text: Use colon to make text before colon bold'
   *       ]
   *     }
   *   ],
   *   
   *   // Hindi content follows the same structure
   *   contentHi: [
   *     // Same structure as content array but with Hindi translations
   *   ],
   *   
   *   category: "Category Name", // e.g., "Nutrition", "Agriculture", "Health"
   *   categoryHi: "श्रेणी का नाम", // Hindi translation of category
   *   image: "https://your-image-url.com/image.jpg", // Featured image URL
   *   publishedAt: new Date("YYYY-MM-DD"), // Publication date
   *   featured: true, // true for featured posts, false otherwise
   * }
   * 
   * PROMPT TO USE FOR ADDING NEW BLOG:
   * ==================================
   * "I want to add a new blog post. Here's the content: [PASTE_YOUR_CONTENT_HERE]
   * Please create a suitable title, format the content using the blog structure with 
   * headings, paragraphs, and lists as appropriate. Add both English and Hindi versions 
   * (you can add placeholder text for Hindi that I'll translate later). Use the next 
   * available ID number and set appropriate category and publication date."
   */
  
  {
    id: 1,
    title: "The Power of Pulses: More Than Just a Staple",
    titleHi: "दालों की शक्ति: सिर्फ एक मुख्य भोजन से कहीं ज़्यादा",
    excerpt: "Discover how humble pulses like chickpeas, lentils, and mung beans are not only packed with nutrition but also play a vital role in sustainable agriculture and a stronger economy.",
    excerptHi: "जानें कि कैसे चने, दाल, और मूंग जैसी साधारण दालें न केवल पोषण से भरपूर हैं, बल्कि टिकाऊ कृषि और एक मजबूत अर्थव्यवस्था में भी महत्वपूर्ण भूमिका निभाती हैं।",
    content: [
      {
        type: 'paragraph',
        content: 'For many Indians, a warm bowl of dal is more than just food—it\'s a nostalgic taste of home. While these humble pulses are often seen as everyday staples, they carry far greater value. Legumes like chickpeas, lentils, mung beans, and pigeon peas are not only rich in nutrition, but they also play a vital role in supporting sustainable agriculture and strengthening the economy. These small but mighty ingredients nourish both our bodies and the planet.'
      },
      {
        type: 'paragraph',
        content: 'Let\'s take a closer look at why pulses deserve a front-row seat in our diets and our farmlands.'
      },
      {
        type: 'heading',
        content: 'Health on Your Plate'
      },
      {
        type: 'paragraph',
        content: 'Pulses are packed with protein, making them an essential food source—especially for vegetarian and vegan diets. They\'re also rich in fibre, iron, calcium, and essential vitamins like thiamine and riboflavin. Mung beans, for example, offer high-quality protein and vitamin C, while urd beans stand out for their phosphorus content.'
      },
      {
        type: 'paragraph',
        content: 'Not only do they help build muscles, but they also aid digestion, support heart health, and help manage blood sugar. Lentils are even considered helpful in relieving constipation and intestinal issues. Sprouted pulses like mothbean and mungbean are often recommended for weaning infants because of their easy digestibility and nutrition.'
      },
      {
        type: 'heading',
        content: 'Kitchen Staples with Culinary Versatility'
      },
      {
        type: 'paragraph',
        content: 'From piping hot sambhars to crunchy papads and savoury bhujias, pulses are the base of many cherished Indian dishes. Here\'s how some of them show up in our meals:'
      },
      {
        type: 'list',
        content: 'Pulse varieties in our meals:',
        items: [
          'Chickpeas (Gram): Used in everything from curries to sweets, and even in flour form for biscuits, laddoos, and nankhatai.',
          'Pigeonpea (Tur): A pantry staple as split dal, also used in making khichdi and dals across regions.',
          'Mungbean: Whole, split, or sprouted—mungbeans feature in dals, chillas, savouries, and even salads.',
          'Urdbean: The backbone of South Indian classics like dosa, idli, vada, and also used in papads and spiced curries.',
          'Lentils & Field Peas: Ideal for soups, stews, purées, breads, and infant foods.',
          'Mothbean & Lathyrus: Consumed whole or as dal, and turned into snacks like bhujia, papads, or sprouts.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Simply put, pulses can slide into any meal—breakfast, lunch, dinner, or snack time.'
      },
      {
        type: 'heading',
        content: 'Friends of the Farmer and the Earth'
      },
      {
        type: 'paragraph',
        content: 'Beyond nutrition and taste, pulses play a major role in sustainable agriculture. Their natural ability to fix nitrogen in the soil reduces the need for synthetic fertilizers, improving soil fertility for future crops. This is especially true for crops like chickpea, urdbean, and lathyrus.'
      },
      {
        type: 'paragraph',
        content: 'Many pulses like pigeonpea, mungbean, and clusterbean also prevent soil erosion due to their ground coverage and deep-rooted growth. Some, like cowpea and mothbean, act as excellent green manure or cover crops, contributing to soil health while also providing food and fodder.'
      },
      {
        type: 'heading',
        content: 'Fuel for Livestock, Too'
      },
      {
        type: 'paragraph',
        content: 'It\'s not just humans who benefit—pulses are valuable livestock feed. The husks, leaves, and broken pods of lentils, mungbean, and pigeonpea make nutritious fodder. The residual biomass from pulses like tur and urdbean is used to feed cattle, while even their dry sticks serve as fuel or thatching material in rural households.'
      },
      {
        type: 'heading',
        content: 'Value Beyond the Farm'
      },
      {
        type: 'paragraph',
        content: 'Some pulses go a step further. Clusterbean, for instance, is known for producing guar gum—an industrial product exported worldwide and used in everything from food to cosmetics. Similarly, crops like rajmash and field peas are popular internationally and hold economic value in both domestic and export markets.'
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Whether you\'re a farmer, a home cook, or someone trying to eat healthier, pulses tick all the right boxes. They\'re affordable, accessible, environmentally friendly, and incredibly versatile in the kitchen. From nourishing our bodies to enriching our soils, pulses are quietly doing a lot of heavy lifting behind the scenes.'
      },
      {
        type: 'paragraph',
        content: 'So, the next time you stir a pot of dal or bite into a papad, take a moment to appreciate these unsung heroes. They\'re not just ingredients—they\'re a way forward for a healthier future.'
      }
    ],
    contentHi: [
      {
        type: 'paragraph',
        content: 'कई भारतीयों के लिए, दाल का एक गर्म कटोरा सिर्फ भोजन से कहीं ज़्यादा है—यह घर का एक यादगार स्वाद है। जबकि इन साधारण दालों को अक्सर रोज़मर्रा की मुख्य चीज़ों के रूप में देखा जाता है, वे बहुत अधिक मूल्य रखती हैं। चना, मसूर, मूंग और अरहर जैसी दालें न केवल पोषण से भरपूर हैं, बल्कि टिकाऊ कृषि का समर्थन करने और अर्थव्यवस्था को मजबूत बनाने में भी महत्वपूर्ण भूमिका निभाती हैं। ये छोटे लेकिन शक्तिशाली तत्व हमारे शरीर और ग्रह दोनों का पोषण करते हैं।'
      },
      {
        type: 'paragraph',
        content: 'आइए इस पर करीब से नज़र डालें कि दालें हमारे आहार और हमारे खेतों में सबसे आगे क्यों होनी चाहिए।'
      },
      {
        type: 'heading',
        content: 'आपकी थाली में स्वास्थ्य'
      },
      {
        type: 'paragraph',
        content: 'दालें प्रोटीन से भरपूर होती हैं, जो उन्हें एक आवश्यक खाद्य स्रोत बनाती हैं—खासकर शाकाहारी और वीगन आहार के लिए। ये फाइबर, आयरन, कैल्शियम और थायमिन और राइबोफ्लेविन जैसे आवश्यक विटामिन से भी भरपूर होती हैं। उदाहरण के लिए, मूंग उच्च गुणवत्ता वाला प्रोटीन और विटामिन सी प्रदान करती है, जबकि उड़द अपनी फॉस्फोरस सामग्री के लिए प्रसिद्ध है।'
      },
      {
        type: 'paragraph',
        content: 'ये न केवल मांसपेशियों के निर्माण में मदद करती हैं, बल्कि पाचन में सहायता करती हैं, हृदय स्वास्थ्य का समर्थन करती हैं और रक्त शुगर को नियंत्रित करने में मदद करती हैं। मसूर को कब्ज और आंतों की समस्याओं से राहत दिलाने में सहायक माना जाता है। मोठ और मूंग जैसी अंकुरित दालों को अक्सर शिशुओं के दूध छुड़ाने के लिए सुझाया जाता है क्योंकि ये आसानी से पच जाती हैं और पोषक तत्वों से भरपूर होती हैं।'
      },
      {
        type: 'heading',
        content: 'रसोई के मुख्य सामान और पाक कला में बहुमुखी प्रतिभा'
      },
      {
        type: 'paragraph',
        content: 'गर्म सांभर से लेकर कुरकुरे पापड़ और स्वादिष्ट भुजिया तक, दालें कई प्रिय भारतीय व्यंजनों का आधार हैं। यहाँ देखें कि ये हमारे भोजन में कैसे शामिल होती हैं:'
      },
      {
        type: 'list',
        content: 'हमारे भोजन में दालों की किस्में:',
        items: [
          'चना (बेसन): करी से लेकर मिठाई तक सब में उपयोग होता है, और आटे के रूप में बिस्कुट, लड्डू और नानखटाई बनाने में भी।',
          'अरहर (तूर): एक मुख्य दाल के रूप में, खिचड़ी और विभिन्न क्षेत्रों की दालें बनाने में भी उपयोग होती है।',
          'मूंग: साबुत, धुली या अंकुरित—मूंग दाल, चीला, नमकीन और सलाद में भी शामिल होती है।',
          'उड़द: दक्षिण भारतीय क्लासिक व्यंजन जैसे डोसा, इडली, वड़ा की रीढ़ है और पापड़ और मसाले वाली करी में भी उपयोग होती है।',
          'मसूर और मटर: सूप, स्टू, प्यूरी, रोटी और शिशु आहार के लिए आदर्श।',
          'मोठ और खेसारी: साबुत या दाल के रूप में सेवन किया जाता है, और भुजिया, पापड़ या अंकुरित के रूप में नाश्ते में बदल दिया जाता है।'
        ]
      },
      {
        type: 'paragraph',
        content: 'सीधे शब्दों में कहें तो, दालें किसी भी भोजन में शामिल हो सकती हैं—नाश्ता, दोपहर का खाना, रात का खाना या नाश्ते का समय।'
      },
      {
        type: 'heading',
        content: 'किसान और पृथ्वी के मित्र'
      },
      {
        type: 'paragraph',
        content: 'पोषण और स्वाद के अलावा, दालें टिकाऊ कृषि में एक प्रमुख भूमिका निभाती हैं। मिट्टी में नाइट्रोजन स्थिर करने की उनकी प्राकृतिक क्षमता कृत्रिम उर्वरकों की आवश्यकता को कम करती है, भविष्य की फसलों के लिए मिट्टी की उर्वरता में सुधार करती है। यह विशेष रूप से चना, उड़द और खेसारी जैसी फसलों के लिए सच है।'
      },
      {
        type: 'paragraph',
        content: 'अरहर, मूंग और ग्वार जैसी कई दालें भी अपने भूमि कवरेज और गहरी जड़ों वाली वृद्धि के कारण मिट्टी के कटाव को रोकती हैं। लोबिया और मोठ जैसी कुछ दालें उत्कृष्ट हरी खाद या कवर क्रॉप का काम करती हैं, मिट्टी के स्वास्थ्य में योगदान देती हैं और साथ ही भोजन और चारा भी प्रदान करती हैं।'
      },
      {
        type: 'heading',
        content: 'पशुओं के लिए भी ईंधन'
      },
      {
        type: 'paragraph',
        content: 'केवल इंसानों को ही फायदा नहीं होता—दालें मूल्यवान पशु आहार भी हैं। मसूर, मूंग और अरहर की भूसी, पत्तियां और टूटी हुई फलियां पौष्टिक चारा बनाती हैं। तूर और उड़द से निकलने वाला अवशिष्ट बायोमास मवेशियों को खिलाने में उपयोग होता है, जबकि उनकी सूखी लकड़ियां भी ग्रामीण घरों में ईंधन या छत बनाने की सामग्री के रूप में काम आती हैं।'
      },
      {
        type: 'heading',
        content: 'खेत से परे मूल्य'
      },
      {
        type: 'paragraph',
        content: 'कुछ दालें एक कदम और आगे जाती हैं। उदाहरण के लिए, ग्वार गम का उत्पादन करने के लिए ग्वार प्रसिद्ध है—एक औद्योगिक उत्पाद जो दुनिया भर में निर्यात किया जाता है और खाद्य पदार्थों से लेकर सौंदर्य प्रसाधनों तक हर चीज़ में उपयोग होता है। इसी तरह, राजमा और मटर जैसी फसलें अंतर्राष्ट्रीय स्तर पर लोकप्रिय हैं और घरेलू और निर्यात बाज़ारों दोनों में आर्थिक मूल्य रखती हैं।'
      },
      {
        type: 'heading',
        content: 'निष्कर्ष'
      },
      {
        type: 'paragraph',
        content: 'चाहे आप एक किसान हों, घर में खाना बनाने वाले हों, या स्वस्थ खाने की कोशिश कर रहे हों, दालें सभी सही बॉक्स पर टिक करती हैं। ये किफायती, सुलभ, पर्यावरण के अनुकूल और रसोई में अविश्वसनीय रूप से बहुमुखी हैं। हमारे शरीर का पोषण करने से लेकर हमारी मिट्टी को समृद्ध बनाने तक, दालें चुपचाप पर्दे के पीछे बहुत सारा भारी काम कर रही हैं।'
      },
      {
        type: 'paragraph',
        content: 'तो, अगली बार जब आप दाल का बर्तन हिलाएं या पापड़ का टुकड़ा खाएं, तो इन गुमनाम नायकों की सराहना करने के लिए एक क्षण रुकें। ये सिर्फ सामग्री नहीं हैं—ये एक स्वस्थ भविष्य का रास्ता हैं।'
      }
    ],
    category: "Nutrition",
    categoryHi: "पोषण",
    image: "https://sadabahaar-167866605.imgix.net/power-of-pulses-min.png",
    publishedAt: new Date("2024-07-26"),
    featured: true,
  },
  {
    id: 2,
    title: "The Cold Revolution: How Our On-Site Cold Storage Delivers Unmatched Quality and Profitability",
    titleHi: "शीत क्रांति: कैसे हमारा ऑन-साइट कोल्ड स्टोरेज आपके व्यापार को बेजोड़ गुणवत्ता और लाभप्रदता प्रदान करता है",
    excerpt: "Discover how Mohan Krushi Udyog's revolutionary cold storage facility transforms the pulse supply chain, delivering superior quality products while eliminating hidden risks and boosting your business profitability.",
    excerptHi: "जानें कि कैसे मोहन कृषि उद्योग की क्रांतिकारी कोल्ड स्टोरेज सुविधा दाल आपूर्ति श्रृंखला को बदल देती है, छुपे हुए जोखिमों को खत्म करते हुए बेहतर गुणवत्ता वाले उत्पाद प्रदान करती है और आपके व्यापार की लाभप्रदता बढ़ाती है।",
    content: [
      {
        type: 'paragraph',
        content: 'As a business that relies on premium agricultural products, you understand the challenges. The quality of pulses can be unpredictable, varying from one batch to the next. You face the constant risk of spoilage, the hidden threat of pest infestations that can emerge weeks after delivery, and the operational headaches that come with inconsistent raw materials. These issues don\'t just affect your product; they impact your efficiency, your brand reputation, and your bottom line.'
      },
      {
        type: 'paragraph',
        content: 'At Mohan Krushi Udyog, we recognized that the traditional pulse supply chain was fundamentally broken. We decided to do something revolutionary about it.'
      },
      {
        type: 'heading',
        content: 'The Problem with the Old Way: A Chain of Risk'
      },
      {
        type: 'paragraph',
        content: 'In India, post-harvest losses are a staggering problem, costing the agricultural sector over INR 1.53 trillion (USD 18.5 billion) annually. Pulses are especially vulnerable. Compared to cereals, they are far more susceptible to damage from insects and microorganisms, with losses sometimes reaching as high as 30-70%.'
      },
      {
        type: 'paragraph',
        content: 'This degradation begins the moment the pulse is harvested. The conventional supply chain is a long and fragmented journey involving multiple handlers, warehouses, and transport stages. Each step introduces new risks:'
      },
      {
        type: 'list',
        content: 'Key risks in traditional supply chains:',
        items: [
          'Physical Damage: Multiple handling points lead to cracked and broken kernels, which are prime targets for pests.',
          'Environmental Exposure: Fluctuating temperatures and high humidity create the perfect breeding ground for mold and insects.',
          'The Hidden Threat: Many businesses don\'t realize that conventionally stored pulses often arrive with a hidden biological liability. Insect eggs, laid in the field or during transport, can lie dormant, only to hatch in your own storage facility weeks later, leading to a surprise infestation that can destroy valuable inventory.'
        ]
      },
      {
        type: 'paragraph',
        content: 'This system forces businesses like yours to accept a product with unpredictable quality and a hidden ticking clock. We knew there had to be a better way.'
      },
      {
        type: 'heading',
        content: 'Our Solution: A Paradigm Shift in Preservation'
      },
      {
        type: 'paragraph',
        content: 'To solve these problems at their root, Mohan Krushi Udyog has pioneered a first-of-its-kind solution in the Indian pulse industry: a state-of-the-art cold storage facility integrated directly with our processing plant.'
      },
      {
        type: 'paragraph',
        content: 'This isn\'t just a warehouse; it\'s a scientifically controlled environment designed to lock in quality at its absolute peak. The principle is simple yet powerful: low temperatures are a natural preservative. For every 10°C drop in temperature, the viable shelf life of food effectively doubles. By moving our pulses immediately from the processing line into a stabilized, cold environment, we halt the biological and chemical processes that cause decay.'
      },
      {
        type: 'heading',
        content: 'The Tangible Benefits for Your Business'
      },
      {
        type: 'paragraph',
        content: 'This investment translates directly into a superior product and a significant competitive advantage for your business.'
      },
      {
        type: 'subheading',
        content: '1. Unrivaled Purity and Safety—Without Chemicals'
      },
      {
        type: 'paragraph',
        content: 'One of the greatest challenges in pulse storage is pest control, which often relies on chemical fumigation. Our cold storage system acts as a powerful, non-chemical pest management tool. Insect development and reproduction effectively stop at temperatures below 20°C, and temperatures below 13°C are lethal to most stored-product pests. This means we deliver a product that is verifiably free from live insects and their eggs, without the chemical residues. The cold, controlled-humidity environment also inhibits the growth of mold and harmful mycotoxins, ensuring a safer product for your customers.'
      },
      {
        type: 'subheading',
        content: '2. Peak Quality You Can See and Taste'
      },
      {
        type: 'paragraph',
        content: 'Heat, light, and oxygen are the enemies of quality, causing pulses to lose nutritional value, darken in color, and develop off-flavors. Our system shields the pulses from these elements, preserving their integrity:'
      },
      {
        type: 'list',
        content: 'Quality preservation benefits:',
        items: [
          'Nutritional Value: We protect the essential vitamins, protein, and minerals that make pulses a nutritional powerhouse.',
          'Sensory Attributes: Our pulses retain their vibrant, natural color, firm texture, and clean, authentic taste.',
          'Physical Integrity: By minimizing handling damage and preventing pest boring, we deliver whole, intact grains with very few splits or cracks, ideal for downstream processing.'
        ]
      },
      {
        type: 'subheading',
        content: '3. A Direct Impact on Your Operational Efficiency and Profitability'
      },
      {
        type: 'paragraph',
        content: 'Partnering with Mohan Krushi Udyog is a strategic decision that strengthens your own operations.'
      },
      {
        type: 'list',
        content: 'Operational advantages for your business:',
        items: [
          'Maximize Your Yields: Our structurally sound pulses perform better in milling and splitting, leading to less powdering and breakage. This increase in yield can significantly boost your profitability.',
          'Reduce Your Waste: A superior, cleaner raw material requires less sorting and pre-processing on your end. More importantly, you eliminate the risk of internal inventory loss from a latent pest infestation.',
          'De-Risk Your Supply Chain: The extended and predictable shelf life of our pulses gives you greater inventory flexibility. You can buy with confidence, buffering your business against market volatility and ensuring a consistent supply.',
          'Strengthen Your Brand: The quality of your ingredients is the foundation of your brand\'s reputation. Using our premium, pure, and chemical-free pulses allows you to make stronger quality claims, build consumer trust, and stand out in a competitive market.'
        ]
      },
      {
        type: 'heading',
        content: 'The Mohan Krushi Udyog Promise'
      },
      {
        type: 'paragraph',
        content: 'Our investment in on-site cold storage is a testament to our commitment to bridging the gap between India\'s farms and quality-conscious businesses. We are not just selling pulses; we are offering a partnership built on a foundation of unparalleled quality, consistency, and safety.'
      },
      {
        type: 'paragraph',
        content: 'We provide the stable, high-quality platform you need to innovate, grow, and build your own success.'
      },
      {
        type: 'paragraph',
        content: 'Experience the difference for yourself. Contact a Mohan Krushi Udyog expert today to learn how our revolutionary approach can enhance your products and your profitability.'
      }
    ],
    contentHi: [
      {
        type: 'paragraph',
        content: 'प्रीमियम कृषि उत्पादों पर निर्भर एक व्यापार के रूप में, आप चुनौतियों को समझते हैं। दालों की गुणवत्ता अप्रत्याशित हो सकती है, एक बैच से दूसरे बैच में भिन्न होती रहती है। आप खराब होने के निरंतर जोखिम, कीट संक्रमण के छुपे हुए खतरे का सामना करते हैं जो डिलीवरी के हफ्तों बाद उभर सकते हैं, और असंगत कच्चे माल के साथ आने वाली परिचालन समस्याओं का सामना करते हैं। ये मुद्दे केवल आपके उत्पाद को प्रभावित नहीं करते; वे आपकी दक्षता, आपकी ब्रांड प्रतिष्ठा और आपके मुनाफे को प्रभावित करते हैं।'
      },
      {
        type: 'paragraph',
        content: 'मोहन कृषि उद्योग में, हमने पहचाना कि पारंपरिक दाल आपूर्ति श्रृंखला मौलिक रूप से टूटी हुई थी। हमने इसके बारे में कुछ क्रांतिकारी करने का फैसला किया।'
      },
      {
        type: 'heading',
        content: 'पुराने तरीके की समस्या: जोखिम की श्रृंखला'
      },
      {
        type: 'paragraph',
        content: 'भारत में, फसल कटाई के बाद के नुकसान एक चौंकाने वाली समस्या हैं, जो कृषि क्षेत्र को सालाना 1.53 ट्रिलियन रुपये (18.5 बिलियन डॉलर) से अधिक की लागत देते हैं। दालें विशेष रूप से कमजोर हैं। अनाज की तुलना में, वे कीड़ों और सूक्ष्मजीवों से होने वाले नुकसान के लिए कहीं अधिक संवेदनशील हैं, कभी-कभी नुकसान 30-70% तक पहुंच जाते हैं।'
      },
      {
        type: 'paragraph',
        content: 'यह गिरावट उस क्षण से शुरू होती है जब दाल की कटाई होती है। पारंपरिक आपूर्ति श्रृंखला कई हैंडलर, गोदामों और परिवहन चरणों से जुड़ी एक लंबी और खंडित यात्रा है। हर कदम नए जोखिम पेश करता है:'
      },
      {
        type: 'list',
        content: 'पारंपरिक आपूर्ति श्रृंखलाओं में मुख्य जोखिम:',
        items: [
          'भौतिक क्षति: कई हैंडलिंग बिंदु दरार और टूटे हुए दानों की ओर ले जाते हैं, जो कीटों के लिए मुख्य लक्ष्य हैं।',
          'पर्यावरणीय जोखिम: उतार-चढ़ाव वाले तापमान और उच्च आर्द्रता मोल्ड और कीड़ों के लिए एकदम सही प्रजनन स्थल बनाते हैं।',
          'छुपा हुआ खतरा: कई व्यापारों को एहसास नहीं होता कि पारंपरिक रूप से संग्रहीत दालें अक्सर एक छुपी हुई जैविक देनदारी के साथ आती हैं। खेत में या परिवहन के दौरान रखे गए कीट अंडे निष्क्रिय हो सकते हैं, केवल हफ्तों बाद आपकी अपनी भंडारण सुविधा में फूटने के लिए, जिससे एक आश्चर्यजनक संक्रमण हो सकता है जो मूल्यवान इन्वेंट्री को नष्ट कर सकता है।'
        ]
      },
      {
        type: 'paragraph',
        content: 'यह प्रणाली आप जैसे व्यापारों को अप्रत्याशित गुणवत्ता और एक छुपी हुई टिकिंग घड़ी के साथ उत्पाद स्वीकार करने के लिए मजबूर करती है। हम जानते थे कि एक बेहतर तरीका होना चाहिए।'
      },
      {
        type: 'heading',
        content: 'हमारा समाधान: संरक्षण में एक प्रतिमान बदलाव'
      },
      {
        type: 'paragraph',
        content: 'इन समस्याओं को जड़ से हल करने के लिए, मोहन कृषि उद्योग ने भारतीय दाल उद्योग में अपनी तरह के पहले समाधान का अग्रणी काम किया है: हमारी प्रसंस्करण संयंत्र के साथ सीधे एकीकृत एक अत्याधुनिक कोल्ड स्टोरेज सुविधा।'
      },
      {
        type: 'paragraph',
        content: 'यह केवल एक गोदाम नहीं है; यह एक वैज्ञानिक रूप से नियंत्रित वातावरण है जो गुणवत्ता को इसकी पूर्ण चरम पर लॉक करने के लिए डिज़ाइन किया गया है। सिद्धांत सरल लेकिन शक्तिशाली है: कम तापमान एक प्राकृतिक परिरक्षक है। तापमान में हर 10°C की गिरावट के लिए, भोजन का व्यवहार्य शेल्फ जीवन प्रभावी रूप से दोगुना हो जाता है। अपनी दालों को प्रसंस्करण लाइन से तुरंत एक स्थिर, ठंडे वातावरण में स्थानांतरित करके, हम उन जैविक और रासायनिक प्रक्रियाओं को रोकते हैं जो क्षय का कारण बनती हैं।'
      },
      {
        type: 'heading',
        content: 'आपके व्यापार के लिए ठोस लाभ'
      },
      {
        type: 'paragraph',
        content: 'यह निवेश सीधे एक बेहतर उत्पाद और आपके व्यापार के लिए एक महत्वपूर्ण प्रतिस्पर्धी लाभ में अनुवादित होता है।'
      },
      {
        type: 'subheading',
        content: '1. बेजोड़ शुद्धता और सुरक्षा—बिना रसायनों के'
      },
      {
        type: 'paragraph',
        content: 'दाल भंडारण में सबसे बड़ी चुनौतियों में से एक कीट नियंत्रण है, जो अक्सर रासायनिक धूमन पर निर्भर करता है। हमारी कोल्ड स्टोरेज सिस्टम एक शक्तिशाली, गैर-रासायनिक कीट प्रबंधन उपकरण के रूप में कार्य करती है। 20°C से नीचे के तापमान पर कीट विकास और प्रजनन प्रभावी रूप से रुक जाता है, और 13°C से नीचे का तापमान अधिकांश संग्रहीत-उत्पाद कीटों के लिए घातक है।'
      },
      {
        type: 'subheading',
        content: '2. शिखर गुणवत्ता जिसे आप देख और चख सकते हैं'
      },
      {
        type: 'paragraph',
        content: 'गर्मी, प्रकाश और ऑक्सीजन गुणवत्ता के दुश्मन हैं, जो दालों को पोषण मूल्य खोने, रंग में काले होने और खराब स्वाद विकसित करने का कारण बनते हैं। हमारी प्रणाली दालों को इन तत्वों से बचाती है:'
      },
      {
        type: 'list',
        content: 'गुणवत्ता संरक्षण लाभ:',
        items: [
          'पोषण मूल्य: हम उन आवश्यक विटामिन, प्रोटीन और खनिजों की रक्षा करते हैं जो दालों को एक पोषण पावरहाउस बनाते हैं।',
          'संवेदी गुण: हमारी दालें अपने जीवंत, प्राकृतिक रंग, दृढ़ बनावट और साफ, प्रामाणिक स्वाद को बनाए रखती हैं।',
          'भौतिक अखंडता: हैंडलिंग क्षति को कम करके और कीट छेदन को रोकर, हम बहुत कम विभाजन या दरार के साथ पूरे, बरकरार अनाज प्रदान करते हैं।'
        ]
      },
      {
        type: 'subheading',
        content: '3. आपकी परिचालन दक्षता और लाभप्रदता पर प्रत्यक्ष प्रभाव'
      },
      {
        type: 'paragraph',
        content: 'मोहन कृषि उद्योग के साथ साझेदारी एक रणनीतिक निर्णय है जो आपके अपने संचालन को मजबूत बनाता है।'
      },
      {
        type: 'list',
        content: 'आपके व्यापार के लिए परिचालन लाभ:',
        items: [
          'अपनी पैदावार अधिकतम करें: हमारी संरचनात्मक रूप से मजबूत दालें मिलिंग और विभाजन में बेहतर प्रदर्शन करती हैं, जिससे कम पाउडरिंग और टूटना होता है।',
          'अपना अपशिष्ट कम करें: एक बेहतर, साफ कच्चा माल आपकी तरफ से कम छंटाई और पूर्व-प्रसंस्करण की आवश्यकता होती है।',
          'अपनी आपूर्ति श्रृंखला को जोखिम-मुक्त बनाएं: हमारी दालों का विस्तृत और अनुमानित शेल्फ जीवन आपको अधिक इन्वेंट्री लचीलापन देता है।',
          'अपने ब्रांड को मजबूत बनाएं: आपकी सामग्री की गुणवत्ता आपकी ब्रांड प्रतिष्ठा की नींव है।'
        ]
      },
      {
        type: 'heading',
        content: 'मोहन कृषि उद्योग का वादा'
      },
      {
        type: 'paragraph',
        content: 'ऑन-साइट कोल्ड स्टोरेज में हमारा निवेश भारत के खेतों और गुणवत्ता-सचेत व्यापारों के बीच की खाई को पाटने की हमारी प्रतिबद्धता का प्रमाण है। हम केवल दालें नहीं बेच रहे हैं; हम बेजोड़ गुणवत्ता, स्थिरता और सुरक्षा की नींव पर निर्मित एक साझेदारी की पेशकश कर रहे हैं।'
      },
      {
        type: 'paragraph',
        content: 'हम आपको नवाचार, विकास और अपनी सफलता निर्माण के लिए आवश्यक स्थिर, उच्च-गुणवत्ता प्लेटफॉर्म प्रदान करते हैं।'
      },
      {
        type: 'paragraph',
        content: 'अंतर का अनुभव स्वयं करें। आज ही मोहन कृषि उद्योग के विशेषज्ञ से संपर्क करें और जानें कि हमारा क्रांतिकारी दृष्टिकोण आपके उत्पादों और आपकी लाभप्रदता को कैसे बढ़ा सकता है।'
      }
    ],
    category: "Technology",
    categoryHi: "प्रौद्योगिकी",
    image: "https://sadabahaar-167866605.imgix.net/cold-storage.png",
    video: "https://drive.google.com/file/d/1lyFPmlP_mRSgWWQJyBdP-kj8Ogeudmod/preview",
    publishedAt: new Date("2025-01-15"),
    featured: true,
  },
];