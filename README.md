# Mohan Krushi Udyog - Agricultural Products Website

A modern, mobile-responsive website for an agricultural products company that connects farmers directly with consumers. Built with React, TypeScript, and designed for static hosting on AWS S3 and CloudFront.

## Features

- 🌱 **Bilingual Support**: Full English and Hindi translation
- 📱 **Mobile-First Design**: Responsive design optimized for all devices
- 🎨 **Luxury Design**: Pastel green color palette with modern rounded buttons
- 📊 **Analytics**: Google Analytics 4 integration for user tracking
- 🚀 **Static Hosting**: Optimized for AWS S3 and CloudFront deployment
- ⚡ **Performance**: Fast loading with optimized builds and caching
- 🛡️ **SEO Ready**: Proper meta tags and semantic HTML structure

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- AWS Account (for deployment)
- Google Analytics account (for tracking)

### Local Development

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd mohan-krushi-udyog
   npm install
   ```

2. **Set Up Google Analytics (Optional)**
   ```bash
   # Add your Google Analytics Measurement ID
   export VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5000`

### Building for Production

```bash
# Build static files for deployment
npm run build

# Preview the production build
npm run preview
```

## Google Analytics Configuration

### 1. Create Google Analytics Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property for your website
3. Set up a web data stream
4. Copy your Measurement ID (starts with "G-")

### 2. Add Measurement ID
Choose one of these methods:

**Option A: Environment Variable**
```bash
export VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
npm run build
```

**Option B: Replit Secrets (if using Replit)**
1. Go to Secrets tab in Replit
2. Add key: `VITE_GA_MEASUREMENT_ID`
3. Add value: Your measurement ID
4. Restart the development server

**Option C: Local .env file (development only)**
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Verify Analytics
- Check Google Analytics Realtime reports
- Use browser developer tools to verify gtag requests
- Full data appears within 24-48 hours

## Deployment to AWS

### Quick Deployment
1. **Configure the deployment script**
   ```bash
   # Edit package-scripts/deploy.sh
   S3_BUCKET="your-bucket-name"
   CLOUDFRONT_DISTRIBUTION_ID="your-distribution-id"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

### Manual Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step instructions including:
- S3 bucket setup
- CloudFront configuration
- Domain setup
- SSL certificates
- Performance optimization

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── data/           # Static data files
│   │   ├── lib/            # Utility functions and configurations
│   │   ├── hooks/          # Custom React hooks
│   │   └── locales/        # Translation files
├── package-scripts/        # Deployment and utility scripts
├── DEPLOYMENT.md          # Detailed deployment guide
└── README.md              # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to AWS (requires configuration)

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: Wouter (lightweight React router)
- **UI Components**: shadcn/ui with Radix UI primitives
- **Internationalization**: react-i18next
- **Analytics**: Google Analytics 4
- **Build Tool**: Vite
- **Hosting**: AWS S3 + CloudFront

## Content Management

This website uses static data files for content management:
- Products: `client/src/data/static-data.ts`
- Blog posts: `client/src/data/static-data.ts`
- Testimonials: `client/src/data/static-data.ts`
- Translations: `client/src/locales/`

### Adding or Modifying Blog Posts

#### 1. Adding a New Blog Post

The blog system uses a structured content format with different content block types for better formatting and rendering. To add a new blog post, edit `client/src/data/static-data.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: 2, // Use the next available ID (increment from the last post)
  title: "Your Blog Title in English",
  titleHi: "आपके ब्लॉग का हिंदी शीर्षक", // Hindi translation of title
  excerpt: "Brief summary of your blog post in English (2-3 sentences max)",
  excerptHi: "आपके ब्लॉग पोस्ट का हिंदी में संक्षिप्त विवरण", // Hindi translation of excerpt
  
  // STRUCTURED CONTENT - Use these content block types:
  content: [
    {
      type: 'paragraph',
      content: 'Your introductory paragraph text goes here. This is for regular content blocks.'
    },
    {
      type: 'heading', 
      content: 'Your Main Section Heading' // Will render as large heading (h2)
    },
    {
      type: 'paragraph',
      content: 'Another paragraph with detailed information about your topic.'
    },
    {
      type: 'subheading',
      content: 'Your Subsection Heading' // Will render as medium heading (h3)
    },
    {
      type: 'list',
      content: 'Optional intro text for the list:', // Optional description before list
      items: [
        'First list item',
        'Second list item',
        'Item with Bold Text: Use colon to make text before colon bold',
        'Another item'
      ]
    },
    {
      type: 'paragraph',
      content: 'Concluding paragraph or additional content.'
    }
  ],
  
  // Hindi content follows the same structure
  contentHi: [
    {
      type: 'paragraph',
      content: 'आपका परिचयात्मक पैराग्राफ यहाँ जाता है।'
    },
    {
      type: 'heading',
      content: 'आपका मुख्य अनुभाग शीर्षक'
    }
    // ... same structure as English content but with Hindi translations
  ],
  
  category: "Nutrition", // e.g., "Nutrition", "Agriculture", "Health", "Technology"
  categoryHi: "पोषण", // Hindi translation of category
  image: "https://your-image-url.com/image.jpg", // Featured image URL
  publishedAt: new Date("2024-07-26"), // Publication date
  featured: true, // true for featured posts, false otherwise
}
```

#### 2. Content Block Types

The blog system supports four types of content blocks:

- **`paragraph`**: For regular text content
- **`heading`**: For main section headings (renders as large h2 headings)
- **`subheading`**: For subsection headings (renders as medium h3 headings)
- **`list`**: For bulleted lists with optional intro text and automatic bold formatting for items with colons

#### 3. Quick Blog Addition Prompt

For easy blog addition, use this prompt with GitHub Copilot or any AI assistant:

```
I want to add a new blog post. Here's the content: [PASTE_YOUR_CONTENT_HERE]

Please create a suitable title, format the content using the blog structure with 
headings, paragraphs, and lists as appropriate. Add both English and Hindi versions 
(you can add placeholder text for Hindi that I'll translate later). Use the next 
available ID number and set appropriate category and publication date.
```

#### 4. Content Formatting Guidelines

**Paragraphs**: Each paragraph should be a separate content block
**Headings**: Use `heading` type for main sections, `subheading` for subsections
**Lists**: Use when you have multiple related points or items
**Bold Text in Lists**: Text before a colon (`:`) in list items will automatically be bold

#### 5. Adding Images to Blog Posts

**Option A: Using External Image URLs (Recommended)**
- Use high-quality images from Unsplash, Pexels, or your own hosting
- Ensure images are at least 800x500px for best quality
- Use HTTPS URLs for security
- Example: `"https://images.unsplash.com/photo-1234567890"`

**Option B: Using Your Own Hosted Images**
- Upload images to your image hosting service
- Use the direct URL in the `image` field

#### 6. Blog Categories

Current available categories:
- **Agriculture**: कृषि
- **Nutrition**: पोषण  
- **Health**: स्वास्थ्य
- **Technology**: प्रौद्योगिकी
- **Sustainability**: स्थिरता
- **Community**: समुदाय
- **Economics**: अर्थशास्त्र

To add a new category, simply use it in your blog post and add the translation to both `client/src/locales/en.json` and `client/src/locales/hi.json`.

#### 7. Best Practices for Blog Content

**Content Structure**: Use headings to break up long content into digestible sections
**Paragraph Length**: Keep paragraphs focused and not too long (3-5 sentences)
**Lists**: Use lists for enumerating benefits, steps, or multiple related points
**Images**: Use relevant, high-quality images that support your content
**Categories**: Choose existing categories or create relevant new ones
**Publishing Dates**: Use realistic dates for better organization
**Hindi Translations**: Always provide Hindi translations for accessibility

#### 8. Example Blog Structure

```typescript
content: [
  {
    type: 'paragraph',
    content: 'Introduction paragraph explaining the topic...'
  },
  {
    type: 'heading',
    content: 'Main Benefits'
  },
  {
    type: 'paragraph',
    content: 'Explanation of the benefits...'
  },
  {
    type: 'list',
    content: 'Key advantages include:',
    items: [
      'First advantage: Detailed explanation',
      'Second advantage: More details',
      'Third advantage: Additional info'
    ]
  },
  {
    type: 'heading',
    content: 'How to Implement'
  },
  {
    type: 'paragraph',
    content: 'Step-by-step explanation...'
  },
  {
    type: 'subheading',
    content: 'Important Considerations'
  },
  {
    type: 'paragraph',
    content: 'Additional important information...'
  },
  {
    type: 'paragraph',
    content: 'Concluding thoughts and call to action...'
  }
]
```

#### 9. After Adding Content

1. **Test Locally**: Run `npm run dev` to test your changes
2. **Build**: Run `npm run build` to ensure no errors
3. **Deploy**: Use `npm run deploy` to update your live site

#### 10. Content Ideas for Agricultural Blog

- Seasonal farming tips and crop management
- Sustainable farming practices and techniques
- Nutrition facts about different pulses and grains
- Market insights and price trends
- Weather impact on agriculture
- Success stories from farmers
- Food safety and storage guidelines
- Government schemes and support for farmers
- Modern agricultural technologies
- Health benefits of organic farming

#### 11. SEO Optimization Tips

- Use descriptive titles with relevant keywords
- Write compelling excerpts that summarize the post effectively  
- Choose appropriate categories for better organization
- Use high-quality, relevant featured images
- Structure content with proper headings for better readability
- Publish content regularly for better engagement
- Include both English and Hindi versions for wider reach

To update content, edit these files and redeploy.

## Performance Features

- **Optimized Builds**: Code splitting and tree shaking
- **Image Optimization**: Responsive images with proper loading
- **Caching**: Aggressive caching for static assets
- **Compression**: Gzip compression via CloudFront
- **CDN**: Global content delivery via CloudFront

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Copyright © 2024 Mohan Krushi Udyog. All rights reserved.

## Support

For deployment help, see [DEPLOYMENT.md](./DEPLOYMENT.md).
For technical issues, check the troubleshooting section in the deployment guide.

---

**Made in India 🇮🇳** - Supporting farmers, delighting families.