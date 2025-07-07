import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { LanguageToggle } from '@/components/language-toggle';

const navItems = [
  { href: '/', key: 'nav.home' },
  { href: '/about', key: 'nav.about' },
  { href: '/products', key: 'nav.products' },
  { href: '/blog', key: 'nav.blog' },
  { href: '/contact', key: 'nav.contact' },
];

export function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, children, mobile = false, onClick }: { href: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) => {
    const isActive = location === href;
    const baseClasses = "transition-colors duration-300 font-medium";
    const desktopClasses = "text-gray-700 hover:text-forest-green";
    const mobileClasses = "block px-3 py-2 text-base font-medium text-gray-700 hover:text-forest-green hover:bg-gray-50 rounded-md";
    const activeClasses = "text-forest-green";
    
    return (
      <Link href={href}>
        <span onClick={onClick} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses} ${isActive ? activeClasses : ''} cursor-pointer`}>
          {children}
        </span>
      </Link>
    );
  };

  // Google Analytics gtag.js
  useEffect(() => {
    if (!window.gtagScriptLoaded) {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZVFSSFY4Q8';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ZVFSSFY4Q8');`;
      document.head.appendChild(script2);
      window.gtagScriptLoaded = true;
    }
  }, []);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="flex-shrink-0 flex items-center cursor-pointer">
                <img
                  src="https://sadabahaar-167866605.imgix.net/mku-logo.png?auto=format&w=60&h=60"
                  alt="Mohan Krushi Udyog Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="text-xl lg:text-2xl font-playfair font-bold text-forest-green whitespace-nowrap">
                  Mohan Krushi Udyog
                </span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {t(item.key)}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageToggle />
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-4">
                    {navItems.map((item) => (
                      <NavLink key={item.href} href={item.href} mobile onClick={() => setIsOpen(false)}>
                        {t(item.key)}
                      </NavLink>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
