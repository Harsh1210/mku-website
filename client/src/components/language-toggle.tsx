import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="default"
      size="sm"
      className="bg-forest-green hover:bg-forest-green/90 text-white gap-2 rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Languages className="h-4 w-4" />
      <span>{t('language.toggle')}</span>
    </Button>
  );
}
