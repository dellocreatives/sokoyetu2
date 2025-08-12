
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FlashSaleSection from '@/components/FlashSaleSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import FeaturedRentals from '@/components/FeaturedRentals';
import NewListingsSection from '@/components/NewListingsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FlashSaleSection />
      <NewListingsSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturedRentals />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
