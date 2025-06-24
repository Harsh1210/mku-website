import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { products } from '@/data/static-data';

export default function Products() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

  // Using static data for production

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest-green mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gradient-to-br from-white to-mint-green/10 hover:shadow-xl transition-all duration-500 rounded-2xl border-0 hover:scale-105">
                <CardContent className="p-4 lg:p-6">
                  <img 
                    src={product.image || ''} 
                    alt={isHindi ? product.nameHi || product.name : product.name} 
                    className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4 shadow-md"
                  />
                  <h3 className="text-lg lg:text-xl font-semibold text-forest-green mb-2">
                    {isHindi ? product.nameHi || product.name : product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {isHindi ? product.descriptionHi || product.description : product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={`${product.featured ? "text-lime-green bg-lime-green/20" : "text-sage-green bg-sage-green/20"} rounded-full`}>
                      <Star className="h-3 w-3 mr-1" />
                      {isHindi ? product.badgeHi || product.badge : product.badge}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {isHindi ? product.categoryHi || product.category : product.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    {/* Corrected: Text color changed */}
    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-6">
      Quality Assurance Promise
    </h2>
    {/* Corrected: Text color changed */}
    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
      Every product goes through rigorous quality checks to ensure you receive only the finest grains
    </p>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="text-center">
        <div className="text-3xl mb-4">🌾</div>
        {/* Corrected: Text color changed */}
        <h3 className="text-xl font-semibold text-forest-green mb-2">Premium Sourcing</h3>
        {/* Corrected: Text color changed */}
        <p className="text-gray-600">Directly sourced from verified farms</p>
      </div>
      <div className="text-center">
        <div className="text-3xl mb-4">🔬</div>
        {/* Corrected: Text color changed */}
        <h3 className="text-xl font-semibold text-forest-green mb-2">Lab Tested</h3>
        {/* Corrected: Text color changed */}
        <p className="text-gray-600">Rigorous quality and purity testing</p>
      </div>
      <div className="text-center">
        <div className="text-3xl mb-4">📦</div>
        {/* Corrected: Text color changed */}
        <h3 className="text-xl font-semibold text-forest-green mb-2">Fresh Packaging</h3>
        {/* Corrected: Text color changed */}
        <p className="text-gray-600">Sealed for maximum freshness</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
