import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Handshake, Award, Leaf, Heart, Home, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest-green mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.paragraph1')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('about.paragraph2')}
              </p>
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-lime-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-lime-green h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">
                    {t('about.supporting_farmers.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.supporting_farmers.description')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Home className="text-sage-green h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-2">
                    {t('about.quality_families.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('about.quality_families.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://sadabahaar-167866605.imgix.net/about-mku.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Indian farmers working in grain fields" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-forest-green">1000+</div>
                  <div className="text-sm text-gray-600">{t('about.farmer_partners')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-forest-green mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-sage-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="text-sage-green h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-forest-green mb-4">
                  {t('value_prop.direct_farmers.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('value_prop.direct_farmers.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-lime-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-lime-green h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-forest-green mb-4">
                  {t('value_prop.premium_processing.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('value_prop.premium_processing.description')}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-forest-green bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="text-forest-green h-8 w-8" />
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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-sage-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-green mb-2">1000+</div>
              <div className="text-white">Farmer Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-green mb-2">50+</div>
              <div className="text-white">Product Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-green mb-2">100+</div>
              <div className="text-white">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-lime-green mb-2">10000+</div>
              <div className="text-white">Happy Families</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
