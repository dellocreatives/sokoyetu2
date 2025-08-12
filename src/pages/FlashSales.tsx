
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Timer,
  Flame,
  Filter,
  Grid,
  List
} from 'lucide-react';

const allFlashSaleItems = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: "KSh 120,000",
    originalPrice: "KSh 170,000",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 245,
    discount: "29%",
    timeLeft: { hours: 2, minutes: 30, seconds: 45 },
    sold: 23,
    available: 50,
    category: "Electronics"
  },
  {
    id: 2,
    title: "Samsung Galaxy Watch",
    price: "KSh 25,000",
    originalPrice: "KSh 40,000",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 180,
    discount: "38%",
    timeLeft: { hours: 1, minutes: 15, seconds: 20 },
    sold: 67,
    available: 100,
    category: "Electronics"
  },
  {
    id: 3,
    title: "MacBook Air M2",
    price: "KSh 130,000",
    originalPrice: "KSh 180,000",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 95,
    discount: "28%",
    timeLeft: { hours: 4, minutes: 45, seconds: 12 },
    sold: 12,
    available: 30,
    category: "Electronics"
  },
  {
    id: 4,
    title: "Sony WH-1000XM4",
    price: "KSh 28,000",
    originalPrice: "KSh 45,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 320,
    discount: "38%",
    timeLeft: { hours: 0, minutes: 45, seconds: 30 },
    sold: 89,
    available: 120,
    category: "Electronics"
  },
  {
    id: 5,
    title: "Nike Air Max",
    price: "KSh 12,000",
    originalPrice: "KSh 18,000",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 150,
    discount: "33%",
    timeLeft: { hours: 3, minutes: 20, seconds: 15 },
    sold: 45,
    available: 80,
    category: "Fashion"
  },
  {
    id: 6,
    title: "Gaming Chair",
    price: "KSh 18,000",
    originalPrice: "KSh 30,000",
    image: "https://images.unsplash.com/photo-1586963835294-bc80ba8ac3da?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 85,
    discount: "40%",
    timeLeft: { hours: 5, minutes: 10, seconds: 40 },
    sold: 30,
    available: 60,
    category: "Furniture"
  }
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(allFlashSaleItems.map(item => item.timeLeft));
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Electronics', 'Fashion', 'Furniture'];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTimes => 
        prevTimes.map(time => {
          if (time.seconds > 0) {
            return { ...time, seconds: time.seconds - 1 };
          } else if (time.minutes > 0) {
            return { ...time, minutes: time.minutes - 1, seconds: 59 };
          } else if (time.hours > 0) {
            return { ...time, hours: time.hours - 1, minutes: 59, seconds: 59 };
          }
          return time;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? allFlashSaleItems 
    : allFlashSaleItems.filter(item => item.category === selectedCategory);

  const addToCart = (itemId: number) => {
    console.log(`Adding item ${itemId} to cart`);
  };

  const viewDetails = (itemId: number) => {
    console.log(`Viewing details for item ${itemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-yellow-900/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="destructive" className="bg-red-500/90 text-white px-6 py-3 text-lg animate-pulse mb-4">
                <Flame className="w-5 h-5 mr-2" />
                Flash Sale - Limited Time!
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
                ⚡ All Flash Sales ⚡
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Don't miss out on these incredible limited-time offers!
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category 
                        ? "bg-primary text-white" 
                        : "border-primary/50 text-primary hover:bg-primary/10"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Flash Sale Items */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1 lg:grid-cols-2'
            }`}>
              {filteredItems.map((item, index) => {
                const progressPercentage = (item.sold / item.available) * 100;
                return (
                  <Card 
                    key={item.id} 
                    className="glass-card group overflow-hidden hover:scale-105 transition-all duration-500 relative border-2 border-red-500/30 hover:border-red-500/60"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                          viewMode === 'grid' ? 'h-48' : 'h-32'
                        }`}
                      />
                      
                      <div className="absolute top-3 left-3 bg-red-500/90 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                        <div className="flex items-center gap-1 text-sm font-bold">
                          <Timer className="w-4 h-4" />
                          {String(timeLeft[index]?.hours || 0).padStart(2, '0')}:
                          {String(timeLeft[index]?.minutes || 0).padStart(2, '0')}:
                          {String(timeLeft[index]?.seconds || 0).padStart(2, '0')}
                        </div>
                      </div>

                      <Badge 
                        variant="destructive" 
                        className="absolute top-3 right-3 bg-red-500/90 text-white text-lg px-3 py-2"
                      >
                        -{item.discount}
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1 text-white">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-yellow-400">
                            {item.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          ({item.reviews})
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-2xl text-red-400">
                            {item.price}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {item.originalPrice}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Sold: {item.sold}</span>
                          <span>Available: {item.available}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button 
                          size="sm" 
                          className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
                          onClick={() => addToCart(item.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10"
                          onClick={() => viewDetails(item.id)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FlashSales;
