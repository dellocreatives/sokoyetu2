
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import ProductChatButton from './ProductChatButton';

const featuredProducts = [
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
    title: "Samsung 65\" QLED Smart TV",
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
    category: "Electronics",
    isLiked: false
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
    category: "Electronics",
    isLiked: true
  },
  {
    id: 6,
    title: "Wireless Bluetooth Speaker",
    price: "KSh 12,500",
    originalPrice: "KSh 15,000",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 156,
    seller: "Sound Hub",
    location: "Eldoret",
    badge: "Bestseller",
    category: "Electronics",
    isLiked: false
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const viewProductDetails = (productId: number) => {
    console.log(`Viewing product ${productId} details`);
    navigate(`/products/${productId}`);
  };

  return (
    <section className="section-content bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 slide-in-up">
          <h2 className="section-title gradient-text">Featured Products</h2>
          <p className="section-subtitle">
            Discover top-rated products from verified sellers across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="glass-card group overflow-hidden fade-in-stagger hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge 
                  variant={product.badge === 'Hot Deal' ? 'destructive' : 'secondary'} 
                  className="absolute top-2 left-2 pulse-glow text-xs"
                >
                  {product.badge}
                </Badge>
                <Button
                  size="sm"
                  variant={product.isLiked ? 'default' : 'secondary'}
                  className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className={`h-3 w-3 ${product.isLiked ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <CardContent className="p-3">
                <h3 className="card-title line-clamp-2 group-hover:text-primary transition-colors text-white">
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
                    <span className="card-price gradient-text">{product.price}</span>
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
                    <ShoppingCart className="h-3 w-3 mr-1" />
                    Add to Cart
                  </Button>
                  <ProductChatButton
                    productId={product.id}
                    sellerName={product.seller}
                    productTitle={product.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="shimmer pulse-glow bg-transparent hover:bg-primary/10 text-white border-primary/50 font-semibold" asChild>
            <Link to="/marketplace">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
