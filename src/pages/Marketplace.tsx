import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductChatButton from '@/components/ProductChatButton';
import BackButton from '@/components/BackButton';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

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
    isLiked: false,
    condition: "new"
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
    isLiked: true,
    condition: "new"
  },
  {
    id: 3,
    title: "Samsung Galaxy S24 Ultra",
    price: "KSh 145,000",
    originalPrice: "KSh 160,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 203,
    seller: "Mobile World",
    location: "Kisumu",
    badge: "Sale",
    isLiked: false,
    condition: "used"
  },
  {
    id: 4,
    title: "Canon EOS R6 Camera",
    price: "KSh 220,000",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 43,
    seller: "Photo Pro",
    location: "Nairobi",
    badge: "Professional",
    isLiked: false,
    condition: "new"
  },
  {
    id: 5,
    title: "Gaming Laptop RTX 4060",
    price: "KSh 120,000",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 78,
    seller: "Game Central",
    location: "Nakuru",
    badge: "Gaming",
    isLiked: true,
    condition: "used"
  },
  {
    id: 6,
    title: "iPad Pro 12.9-inch M2",
    price: "KSh 135,000",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 156,
    seller: "Tech Hub",
    location: "Mombasa",
    badge: "Popular",
    isLiked: false,
    condition: "new"
  },
  {
    id: 7,
    title: "Sony WH-1000XM5 Headphones",
    price: "KSh 45,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 234,
    seller: "Audio World",
    location: "Eldoret",
    badge: "Bestseller",
    isLiked: true,
    condition: "second-hand"
  },
  {
    id: 8,
    title: "Dell XPS 13 Laptop",
    price: "KSh 95,000",
    originalPrice: "KSh 110,000",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 89,
    seller: "Laptop Store",
    location: "Nairobi",
    badge: "Sale",
    isLiked: false,
    condition: "second-hand"
  },
  {
    id: 9,
    title: "Apple Watch Series 9",
    price: "KSh 55,000",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 156,
    seller: "Watch Shop",
    location: "Nairobi",
    badge: "New",
    isLiked: false,
    condition: "new"
  },
  {
    id: 10,
    title: "iPhone 13 Pro 128GB",
    price: "KSh 95,000",
    originalPrice: "KSh 120,000",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 89,
    seller: "Mobile Hub",
    location: "Mombasa",
    badge: "Used",
    isLiked: true,
    condition: "used"
  }
];

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const viewParam = searchParams.get('view');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      console.log(`Filtering by category: ${categoryParam}`);
      
      if (viewParam === 'details') {
        console.log('Showing detailed view for category');
      }
    }
  }, [searchParams]);

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCondition = selectedCondition === 'all' || product.condition === selectedCondition;
    return matchesSearch && matchesCondition;
  });

  const products = filteredProducts.slice(0, displayedProducts);

  const loadMoreProducts = () => {
    setDisplayedProducts(prev => Math.min(prev + 8, filteredProducts.length));
  };

  const getConditionBadge = (condition: string) => {
    switch (condition) {
      case 'new':
        return <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">New</Badge>;
      case 'used':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">Used</Badge>;
      case 'second-hand':
        return <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-200">Second Hand</Badge>;
      default:
        return null;
    }
  };

  const addToCart = (productId: number) => {
    console.log(`Adding product ${productId} to cart`);
  };

  const viewProductDetails = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <BackButton />
        
        <div className="mb-6">
          <h1 className="section-title">Marketplace</h1>
          <p className="section-subtitle">
            Discover thousands of products from verified sellers
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-primary">
                • Filtered by: {selectedCategory.replace(/-/g, ' ')}
              </span>
            )}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-lg p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
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
            
            <div className="flex gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="vehicles">Vehicles</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="second-hand">Second Hand</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* View Toggle and Results */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {products.length} of {filteredProducts.length} products
          </p>
          
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

        {/* Products Grid */}
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4' : 'space-y-3'}>
          {products.map((product) => (
            <Card key={product.id} className="glass-card group overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover-scale">
              {viewMode === 'grid' ? (
                <>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      variant={product.badge === 'Hot Deal' ? 'destructive' : 'secondary'} 
                      className="absolute top-2 left-2 text-xs"
                    >
                      {product.badge}
                    </Badge>
                    <div className="absolute top-2 right-2">
                      {getConditionBadge(product.condition)}
                    </div>
                    <Button
                      size="sm"
                      variant={product.isLiked ? 'default' : 'secondary'}
                      className="absolute bottom-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className={`h-3 w-3 ${product.isLiked ? 'fill-current' : ''}`} />
                    </Button>
                  </div>

                  <CardContent className="p-3">
                    <h3 className="card-title line-clamp-2 cursor-pointer hover:text-primary transition-colors"
                        onClick={() => viewProductDetails(product.id)}>
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <p className="card-text mb-2">
                      {product.seller} • {product.location}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="card-price">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button 
                        size="sm" 
                        className="w-full h-7 text-xs"
                        onClick={() => viewProductDetails(product.id)}
                      >
                        View Details
                      </Button>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 h-7 text-xs">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                        <WhatsAppChat
                          message={`Hi, I'm interested in ${product.title}`}
                          size="sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      {getConditionBadge(product.condition)}
                    </div>
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
                            size="sm"
                          />
                          <WhatsAppChat
                            message={`Hi, I'm interested in ${product.title}`}
                            size="sm"
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

        {/* Load More */}
        {displayedProducts < filteredProducts.length && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" onClick={loadMoreProducts}>
              Load More Products ({filteredProducts.length - displayedProducts} remaining)
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Marketplace;
