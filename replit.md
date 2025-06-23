# Mohan Krushi Udyog - Agricultural Products Platform

## Overview
A full-stack web application for an agricultural products company that connects farmers directly with consumers. The platform features multilingual support (English/Hindi), a content management system for products and blog posts, and a contact system for customer inquiries.

## System Architecture

### Frontend Architecture (Static)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library and custom pastel green color palette
- **Data**: Static data files (no backend dependencies)
- **Internationalization**: React i18next for English/Hindi language support
- **Analytics**: Google Analytics 4 integration for user tracking
- **Build Tool**: Vite for static site generation
- **Design**: Mobile-first responsive design with modern rounded buttons and luxury feel

### Deployment Architecture
- **Static Hosting**: Designed for S3 bucket with CloudFront distribution
- **No Backend**: Fully client-side application with static data
- **SEO Ready**: Proper meta tags and semantic HTML structure
- **Build Process**: Vite static build with optimized chunks and caching
- **Deployment**: Automated deployment script for AWS S3 and CloudFront

### Key Components

#### Database Schema
The application uses three main tables:
1. **blog_posts** - Content management for blog articles with multilingual support
2. **products** - Product catalog with categories and featured items
3. **contact_submissions** - Customer inquiry management

#### API Structure
RESTful API endpoints organized by resource:
- `/api/blog-posts` - Blog post management and retrieval
- `/api/products` - Product catalog operations
- `/api/contact` - Contact form submission handling

#### Multilingual Support
- Full internationalization with JSON-based translations
- Dynamic language switching between English and Hindi
- Localized content stored in database with fallback support

## Data Flow

### Client-Server Communication
1. React frontend makes API requests through TanStack Query
2. Express server processes requests and interacts with PostgreSQL
3. Drizzle ORM handles database operations with type safety
4. Responses are cached client-side for optimal performance

### Content Management
1. Seeded data provides initial content for products and blog posts
2. Both English and Hindi versions stored for all content
3. Featured items flagged for homepage display
4. Contact submissions stored with timestamps for tracking

## External Dependencies

### Core Libraries
- **@neondatabase/serverless** - Serverless PostgreSQL connection
- **drizzle-orm** - Type-safe database operations
- **@tanstack/react-query** - Server state management
- **react-i18next** - Internationalization
- **@radix-ui** - Accessible UI components
- **tailwindcss** - Utility-first CSS framework

### Development Tools
- **tsx** - TypeScript execution for development
- **esbuild** - Fast bundling for production
- **@replit/vite-plugin-runtime-error-modal** - Development error handling

## Deployment Strategy

### Production Build
- Vite builds the React frontend to static assets
- esbuild bundles the Express server for Node.js execution
- Single deployment artifact contains both frontend and backend

### Environment Configuration
- Database connection via DATABASE_URL environment variable
- Production/development modes with appropriate optimizations
- Static file serving for built frontend assets

### Hosting Platform
- Configured for Replit deployment with autoscale
- PostgreSQL module enabled for database support
- Port 5000 exposed for HTTP traffic

## Changelog
- June 23, 2025. Initial setup
- June 23, 2025. Updated to static architecture with pastel green design, mobile-friendly layout, Google Analytics integration, and customer testimonials
- June 23, 2025. Added comprehensive AWS S3 and CloudFront deployment guide with automated deployment scripts
- June 23, 2025. Enhanced blog section with 10 comprehensive articles covering various topics (sustainability, nutrition, technology, etc.) and added category filtering functionality

## User Preferences
Preferred communication style: Simple, everyday language.

## Image Management
Current images are sourced from external Unsplash URLs. Options for migration to local hosting have been documented in IMAGE_MANAGEMENT.md for better reliability and performance.