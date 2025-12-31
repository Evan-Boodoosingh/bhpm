import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611839234650-997b22bd1ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCb3N0b24lMjBza3lsaW5lJTIwd2F0ZXJmcm9udHxlbnwxfHx8fDE3NjY1MTc0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl text-white mb-6 max-w-4xl mx-auto leading-tight">
          Find Your Perfect Home in Boston
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover exceptional homes and unparalleled service in Boston's most desirable neighborhoods
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(to bottom right, rgb(245 158 11), rgb(217 119 6))',
              borderColor: 'transparent',
            }}
            className="text-white backdrop-blur-xl px-8 py-6 text-lg rounded-2xl hover:opacity-90"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, rgb(217 119 6), rgb(180 83 9))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to bottom right, rgb(245 158 11), rgb(217 119 6))';
            }}
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}