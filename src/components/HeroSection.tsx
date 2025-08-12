
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingBag, Home as HomeIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-8">
      {/* Add Bilbo font link */}
      <link href="https://fonts.googleapis.com/css2?family=Bilbo:wght@400&display=swap" rel="stylesheet" />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 animate-gradient-x"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-emerald-500/5 to-cyan-500/10 animate-gradient-y"></div>
      </div>
      
      {/* Floating Orbs with Enhanced Animations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse floating-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000 floating-reverse" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-500 floating-diagonal" />
      <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-orange-500/8 rounded-full blur-2xl animate-pulse delay-700 floating-bounce" />
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-300 floating-fast" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-primary/30 rotate-45 animate-spin-slow floating"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-emerald-400/30 animate-spin-reverse floating-reverse"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping floating-diagonal"></div>
        <div className="absolute bottom-1/3 right-1/6 w-8 h-1 bg-orange-400/30 animate-pulse floating-fast"></div>
        <div className="absolute top-1/6 right-1/2 w-5 h-5 border border-purple-400/30 rounded-full animate-bounce floating"></div>
      </div>
      
      {/* Enhanced Moving Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-primary/40 rounded-full animate-particle-1" />
        <div className="absolute w-1 h-1 bg-emerald-400/50 rounded-full animate-particle-2" />
        <div className="absolute w-3 h-3 bg-cyan-400/30 rounded-full animate-particle-3" />
        <div className="absolute w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-particle-4" />
        <div className="absolute w-2.5 h-2.5 bg-purple-400/35 rounded-full animate-particle-5" />
        <div className="absolute w-1 h-1 bg-pink-400/40 rounded-full animate-particle-6" />
        <div className="absolute w-2 h-2 bg-blue-400/35 rounded-full animate-particle-7" />
        <div className="absolute w-1.5 h-1.5 bg-yellow-400/30 rounded-full animate-particle-8" />
      </div>
      
      {/* Animated Light Rays */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/50 via-transparent to-transparent animate-ray-1"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-emerald-400/40 via-transparent to-transparent animate-ray-2"></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-cyan-400/30 via-transparent to-transparent animate-ray-3"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/5 left-1/5 animate-float-icon-1">
          <ShoppingBag className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-2/3 right-1/5 animate-float-icon-2">
          <HomeIcon className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-icon-3">
          <Star className="w-7 h-7 text-orange-400" />
        </div>
        <div className="absolute top-1/3 right-2/5 animate-float-icon-4">
          <Users className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Badge */}
          <div className="mb-6 sm:mb-8 slide-in-from-top">
            <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base font-medium animate-bounce glow-pulse">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 fill-current" />
              #1 Marketplace in Kenya
            </Badge>
          </div>

          {/* Main Heading with Bilbo Font - Better mobile sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight slide-in-from-bottom" style={{ fontFamily: 'Bilbo, cursive' }}>
            <span className="gradient-text block floating text-glow">Your Marketplace</span>
            <span className="text-white block animate-fade-in delay-300">for</span>
            <span className="gradient-text block floating delay-200 text-glow">Everything Kenya</span>
          </h1>
          
          {/* Subtitle with Stagger Animation - Better mobile sizes */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed slide-in-from-bottom delay-400">
            Buy, sell, and rent with confidence. Connect with verified sellers and landlords 
            across Kenya on the most trusted platform with over 50,000 active listings.
          </p>

          {/* CTA Buttons with Multi-Color Gradient */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 slide-in-from-bottom delay-600">
            <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-bold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 glow-on-hover" asChild>
              <Link to="/marketplace">
                <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                  <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
                  Start Shopping Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group bg-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 text-white border-2 border-blue-500/50 hover:border-blue-400 font-bold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 rounded-xl transition-all duration-300 hover:scale-105 hover-glow" asChild>
              <Link to="/list-property">
                <span className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300">
                  <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  List Your Property
                </span>
              </Link>
            </Button>
          </div>

          {/* Enhanced Stats Grid - Better mobile sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-16 sm:mt-20">
            <div className="text-center fade-in-stagger group cursor-pointer hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded-2xl p-4 sm:p-6 mb-2 sm:mb-4 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-300 glass-effect">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2 floating counter-animation">50K+</div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">Active Listings</div>
              </div>
            </div>
            <div className="text-center fade-in-stagger group cursor-pointer hover:scale-110 transition-all duration-300 delay-100">
              <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl p-4 sm:p-6 mb-2 sm:mb-4 group-hover:shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-300 glass-effect">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2 floating delay-200 counter-animation">25K+</div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">Happy Customers</div>
              </div>
            </div>
            <div className="text-center fade-in-stagger group cursor-pointer hover:scale-110 transition-all duration-300 delay-200">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 sm:p-6 mb-2 sm:mb-4 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300 glass-effect">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2 floating delay-400 counter-animation">1M+</div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">Monthly Visits</div>
              </div>
            </div>
            <div className="text-center fade-in-stagger group cursor-pointer hover:scale-110 transition-all duration-300 delay-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-4 sm:p-6 mb-2 sm:mb-4 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-300 glass-effect">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2 floating delay-600 counter-animation">99%</div>
                <div className="text-sm sm:text-base text-gray-400 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
