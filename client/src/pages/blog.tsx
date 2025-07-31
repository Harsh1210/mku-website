import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/data/static-data';
import { Link } from 'wouter';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-mint-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-forest-green/20 transition-all duration-300 cursor-pointer">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={isHindi && post.titleHi ? post.titleHi : post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-forest-green/10 text-forest-green border-forest-green/20">
                        <Tag className="h-3 w-3 mr-1" />
                        {isHindi && post.categoryHi ? post.categoryHi : post.category}
                      </Badge>
                      <ArrowRight className="h-4 w-4 text-forest-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3 group-hover:text-forest-green transition-colors">
                      {isHindi && post.titleHi ? post.titleHi : post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {isHindi && post.excerptHi ? post.excerptHi : post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.publishedAt.toLocaleDateString(isHindi ? 'hi-IN' : 'en-US')}</span>
                      </div>
                      <span className="text-forest-green font-medium group-hover:underline">
                        {t('blog.read_more')}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}