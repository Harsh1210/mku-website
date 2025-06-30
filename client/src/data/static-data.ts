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

export interface BlogPost {
  id: number;
  title: string;
  titleHi: string | null;
  excerpt: string;
  excerptHi: string | null;
  content: string;
  contentHi: string | null;
  category: string;
  categoryHi: string | null;
  image: string | null;
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
  image: string | null;
  badge: string | null;
  badgeHi: string | null;
  featured: boolean | null;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Rice",
    nameHi: "प्रीमियम चावल",
    description: "Basmati, Jasmine, and traditional varieties processed to perfection.",
    descriptionHi: "बासमती, चमेली और पारंपरिक किस्में पूर्णता के साथ प्रसंस्कृत।",
    category: "Rice",
    categoryHi: "चावल",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    badge: "Premium Grade",
    badgeHi: "प्रीमियम ग्रेड",
    featured: true,
  },
  {
    id: 2,
    name: "Wheat & Flour",
    nameHi: "गेहूं और आटा",
    description: "Whole wheat flour and specialty flours milled fresh daily.",
    descriptionHi: "साबुत गेहूं का आटा और विशेषता आटा दैनिक रूप से ताजा पिसा हुआ।",
    category: "Wheat",
    categoryHi: "गेहूं",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    badge: "Fresh Milled",
    badgeHi: "ताजा पिसा हुआ",
    featured: true,
  },
  {
    id: 3,
    name: "Pulses & Lentils",
    nameHi: "दालें और मसूर",
    description: "Complete range of dal varieties, cleaned and sorted meticulously.",
    descriptionHi: "दाल की पूरी श्रृंखला, सावधानीपूर्वक साफ और छांटी गई।",
    category: "Pulses",
    categoryHi: "दाल",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    badge: "Hand Sorted",
    badgeHi: "हाथ से छांटा गया",
    featured: false,
  },
  {
    id: 4,
    name: "Specialty Grains",
    nameHi: "विशेष अनाज",
    description: "Millets, quinoa, and ancient grains for health-conscious families.",
    descriptionHi: "स्वास्थ्य सचेत परिवारों के लिए बाजरा, क्विनोआ और प्राचीन अनाज।",
    category: "Specialty",
    categoryHi: "विशेषता",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    badge: "Organic",
    badgeHi: "जैविक",
    featured: true,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sustainable Farming: The Future of Agriculture",
    titleHi: "स्थायी खेती: कृषि का भविष्य",
    excerpt: "Exploring how modern sustainable practices are revolutionizing Indian agriculture and benefiting both farmers and consumers.",
    excerptHi: "आधुनिक स्थायी प्रथाओं से भारतीय कृषि में क्रांति कैसे आ रही है और किसानों और उपभोक्ताओं दोनों को लाभ हो रहा है।",
    content: "Sustainable farming represents the future of agriculture in India. By adopting eco-friendly practices, we ensure food security while protecting our environment. Our farmers are embracing organic methods, water conservation, and soil health management to create a sustainable food system that benefits everyone.",
    contentHi: "स्थायी खेती भारत में कृषि का भविष्य है। पर्यावरण-अनुकूल प्रथाओं को अपनाकर, हम अपने पर्यावरण की रक्षा करते हुए खाद्य सुरक्षा सुनिश्चित करते हैं। हमारे किसान जैविक विधियों, जल संरक्षण और मिट्टी के स्वास्थ्य प्रबंधन को अपना रहे हैं।",
    category: "Sustainability",
    categoryHi: "स्थिरता",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-03-15"),
    featured: true,
  },
  {
    id: 2,
    title: "The Nutritional Power of Whole Grains",
    titleHi: "साबुत अनाज की पोषण शक्ति",
    excerpt: "Understanding why whole grains are essential for a healthy diet and how our processing methods preserve their nutritional value.",
    excerptHi: "समझें कि स्वस्थ आहार के लिए साबुत अनाज क्यों आवश्यक हैं और हमारी प्रसंस्करण विधियां उनके पोषण मूल्य को कैसे संरक्षित करती हैं।",
    content: "Whole grains are nutritional powerhouses packed with fiber, vitamins, and minerals. Our gentle processing methods ensure that these vital nutrients remain intact, delivering maximum health benefits to your family. Learn about the science behind whole grain nutrition and why choosing minimally processed grains makes a difference.",
    contentHi: "साबुत अनाज फाइबर, विटामिन और खनिजों से भरे पोषण के पावरहाउस हैं। हमारी सौम्य प्रसंस्करण विधियां सुनिश्चित करती हैं कि ये महत्वपूर्ण पोषक तत्व बरकरार रहें, आपके परिवार को अधिकतम स्वास्थ्य लाभ प्रदान करते हैं।",
    category: "Nutrition",
    categoryHi: "पोषण",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-03-10"),
    featured: false,
  },
  {
    id: 3,
    title: "Empowering Farmer Communities",
    titleHi: "किसान समुदायों को सशक्त बनाना",
    excerpt: "How our direct partnership model is creating sustainable livelihoods and strengthening rural communities across India.",
    excerptHi: "हमारा प्रत्यक्ष साझेदारी मॉडल कैसे टिकाऊ आजीविका बना रहा है और भारत भर के ग्रामीण समुदायों को मजबूत कर रहा है।",
    content: "Our direct partnership model eliminates middlemen and ensures fair prices for farmers. By working directly with farming communities, we create lasting relationships that benefit everyone involved. This approach has helped over 1000 farming families improve their livelihoods while maintaining the highest quality standards.",
    contentHi: "हमारा प्रत्यक्ष साझेदारी मॉडल बिचौलियों को समाप्त करता है और किसानों के लिए उचित मूल्य सुनिश्चित करता है। कृषक समुदायों के साथ सीधे काम करके, हम स्थायी संबंध बनाते हैं जो सभी शामिल लोगों को लाभान्वित करते हैं।",
    category: "Community",
    categoryHi: "समुदाय",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-03-05"),
    featured: true,
  },
  {
    id: 4,
    title: "Ancient Grains for Modern Health",
    titleHi: "आधुनिक स्वास्थ्य के लिए प्राचीन अनाज",
    excerpt: "Discover the health benefits of traditional Indian grains like millets, amaranth, and quinoa that are making a comeback in modern nutrition.",
    excerptHi: "पारंपरिक भारतीय अनाज जैसे बाजरा, चौलाई और क्विनोआ के स्वास्थ्य लाभों को जानें जो आधुनिक पोषण में वापसी कर रहे हैं।",
    content: "Ancient grains are experiencing a renaissance in modern nutrition. These traditional crops, cultivated for thousands of years, offer superior nutritional profiles compared to modern processed grains. Rich in protein, fiber, and essential minerals, they're perfect for health-conscious families looking to improve their diet naturally.",
    contentHi: "प्राचीन अनाज आधुनिक पोषण में पुनर्जागरण का अनुभव कर रहे हैं। हजारों वर्षों से उगाई जाने वाली ये पारंपरिक फसलें आधुनिक प्रसंस्कृत अनाज की तुलना में श्रेष्ठ पोषण प्रोफाइल प्रदान करती हैं।",
    category: "Health",
    categoryHi: "स्वास्थ्य",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-02-28"),
    featured: false,
  },
  {
    id: 5,
    title: "Farm to Table: Our Quality Journey",
    titleHi: "खेत से मेज तक: हमारी गुणवत्ता यात्रा",
    excerpt: "Follow the journey of our grains from harvest to your kitchen, and learn about the rigorous quality checks that ensure excellence.",
    excerptHi: "फसल से लेकर आपकी रसोई तक हमारे अनाज की यात्रा का अनुसरण करें, और उन कठोर गुणवत्ता जांचों के बारे में जानें जो उत्कृष्टता सुनिश्चित करती हैं।",
    content: "Every grain that reaches your table has undergone a meticulous journey of quality assurance. From careful harvesting and cleaning to sorting and packaging, we maintain the highest standards at every step. Our state-of-the-art processing facilities ensure that you receive only the finest quality grains.",
    contentHi: "आपकी मेज तक पहुंचने वाले हर अनाज ने गुणवत्ता आश्वासन की एक सावधानीपूर्वक यात्रा की है। सावधानीपूर्वक कटाई और सफाई से लेकर छंटाई और पैकेजिंग तक, हम हर कदम पर उच्चतम मानकों को बनाए रखते हैं।",
    category: "Quality",
    categoryHi: "गुणवत्ता",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-02-20"),
    featured: false,
  },
  {
    id: 6,
    title: "Technology in Traditional Farming",
    titleHi: "पारंपरिक खेती में प्रौद्योगिकी",
    excerpt: "How we're combining traditional farming wisdom with modern technology to enhance productivity while preserving environmental harmony.",
    excerptHi: "हम पर्यावरणीय सामंजस्य को संरक्षित करते हुए उत्पादकता बढ़ाने के लिए पारंपरिक खेती की बुद्धि को आधुनिक तकनीक के साथ कैसे जोड़ रहे हैं।",
    content: "The fusion of traditional farming wisdom with modern technology creates the perfect balance for sustainable agriculture. Our farmers use precision farming techniques, soil health monitoring, and weather prediction systems while maintaining time-tested agricultural practices passed down through generations.",
    contentHi: "पारंपरिक कृषि ज्ञान और आधुनिक प्रौद्योगिकी का संयोजन टिकाऊ कृषि के लिए सही संतुलन बनाता है। हमारे किसान सटीक कृषि तकनीकों, मिट्टी स्वास्थ्य निगरानी और मौसम भविष्यवाणी प्रणालियों का उपयोग करते हैं।",
    category: "Technology",
    categoryHi: "प्रौद्योगिकी",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-02-15"),
    featured: true,
  },
  {
    id: 7,
    title: "Seasonal Eating: Nature's Calendar",
    titleHi: "मौसमी भोजन: प्रकृति का कैलेंडर",
    excerpt: "Understanding the importance of eating seasonal grains and how it benefits both our health and supports local farming communities.",
    excerptHi: "मौसमी अनाज खाने के महत्व को समझना और यह कैसे हमारे स्वास्थ्य और स्थानीय कृषक समुदायों दोनों को लाभान्वित करता है।",
    content: "Eating seasonally is nature's way of providing optimal nutrition throughout the year. Different seasons offer different grains that are perfectly suited to our body's needs during those times. This practice not only enhances our health but also supports local farmers and reduces environmental impact.",
    contentHi: "मौसमी भोजन पूरे वर्ष इष्टतम पोषण प्रदान करने का प्रकृति का तरीका है। विभिन्न मौसम विभिन्न अनाज प्रदान करते हैं जो उस समय हमारे शरीर की जरूरतों के लिए पूरी तरह से उपयुक्त होते हैं।",
    category: "Lifestyle",
    categoryHi: "जीवनशैली",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-02-10"),
    featured: false,
  },
  {
    id: 8,
    title: "Water Conservation in Agriculture",
    titleHi: "कृषि में जल संरक्षण",
    excerpt: "Innovative water management techniques that help farmers maximize yield while minimizing water usage for sustainable agriculture.",
    excerptHi: "नवाचार जल प्रबंधन तकनीकें जो किसानों को टिकाऊ कृषि के लिए पानी के उपयोग को कम करते हुए उपज को अधिकतम करने में मदद करती हैं।",
    content: "Water is precious, and efficient water management is crucial for sustainable farming. Our partner farmers implement drip irrigation, rainwater harvesting, and soil moisture monitoring to optimize water usage. These practices not only conserve water but also improve crop quality and yield.",
    contentHi: "पानी अमूल्य है, और टिकाऊ खेती के लिए कुशल जल प्रबंधन महत्वपूर्ण है। हमारे साझेदार किसान पानी के उपयोग को अनुकूलित करने के लिए ड्रिप सिंचाई, वर्षा जल संचयन और मिट्टी की नमी निगरानी लागू करते हैं।",
    category: "Environment",
    categoryHi: "पर्यावरण",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-02-05"),
    featured: false,
  },
  {
    id: 9,
    title: "The Economics of Fair Trade",
    titleHi: "निष्पक्ष व्यापार की अर्थव्यवस्था",
    excerpt: "How fair trade practices create a win-win situation for farmers, consumers, and the environment in the agricultural sector.",
    excerptHi: "निष्पक्ष व्यापार प्रथाएं कृषि क्षेत्र में किसानों, उपभोक्ताओं और पर्यावरण के लिए एक जीत-जीत की स्थिति कैसे बनाती हैं।",
    content: "Fair trade is more than just a business model; it's a commitment to ethical practices that benefit everyone in the supply chain. By ensuring fair prices for farmers, we create sustainable livelihoods while providing consumers with high-quality products at reasonable prices.",
    contentHi: "निष्पक्ष व्यापार केवल एक व्यावसायिक मॉडल से कहीं अधिक है; यह नैतिक प्रथाओं के लिए एक प्रतिबद्धता है जो आपूर्ति श्रृंखला में सभी को लाभान्वित करती है। किसानों के लिए उचित मूल्य सुनिश्चित करके, हम टिकाऊ आजीविका बनाते हैं।",
    category: "Economics",
    categoryHi: "अर्थशास्त्र",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-01-30"),
    featured: false,
  },
  {
    id: 10,
    title: "Future of Food Security in India",
    titleHi: "भारत में खाद्य सुरक्षा का भविष्य",
    excerpt: "Exploring strategies and innovations that will ensure food security for India's growing population while maintaining sustainability.",
    excerptHi: "उन रणनीतियों और नवाचारों की खोज करना जो स्थिरता बनाए रखते हुए भारत की बढ़ती जनसंख्या के लिए खाद्य सुरक्षा सुनिश्चित करेंगी।",
    content: "India's food security challenges require innovative solutions that balance population growth with environmental sustainability. Through improved farming techniques, better distribution systems, and reduced food waste, we can ensure that nutritious food reaches every corner of our nation.",
    contentHi: "भारत की खाद्य सुरक्षा चुनौतियों के लिए नवाचार समाधानों की आवश्यकता है जो जनसंख्या वृद्धि और पर्यावरणीय स्थिरता के बीच संतुलन बनाते हैं। बेहतर कृषि तकनीकों, बेहतर वितरण प्रणालियों और कम खाद्य अपशिष्ट के माध्यम से, हम सुनिश्चित कर सकते हैं कि पौष्टिक भोजन हमारे राष्ट्र के हर कोने तक पहुंचे।",
    category: "Future",
    categoryHi: "भविष्य",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    publishedAt: new Date("2024-01-25"),
    featured: true,
  },
];