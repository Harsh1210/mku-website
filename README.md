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

To add a new blog post, edit `client/src/data/static-data.ts` and add a new entry to the `blogPosts` array:

```typescript
{
  id: 11, // Use the next available ID
  title: "Your Blog Title",
  titleHi: "आपका ब्लॉग शीर्षक", // Hindi translation
  excerpt: "Brief description of your blog post...",
  excerptHi: "आपके ब्लॉग पोस्ट का संक्षिप्त विवरण...",
  content: "Full content of your blog post. You can include multiple paragraphs by separating them with double line breaks.\n\nThis will be displayed as separate paragraphs on the blog post page.",
  contentHi: "आपके ब्लॉग पोस्ट की पूरी सामग्री...",
  category: "Technology", // Choose from existing categories or add new ones
  categoryHi: "प्रौद्योगिकी",
  image: "https://images.unsplash.com/photo-example", // Image URL
  publishedAt: new Date("2024-06-23"), // Publication date
  featured: false, // Set to true for featured posts
}
```

#### 2. Adding Images to Blog Posts

**Option A: Using External Image URLs (Recommended)**
- Use high-quality images from Unsplash, Pexels, or your own hosting
- Ensure images are at least 800x500px for best quality
- Use HTTPS URLs for security

**Option B: Using Local Images**
1. Create an `assets` folder: `client/src/assets/images/`
2. Add your images to this folder
3. Import and reference them:
```typescript
// At the top of static-data.ts
import blogImage1 from '@/assets/images/blog-image-1.jpg';

// In your blog post data
image: blogImage1,
```

#### 3. Adding Videos to Blog Posts

Videos can be embedded in the blog content using HTML:

```typescript
content: `Your blog introduction paragraph.

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    allowfullscreen>
  </iframe>
</div>

Continue with your blog content after the video.`,
```

#### 4. Blog Categories

Current available categories:
- Sustainability, Nutrition, Community, Health, Quality
- Technology, Lifestyle, Environment, Economics, Future

To add a new category:
1. Add the category to your blog post data
2. Update translations in `client/src/locales/en.json` and `client/src/locales/hi.json`:
```json
"blog": {
  "categories": {
    "your_new_category": "Your New Category"
  }
}
```
3. Update the categories array in `client/src/pages/blog.tsx`

#### 5. Best Practices for Blog Content

**Content Length**: Aim for 200-500 words for meaningful content
**Paragraphs**: Separate paragraphs with `\n\n` in the content string
**Images**: Use 16:9 aspect ratio images (800x450px recommended)
**Categories**: Keep categories consistent and relevant
**Publishing Dates**: Use realistic dates for better SEO
**Hindi Translations**: Always provide Hindi translations for better accessibility

#### 6. After Adding Content

1. **Test Locally**: Run `npm run dev` to test your changes
2. **Build**: Run `npm run build` to ensure no errors
3. **Deploy**: Use `npm run deploy` to update your live site

#### 7. Content Ideas for Agricultural Blog

- Seasonal farming tips
- Crop rotation techniques
- Sustainable farming practices
- Market price updates
- Weather impact on crops
- New agricultural technologies
- Farmer success stories
- Nutrition facts about grains
- Food safety and storage tips
- Government schemes for farmers

#### 8. SEO Optimization

- Use descriptive titles with relevant keywords
- Write compelling excerpts that summarize the post
- Include relevant categories
- Use high-quality, relevant images
- Publish content regularly for better engagement

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