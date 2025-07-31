import { useTranslation } from 'react-i18next';
import { useRoute } from 'wouter';
import { ArrowLeft, Calendar, Tag, User, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/static-data';
import { Link } from 'wouter';
import BlogContentRenderer from '@/components/BlogContentRenderer';
import { useState } from 'react';

export default function BlogPost() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';
  const [match, params] = useRoute('/blog/:id');
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  if (!match) return null;
  
  const postId = parseInt(params.id);
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('blog.not_found', 'Blog post not found')}
            </h1>
            <Link href="/blog">
              <Button className="bg-forest-green hover:bg-forest-green/90 text-white rounded-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('blog.back_to_blog', 'Back to Blog')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const title = isHindi && post.titleHi ? post.titleHi : post.title;
  const content = isHindi && post.contentHi ? post.contentHi : post.content;
  const category = isHindi && post.categoryHi ? post.categoryHi : post.category;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-sage-50 to-mint-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-6 text-forest-green hover:text-forest-green/80">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('blog.back_to_blog', 'Back to Blog')}
            </Button>
          </Link>
          
          <div className="mb-6">
            <Badge className="bg-forest-green/10 text-forest-green border-forest-green/20 mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.publishedAt.toLocaleDateString(isHindi ? 'hi-IN' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Mohan Krushi Udyog</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Media Carousel */}
      {(post.image || post.video) && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
            {/* Media Content */}
            <div className="relative">
              {currentMediaIndex === 0 && post.image && (
                <img
                  src={post.image}
                  alt={title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              )}
              {currentMediaIndex === 1 && post.video && (
                <div className="relative w-full h-64 md:h-96">
                  <iframe
                    src={post.video}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${title} - Video`}
                  />
                </div>
              )}
              
              {/* Navigation Arrows - Only show if both image and video exist */}
              {post.image && post.video && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 rounded-full shadow-lg"
                    onClick={() => setCurrentMediaIndex(currentMediaIndex === 0 ? 1 : 0)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-800 rounded-full shadow-lg"
                    onClick={() => setCurrentMediaIndex(currentMediaIndex === 0 ? 1 : 0)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
              
              {/* Media Type Indicator */}
              {post.image && post.video && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 rounded-full px-3 py-1">
                  <button
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentMediaIndex === 0 ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentMediaIndex(0)}
                  />
                  <button
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentMediaIndex === 1 ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentMediaIndex(1)}
                  />
                </div>
              )}
              
              {/* Video Play Icon Overlay (only for image when video exists) */}
              {currentMediaIndex === 0 && post.video && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/50 hover:bg-black/60 text-white rounded-full p-4 transform hover:scale-110 transition-all"
                    onClick={() => setCurrentMediaIndex(1)}
                  >
                    <Play className="h-8 w-8 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <BlogContentRenderer content={content} />        {/* Author Bio */}
        <div className="mt-16 p-8 bg-gradient-to-br from-sage-50 to-mint-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mohan Krushi Udyog
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {isHindi 
                  ? "हम भारतीय किसानों को उपभोक्ताओं से सीधे जोड़ने वाली एक कृषि उत्पाद कंपनी हैं। हमारा मिशन स्थायी कृषि को बढ़ावा देना और सभी के लिए गुणवत्तापूर्ण भोजन उपलब्ध कराना है।"
                  : "We are an agricultural products company connecting Indian farmers directly with consumers. Our mission is to promote sustainable farming and provide quality food for everyone."
                }
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            {t('blog.related_posts', 'Related Articles')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && (p.category === post.category || p.featured))
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                    {relatedPost.image && (
                      <img
                        src={relatedPost.image}
                        alt={isHindi && relatedPost.titleHi ? relatedPost.titleHi : relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="p-6">
                      <Badge className="bg-forest-green/10 text-forest-green border-forest-green/20 mb-3">
                        {isHindi && relatedPost.categoryHi ? relatedPost.categoryHi : relatedPost.category}
                      </Badge>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-forest-green transition-colors">
                        {isHindi && relatedPost.titleHi ? relatedPost.titleHi : relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {isHindi && relatedPost.excerptHi ? relatedPost.excerptHi : relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}