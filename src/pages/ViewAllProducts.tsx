
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductChatButton from '@/components/ProductChatButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const allProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    price: "KSh 180,000",
    originalPrice: "KSh 200,000",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 124,
    seller: "TechHub Kenya",
    location: "Nairobi",
    badge: "Featured",
    category: "Electronics",
    isLiked: false
  },
  {
    id: 2,
    title: "MacBook Air M2 13-inch",
    price: "KSh 165,000",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 89,
    seller: "Digital Store",
    location: "Mombasa",
    badge: "Hot Deal",
    category: "Electronics",
    isLiked: true
  },
  {
    id: 3,
    title: "Samsung 65\" QLED TV",
    price: "KSh 85,000",
    originalPrice: "KSh 95,000",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 67,
    seller: "ElectroMart",
    location: "Kisumu",
    badge: "Sale",
    category: "Electronics",
    isLiked: false
  }
  // Add more products here for pagination demonstration
];

const ViewAllProducts = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');

  const categories = ['all', 'electronics', 'fashion', 'vehicles', 'furniture', 'books'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 gradient-text">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of products from verified sellers
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-primary">
                • Filtered by: {selectedCategory.replace(/-/g, ' ')}
              </span>
            )}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Search */}
            <div className="lg:col-span-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="lg:col-span-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.slice(1).map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div className="lg:col-span-2">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-10000">Under KSh 10,000</SelectItem>
                  <SelectItem value="10000-50000">KSh 10,000 - 50,000</SelectItem>
                  <SelectItem value="50000-100000">KSh 50,000 - 100,000</SelectItem>
                  <SelectItem value="100000+">Over KSh 100,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div className="lg:col-span-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Advanced Filters */}
            <div className="lg:col-span-2">
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-muted-foreground">
              Showing {allProducts.length} of 2,547 products
            </p>
            {searchQuery && (
              <p className="text-sm text-muted-foreground">
                Results for "{searchQuery}"
              </p>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12' : 'space-y-4 mb-12'}>
          {allProducts.map((product) => (
            <Card key={product.id} className="glass-card group overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              {viewMode === 'grid' ? (
                <>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      variant={product.badge === 'Hot Deal' ? 'destructive' : 'secondary'} 
                      className="absolute top-2 left-2"
                    >
                      {product.badge}
                    </Badge>
                    <Button
                      size="sm"
                      variant={product.isLiked ? 'default' : 'secondary'}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className={`h-4 w-4 ${product.isLiked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      {product.seller} • {product.location}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-bold text-lg">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button size="sm" className="w-full">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <ProductChatButton
                        productId={product.id}
                        sellerName={product.seller}
                        productTitle={product.title}
                      />
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{product.title}</h3>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Heart className={`h-4 w-4 ${product.isLiked ? 'fill-current' : ''}`} />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating} ({product.reviews})</span>
                        <Badge variant="secondary" className="ml-2">{product.badge}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">
                        {product.seller} • {product.location}
                      </p>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-bold text-xl">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through ml-2">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                          <ProductChatButton
                            productId={product.id}
                            sellerName={product.seller}
                            productTitle={product.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <Button variant="outline" disabled>Previous</Button>
          <div className="flex gap-2">
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm">25</Button>
          </div>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewAllProducts;
