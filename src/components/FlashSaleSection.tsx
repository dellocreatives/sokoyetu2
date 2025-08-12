
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Eye, 
  Clock, 
  Flame,
  Zap,
  Timer
} from 'lucide-react';
import ProductChatButton from './ProductChatButton';

const flashSaleItems = [
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
    seller: "TechHub Kenya"
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
    seller: "Gadget Store"
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
    seller: "Digital Store"
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
    seller: "Audio Pro"
  }
];

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState(flashSaleItems.map(item => item.timeLeft));

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

  const addToCart = (itemId: number) => {
    console.log(`Adding item ${itemId} to cart`);
    // Add cart functionality here
  };

  const viewDetails = (itemId: number) => {
    console.log(`Viewing details for item ${itemId}`);
    // Add view details functionality here
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-red-900/20 via-orange-900/10 to-yellow-900/5">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse floating"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000 floating"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 slide-in-up">
          <div className="flex justify-center mb-4">
            <Badge variant="destructive" className="bg-red-500/90 text-white px-6 py-3 text-lg animate-pulse">
              <Flame className="w-5 h-5 mr-2" />
              Flash Sale - Limited Time!
            </Badge>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text floating">
            ⚡ Flash Sale ⚡
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Incredible deals that won't last long! Grab these amazing products at unbeatable prices before time runs out.
          </p>
        </div>

        {/* Flash Sale Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {flashSaleItems.map((item, index) => {
            const progressPercentage = (item.sold / item.available) * 100;
            return (
              <Card 
                key={item.id} 
                className="glass-card group overflow-hidden hover:scale-105 transition-all duration-500 relative border-2 border-red-500/30 hover:border-red-500/60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Countdown Timer Overlay */}
                  <div className="absolute top-3 left-3 bg-red-500/90 text-white px-3 py-2 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-1 text-sm font-bold">
                      <Timer className="w-4 h-4" />
                      {String(timeLeft[index]?.hours || 0).padStart(2, '0')}:
                      {String(timeLeft[index]?.minutes || 0).padStart(2, '0')}:
                      {String(timeLeft[index]?.seconds || 0).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Discount Badge */}
                  <Badge 
                    variant="destructive" 
                    className="absolute top-3 right-3 bg-red-500/90 text-white text-lg px-3 py-2 pulse-glow"
                  >
                    -{item.discount}
                  </Badge>

                  {/* Quick Actions */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-10 w-10 p-0 bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm"
                        onClick={() => viewDetails(item.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-10 w-10 p-0 bg-white/10 hover:bg-white/20 text-white border-0 backdrop-blur-sm"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1 text-white">
                    {item.title}
                  </h3>
                  
                  {/* Rating */}
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

                  {/* Pricing */}
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

                  {/* Progress Bar */}
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

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold"
                      onClick={() => addToCart(item.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <ProductChatButton
                      productId={item.id}
                      sellerName={item.seller}
                      productTitle={item.title}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-in-up delay-800">
          <p className="text-gray-300 mb-6 text-lg">
            Don't miss out on these incredible deals!
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-lg px-12 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/flash-sales">
              <Zap className="w-6 h-6 mr-2" />
              View All Flash Sales
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
