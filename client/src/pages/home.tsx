import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Award, Leaf, Sprout, ServerCog, Microscope, Truck, Star, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'wouter';
import { products, blogPosts, testimonials, type Testimonial } from '@/data/static-data';

export default function Home() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  const featuredProducts = products.filter(product => product.featured);
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
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-forest-green px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
                  <Handshake className="text-2xl text-sage-green h-8 w-8" />
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
                  <Award className="text-2xl text-lime-green h-8 w-8" />
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
                  <Leaf className="text-2xl text-forest-green h-8 w-8" />
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
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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

      {/* Featured Products */}
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
              <Card key={product.id} className="bg-gradient-to-br from-white to-mint-green/10 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 hover:scale-105">
                <CardContent className="p-6">
                  <img 
                    src={product.image || ''} 
                    alt={isHindi ? product.nameHi || product.name : product.name} 
                    className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
                  />
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sage-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              {t('process.title')}
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sprout className="text-3xl text-lime-green h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">1. {t('process.sourcing.title')}</h3>
              <p className="text-gray-200">{t('process.sourcing.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ServerCog className="text-3xl text-lime-green h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">2. {t('process.processing.title')}</h3>
              <p className="text-gray-200">{t('process.processing.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Microscope className="text-3xl text-lime-green h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3. {t('process.testing.title')}</h3>
              <p className="text-gray-200">{t('process.testing.description')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Truck className="text-3xl text-lime-green h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">4. {t('process.delivery.title')}</h3>
              <p className="text-gray-200">{t('process.delivery.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBlogPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="bg-white hover:shadow-xl transition-all duration-500 overflow-hidden rounded-2xl border-0 hover:scale-105">
                <CardContent className="p-0">
                  <img 
                    src={post.image || ''} 
                    alt={isHindi ? post.titleHi || post.title : post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{isHindi ? post.categoryHi || post.category : post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-forest-green mb-3 hover:text-sage-green transition-colors">
                      {isHindi ? post.titleHi || post.title : post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {isHindi ? post.excerptHi || post.excerpt : post.excerpt}
                    </p>
                    <Link href="/blog">
                      <a className="text-lime-green font-medium hover:text-forest-green transition-colors">
                        {t('blog.read_more')} <ArrowRight className="inline ml-2 h-4 w-4" />
                      </a>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-forest-green text-white hover:bg-forest-green/90 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {t('blog.view_all')}
              </Button>
            </Link>
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
    </div>
  );
}
