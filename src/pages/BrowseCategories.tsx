import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Smartphone, 
  Home, 
  Car, 
  ShirtIcon, 
  Book, 
  Gamepad2, 
  Wrench, 
  Sofa,
  Search,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const allCategories = [
  {
    id: 1,
    name: "Electronics",
    icon: Smartphone,
    count: "2,341 items",
    subcategories: ["Smartphones", "Laptops", "TVs", "Audio", "Cameras"],
    color: "from-blue-500 to-cyan-500",
    trend: "+12%"
  },
  {
    id: 2,
    name: "Real Estate",
    icon: Home,
    count: "1,892 properties",
    subcategories: ["Apartments", "Houses", "Commercial", "Land"],
    color: "from-green-500 to-emerald-500",
    trend: "+8%"
  },
  {
    id: 3,
    name: "Vehicles",
    icon: Car,
    count: "856 listings",
    subcategories: ["Cars", "Motorcycles", "Trucks", "Parts"],
    color: "from-purple-500 to-pink-500",
    trend: "+15%"
  },
  {
    id: 4,
    name: "Fashion",
    icon: ShirtIcon,
    count: "3,247 items",
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"],
    color: "from-orange-500 to-red-500",
    trend: "+20%"
  },
  {
    id: 5,
    name: "Books & Media",
    icon: Book,
    count: "1,567 items",
    subcategories: ["Books", "Movies", "Music", "Games"],
    color: "from-indigo-500 to-blue-500",
    trend: "+6%"
  },
  {
    id: 6,
    name: "Gaming",
    icon: Gamepad2,
    count: "924 items",
    subcategories: ["Consoles", "PC Games", "Mobile Games", "Accessories"],
    color: "from-teal-500 to-green-500",
    trend: "+25%"
  },
  {
    id: 7,
    name: "Tools & Hardware",
    icon: Wrench,
    count: "678 items",
    subcategories: ["Power Tools", "Hand Tools", "Hardware", "Safety"],
    color: "from-yellow-500 to-orange-500",
    trend: "+10%"
  },
  {
    id: 8,
    name: "Furniture",
    icon: Sofa,
    count: "1,234 items",
    subcategories: ["Living Room", "Bedroom", "Office", "Outdoor"],
    color: "from-pink-500 to-rose-500",
    trend: "+18%"
  }
];

const BrowseCategories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = allCategories.filter(category =>
      category.name.toLowerCase().includes(query.toLowerCase()) ||
      category.subcategories.some(sub => sub.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredCategories(filtered);
  };

  const browseCategory = (categoryName: string) => {
    console.log(`Browsing category: ${categoryName}`);
    navigate(`/marketplace?category=${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Browse All Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive collection of categories and find exactly what you're looking for
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="glass-card group cursor-pointer hover:scale-105 transition-all duration-500 hover:rotate-1 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative">
                  <Badge 
                    variant="secondary" 
                    className="absolute -top-1 -right-1 bg-green-500/20 text-green-400 border-green-500/30 text-xs px-2 py-1"
                  >
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {category.trend}
                  </Badge>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 glow-effect floating group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                    <IconComponent 
                      className="h-8 w-8 text-white drop-shadow-lg" 
                      strokeWidth={2}
                    />
                  </div>

                  <h3 className="font-bold text-lg mb-2 text-center text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {category.count}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-muted-foreground">Subcategories:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <Badge key={sub} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button 
                    asChild
                    size="sm" 
                    className="w-full mt-4 group"
                    onClick={() => browseCategory(category.name)}
                  >
                    Browse {category.name}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No categories found matching your search.</p>
            <Button variant="outline" onClick={() => handleSearch('')}>
              Clear Search
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Can't Find What You're Looking For?</h3>
            <p className="text-muted-foreground mb-6">
              Help us improve by suggesting a new category that should be added to our marketplace.
            </p>
            <Button asChild size="lg">
              <Link to="/suggest-category">
                Suggest New Category
              </Link>
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseCategories;
