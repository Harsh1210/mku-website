import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-forest-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-playfair font-bold">Mohan Krushi Udyog</span>
              <p className="text-gray-300 mt-4 max-w-md">
                {t('footer.description')}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-gray-300 hover:text-lime-green transition-colors">
                    {t('nav.about')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-gray-300 hover:text-lime-green transition-colors">
                    {t('nav.products')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-gray-300 hover:text-lime-green transition-colors">
                    {t('nav.blog')}
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-lime-green transition-colors">
                    {t('nav.contact')}
                  </a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.support')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.help_center')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.farmer_support')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.quality_guarantee')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.shipping_info')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-lime-green transition-colors">
                  {t('footer.returns')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-300 text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-end space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-300 hover:text-lime-green text-sm transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-300 hover:text-lime-green text-sm transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-300 hover:text-lime-green text-sm transition-colors">
              {t('footer.sitemap')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
