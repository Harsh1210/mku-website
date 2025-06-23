import { blogPosts, products, contactSubmissions, type BlogPost, type Product, type ContactSubmission, type InsertBlogPost, type InsertProduct, type InsertContactSubmission } from "@shared/schema";

export interface IStorage {
  getBlogPosts(): Promise<BlogPost[]>;
  getFeaturedBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<number, BlogPost>;
  private products: Map<number, Product>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private currentBlogPostId: number;
  private currentProductId: number;
  private currentContactId: number;

  constructor() {
    this.blogPosts = new Map();
    this.products = new Map();
    this.contactSubmissions = new Map();
    this.currentBlogPostId = 1;
    this.currentProductId = 1;
    this.currentContactId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed blog posts
    const blogPostsData: BlogPost[] = [
      {
        id: 1,
        title: "Sustainable Farming: The Future of Agriculture",
        titleHi: "स्थायी खेती: कृषि का भविष्य",
        excerpt: "Exploring how modern sustainable practices are revolutionizing Indian agriculture and benefiting both farmers and consumers.",
        excerptHi: "आधुनिक स्थायी प्रथाओं से भारतीय कृषि में क्रांति कैसे आ रही है और किसानों और उपभोक्ताओं दोनों को लाभ हो रहा है।",
        content: "Full article content about sustainable farming practices...",
        contentHi: "स्थायी खेती की प्रथाओं के बारे में पूरा लेख...",
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
        content: "Full article content about nutritional benefits...",
        contentHi: "पोषण लाभों के बारे में पूरा लेख...",
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
        content: "Full article content about farmer empowerment...",
        contentHi: "किसान सशक्तिकरण के बारे में पूरा लेख...",
        category: "Community",
        categoryHi: "समुदाय",
        image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        publishedAt: new Date("2024-03-05"),
        featured: true,
      },
    ];

    blogPostsData.forEach(post => {
      this.blogPosts.set(post.id, post);
      this.currentBlogPostId = Math.max(this.currentBlogPostId, post.id + 1);
    });

    // Seed products
    const productsData: Product[] = [
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

    productsData.forEach(product => {
      this.products.set(product.id, product);
      this.currentProductId = Math.max(this.currentProductId, product.id + 1);
    });
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.featured)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const post: BlogPost = {
      ...insertPost,
      id,
      publishedAt: new Date(),
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = {
      ...insertProduct,
      id,
    };
    this.products.set(id, product);
    return product;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
