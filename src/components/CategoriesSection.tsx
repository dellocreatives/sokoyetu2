
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  Smartphone, 
  Home, 
  Car, 
  ShirtIcon, 
  Heart,
  Baby,
  Dumbbell,
  Wheat,
  Wrench,
  Building,
  Users,
  MapPin,
  Store,
  ArrowRight,
  Eye,
  ShoppingCart,
  Star,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const productCategories = [
  {
    id: 1,
    name: "Electronics",
    icon: Smartphone,
    count: "2,341 items",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
    description: "Phones, laptops, gadgets & accessories",
    trending: true,
    rating: 4.8,
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Fashion",
    icon: ShirtIcon,
    count: "3,247 items",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description: "Clothing, shoes, bags & jewelry",
    trending: true,
    rating: 4.5,
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    name: "Home & Living",
    icon: Home,
    count: "1,892 items",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    description: "Furniture, decor & household items",
    trending: false,
    rating: 4.6,
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 4,
    name: "Vehicles",
    icon: Car,
    count: "856 listings",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    description: "Cars, motorcycles & spare parts",
    trending: true,
    rating: 4.7,
    color: "from-orange-500 to-red-600"
  },
  {
    id: 5,
    name: "Health & Beauty",
    icon: Heart,
    count: "1,234 items",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    description: "Skincare, makeup & wellness products",
    trending: false,
    rating: 4.4,
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 6,
    name: "Baby & Kids",
    icon: Baby,
    count: "987 items",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop",
    description: "Toys, clothes & baby essentials",
    trending: false,
    rating: 4.9,
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 7,
    name: "Sports & Outdoors",
    icon: Dumbbell,
    count: "756 items",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    description: "Fitness equipment & outdoor gear",
    trending: true,
    rating: 4.3,
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 8,
    name: "Agriculture",
    icon: Wheat,
    count: "432 items",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
    description: "Seeds, tools & farming equipment",
    trending: false,
    rating: 4.2,
    color: "from-lime-500 to-green-600"
  },
  {
    id: 9,
    name: "Services",
    icon: Wrench,
    count: "298 listings",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    description: "Professional & technical services",
    trending: false,
    rating: 4.1,
    color: "from-indigo-500 to-purple-600"
  }
];

const rentalCategories = [
  {
    id: 10,
    name: "Bedsitters",
    icon: Home,
    count: "1,245 properties",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
    description: "Affordable single-room living spaces",
    trending: true,
    rating: 4.3,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 11,
    name: "Single Rooms",
    icon: Building,
    count: "892 properties",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    description: "Private rooms in shared houses",
    trending: true,
    rating: 4.2,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 12,
    name: "Apartments",
    icon: Building,
    count: "567 properties",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    description: "1-3 bedroom apartment units",
    trending: true,
    rating: 4.6,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 13,
    name: "Shared Housing",
    icon: Users,
    count: "423 properties",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop",
    description: "Shared living arrangements",
    trending: false,
    rating: 4.1,
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 14,
    name: "Commercial Property",
    icon: Store,
    count: "298 properties",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    description: "Offices, shops & business spaces",
    trending: false,
    rating: 4.4,
    color: "from-orange-500 to-yellow-600"
  },
  {
    id: 15,
    name: "Land for Rent",
    icon: MapPin,
    count: "156 properties",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
    description: "Agricultural & development land",
    trending: false,
    rating: 4.0,
    color: "from-green-500 to-lime-600"
  }
];

const CategoriesSection = () => {
  const [selectedTab, setSelectedTab] = useState('products');
  const navigate = useNavigate();

  const viewDetails = (categoryId: number, categoryName: string) => {
    console.log(`Viewing category ${categoryId} details`);
    // Navigate to category details page with category info
    navigate(`/marketplace?category=${categoryName.toLowerCase().replace(/\s+/g, '-')}&view=details`);
  };

  const browseCategory = (categoryId: number, categoryName: string) => {
    console.log(`Browsing category ${categoryId}`);
    // Navigate to marketplace filtered by category
    navigate(`/marketplace?category=${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const CategoryCard = ({ category, index }: { category: any; index: number }) => {
    const IconComponent = category.icon;
    return (
      <Card 
        className="group relative overflow-hidden border-0 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl hover:from-gray-900/90 hover:to-gray-800/80 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer"
        style={{ 
          animationDelay: `${index * 100}ms`,
          backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]}/10, ${category.color.split(' ')[3]}/5)`
        }}
      >
        {/* Category Image with Overlay */}
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
          
          {/* Trending Badge */}
          {category.trending && (
            <Badge className="absolute top-3 left-3 bg-red-500/90 text-white border-0 px-2 py-1 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              Hot
            </Badge>
          )}

          {/* Rating Badge */}
          <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0 px-2 py-1 text-xs backdrop-blur-sm">
            <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
            {category.rating}
          </Badge>

          {/* Icon Overlay */}
          <div className="absolute bottom-3 left-3 w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
            <IconComponent className="w-5 h-5 text-white" />
          </div>

          {/* Sparkle Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles className="w-6 h-6 text-white/80 animate-pulse" />
          </div>
        </div>

        <CardContent className="p-4">
          {/* Category Info */}
          <div className="mb-4">
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
              {category.name}
            </h3>
            <p className="text-xs text-gray-300 mb-2 leading-relaxed">
              {category.description}
            </p>
            
            {/* Item Count */}
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-semibold text-primary">{category.count}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button 
              className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-medium rounded-lg transition-all duration-300 group/btn text-xs py-2`}
              onClick={() => viewDetails(category.id, category.name)}
            >
              <Eye className="w-3 h-3 mr-1 transition-transform group-hover/btn:scale-110" />
              View Details
              <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700/50 font-medium rounded-lg transition-all duration-300 group/btn text-xs py-2"
              onClick={() => browseCategory(category.id, category.name)}
            >
              <ShoppingCart className="w-3 h-3 mr-1 transition-transform group-hover/btn:scale-110" />
              Browse Category
            </Button>
          </div>
        </CardContent>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      </Card>
    );
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary px-6 py-3 text-sm font-semibold mb-6">
            SokoXpress Categories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-purple-400 bg-clip-text text-transparent">
            Discover What You Need
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our comprehensive marketplace with thousands of products and rental properties
          </p>
        </div>

        {/* Tabs for Products/Rentals */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-800/50 border border-gray-700">
            <TabsTrigger 
              value="products" 
              className="text-gray-300 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
            >
              Product Categories
            </TabsTrigger>
            <TabsTrigger 
              value="rentals"
              className="text-gray-300 data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
            >
              Rental Categories
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {productCategories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </TabsContent>

          {/* Rentals Tab */}
          <TabsContent value="rentals" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {rentalCategories.map((category, index) => (
                <CategoryCard key={category.id} category={category} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800/50 via-gray-700/50 to-gray-800/50 rounded-3xl p-8 border border-gray-600/30 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Explore all categories or suggest a new one to help us serve you better
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="px-8 py-3 bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
                asChild
              >
                <Link to="/browse-categories">
                  Browse All Categories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-700/30 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/suggest-category">
                  Suggest New Category
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
