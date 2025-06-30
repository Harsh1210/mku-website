import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Award, Leaf, Sprout, ServerCog, Microscope, Truck, Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'wouter';
import { products, blogPosts, testimonials, type Testimonial } from '@/data/static-data';
import React, { useState } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const featuredBlogPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 76, 58, 0.7), rgba(15, 76, 58, 0.7)), url('https://sadabahaar-167866605.imgix.net/garbanzo_beans.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
              <span className="block text-lime-green">{t('hero.subtitle')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-lime-green text-forest-green hover:bg-lime-green/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {t('hero.cta_primary')}
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" className="bg-white text-forest-green border-2 border-white hover:bg-lime-green hover:text-white hover:border-lime-green px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {t('hero.cta_secondary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Made in India Badge */}
        <div className="absolute bottom-8 right-8 bg-white bg-opacity-90 px-6 py-3 rounded-full flex items-center space-x-3">
          <Star className="text-lime-green h-5 w-5" />
          <span className="font-semibold text-forest-green">{t('hero.made_in_india')}</span>
        </div>
      </section>

      {/* Featured Products (moved up) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-4">
              {t('products.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} isHindi={isHindi} t={t} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <Button className="bg-forest-green text-white hover:bg-forest-green/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {t('products.view_catalog')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-4">
              {t('value_prop.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('value_prop.subtitle')}
            </p>
          </div>
          
<div className="grid md:grid-cols-3 gap-8">
  <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 bg-gradient-to-br from-white to-mint-green/20 hover:scale-105">
    <CardContent className="pt-6">
      <div className="w-16 h-16 bg-sage-green bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
        {/* Corrected: Changed text-sage-green to text-forest-green for contrast */}
        <Handshake className="text-2xl text-forest-green h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-forest-green mb-4">
        {t('value_prop.direct_farmers.title')}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {t('value_prop.direct_farmers.description')}
      </p>
    </CardContent>
  </Card>
  
  <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 bg-gradient-to-br from-white to-lime-green/20 hover:scale-105">
    <CardContent className="pt-6">
      <div className="w-16 h-16 bg-lime-green bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
        {/* Corrected: Changed text-lime-green to text-forest-green for contrast */}
        <Award className="text-2xl text-forest-green h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-forest-green mb-4">
        {t('value_prop.premium_processing.title')}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {t('value_prop.premium_processing.description')}
      </p>
    </CardContent>
  </Card>
  
  <Card className="text-center p-8 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 bg-gradient-to-br from-white to-eucalyptus-green/20 hover:scale-105">
    <CardContent className="pt-6">
      <div className="w-16 h-16 bg-forest-green bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
        {/* Corrected: Changed text-forest-green to text-white for contrast */}
        <Leaf className="text-2xl text-white h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-forest-green mb-4">
        {t('value_prop.sustainable_practices.title')}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {t('value_prop.sustainable_practices.description')}
      </p>
    </CardContent>
  </Card>
</div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <Link href="/about">
                <Button className="bg-forest-green text-white hover:bg-forest-green/90 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {t('hero.cta_secondary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://sadabahaar-167866605.imgix.net/about-mku.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Indian farmers working in grain fields" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-mint-green/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-green">1000+</div>
                  <div className="text-sm text-gray-600">{t('about.farmer_partners')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from farmers and families who trust our quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-white to-mint-green/10 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 hover:scale-105 relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-mint-green opacity-30">
                    <Quote className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-forest-green">
                      {isHindi ? testimonial.nameHi : testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {isHindi ? testimonial.roleHi : testimonial.role}
                    </p>
                  </div>
                  
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-lime-green fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{isHindi ? testimonial.contentHi : testimonial.content}"
                  </p>
                  
                  <p className="text-xs text-gray-500">
                    {isHindi ? testimonial.locationHi : testimonial.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {/* ...existing code... */}
    </div>
  );
}

function ProductCard({ product, isHindi, t }: any) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const media = [...(product.images || []), ...(product.video ? [product.video] : [])];
  const isVideo = (url: string) => url.endsWith('.mp4') || url.includes('youtube.com') || url.includes('vimeo.com');
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Card className="bg-gradient-to-br from-white to-mint-green/10 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 hover:scale-105 group relative">
        <CardContent className="p-6">
          <div className="relative mb-4 cursor-pointer" onClick={() => setModalOpen(true)}>
            {media.length > 1 && (
              <>
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={handlePrev}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-1 shadow hover:bg-opacity-100 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={handleNext}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </>
            )}
            {isVideo(media[mediaIndex]) ? (
              <video
                src={media[mediaIndex]}
                controls
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                onClick={e => { e.stopPropagation(); setModalOpen(true); }}
              />
            ) : (
              <img
                src={media[mediaIndex]}
                alt={isHindi ? product.nameHi || product.name : product.name}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
              />
            )}
          </div>
          <h3 className="text-xl font-semibold text-forest-green mb-2">
            {isHindi ? product.nameHi || product.name : product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {isHindi ? product.descriptionHi || product.description : product.description}
          </p>
          <Badge variant="secondary" className="text-lime-green bg-lime-green/20 rounded-full">
            <Star className="h-3 w-3 mr-1" />
            {isHindi ? product.badgeHi || product.badge : product.badge}
          </Badge>
        </CardContent>
      </Card>
      {/* Modal for fullscreen image/video */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalOpen(false)}>
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setModalOpen(false)}>&times;</button>
            <div className="w-full flex items-center justify-center relative">
              {media.length > 1 && (
                <>
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
                    onClick={handlePrev}
                    aria-label="Previous"
                  >
                    &#8592;
                  </button>
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow hover:bg-opacity-100 z-10"
                    onClick={handleNext}
                    aria-label="Next"
                  >
                    &#8594;
                  </button>
                </>
              )}
              {isVideo(media[mediaIndex]) ? (
                <video
                  src={media[mediaIndex]}
                  controls
                  autoPlay
                  className="max-h-[80vh] rounded-xl shadow-lg"
                />
              ) : (
                <img
                  src={media[mediaIndex]}
                  alt={isHindi ? product.nameHi || product.name : product.name}
                  className="max-h-[80vh] rounded-xl shadow-lg"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
