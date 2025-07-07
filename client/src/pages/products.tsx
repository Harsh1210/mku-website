import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { products } from '@/data/static-data';
import React from 'react';

export default function Products() {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === 'hi';

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
              <ProductCard key={product.id} product={product} isHindi={isHindi} t={t} />
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

function ProductCard({ product, isHindi, t }: any) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const media = [...(product.images || []), ...(product.video ? [product.video] : [])];
  const isVideo = (url: string) =>
    url.endsWith('.mp4') ||
    url.includes('youtube.com') ||
    url.includes('vimeo.com') ||
    isGoogleDriveVideo(url);
  const isGoogleDriveVideo = (url: string) =>
    url.includes('drive.google.com/file/d/') && url.includes('/preview');

  // Helper to always get the preview link for Google Drive videos
  const getGoogleDrivePreviewUrl = (url: string) => {
    // Accept both /uc?export=download&id=... and /file/d/.../preview
    const match = url.match(/(?:id=|file\/d\/)([a-zA-Z0-9_-]{25,})/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

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
        <CardContent className="p-4 lg:p-6">
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
              isGoogleDriveVideo(media[mediaIndex]) ? (
                <iframe
                  src={getGoogleDrivePreviewUrl(media[mediaIndex])}
                  allow="autoplay"
                  className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-md"
                  title="Google Drive Video"
                />
              ) : (
                <video
                  src={media[mediaIndex]}
                  controls
                  className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-md"
                  onClick={e => { e.stopPropagation(); setModalOpen(true); }}
                />
              )
            ) : (
              <img
                src={media[mediaIndex]}
                alt={isHindi ? product.nameHi || product.name : product.name}
                className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-md"
              />
            )}
          </div>
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
                isGoogleDriveVideo(media[mediaIndex]) ? (
                  <iframe
                    src={getGoogleDrivePreviewUrl(media[mediaIndex])}
                    allow="autoplay"
                    className="w-full max-h-[80vh] rounded-xl shadow-lg"
                    style={{ minHeight: 400 }}
                    title="Google Drive Video"
                  />
                ) : (
                  <video
                    src={media[mediaIndex]}
                    controls
                    autoPlay
                    className="max-h-[80vh] rounded-xl shadow-lg"
                  />
                )
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
