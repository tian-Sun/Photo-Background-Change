'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  // 滚动到AI头像生成器函数
  const scrollToGenerator = () => {
    const element = document.getElementById('headshot-generator');
    
    if (element) {
      // 使用更兼容的滚动方法
      const elementTop = element.offsetTop;
      window.scrollTo({
        top: elementTop - 80, // 减去80px给header留空间
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative gradient-hero py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/50 text-foreground border border-border/20">
                {t.hero.badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.title}{' '}
                <span className="text-[#a259ff]">{t.hero.titleHighlight}</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                {t.hero.description}
              </p>
            </div>

            <Button
              onClick={scrollToGenerator}
              className="bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#c084fc] hover:shadow-glow transition-all duration-300 text-white px-8 py-6 text-lg border-0"
              style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)' }}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative max-w-[520px] max-h-[520px] w-full h-full mx-auto">
            <div className="relative bg-white rounded-2xl shadow-card p-4 sm:p-6">
              <div className="flex items-center justify-center gap-6">
                {/* Before 区域 */}
                <div className="text-center">
                  <div className="text-sm font-medium text-center bg-gray-100 rounded-lg py-2 mb-3">
                    Before
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden w-[160px]">
                    <Image
                      src="/homedemo/person.png"
                      alt="Before"
                      width={320}
                      height={427}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* 箭头 */}
                <div className="flex-shrink-0">
                  <ArrowRight className="w-8 h-8 text-[#a259ff]" />
                </div>

                {/* After 区域 */}
                <div className="text-center">
                  <div className="text-sm font-medium text-center bg-gray-100 rounded-lg py-2 mb-3">
                    After
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden w-[160px]">
                    <Image
                      src="/homedemo/result.jpg"
                      alt="After transformation"
                      width={320}
                      height={427}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
