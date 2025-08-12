
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Star, Heart, ShoppingCart, Bed, Bath, Clock, Eye } from 'lucide-react';
import ProductChatButton from './ProductChatButton';
import WhatsAppChat from './WhatsAppChat';

const newProducts = [
  {
    id: 11,
    title: "Mercedes AMG GT 63S",
    price: "KSh 12,500,000",
    image: "/lovable-uploads/fb595495-3dbd-4630-8712-3364497cec1e.png",
    rating: 4.9,
    reviews: 156,
    seller: "Luxury Motors",
    location: "Nairobi",
    badge: "New",
    category: "Vehicles",
    isNew: true,
    hoursAgo: 2
  },
  {
    id: 12,
    title: "Audi Q5 Sportback",
    price: "KSh 4,800,000",
    image: "/lovable-uploads/7edf4a36-df05-465e-a955-e7a137d86cea.png",
    rating: 4.7,
    reviews: 89,
    seller: "Premium Cars",
    location: "Mombasa",
    badge: "New",
    category: "Vehicles",
    isNew: true,
    hoursAgo: 5
  },
  {
    id: 13,
    title: "Kawasaki Ninja ZX-10R",
    price: "KSh 1,850,000",
    image: "/lovable-uploads/aa6b5a44-0e7f-4a83-8dd0-634ae18ae1d9.png",
    rating: 4.8,
    reviews: 34,
    seller: "Speed Bikes",
    location: "Nairobi",
    badge: "Hot",
    category: "Vehicles",
    isNew: true,
    hoursAgo: 1
  },
  {
    id: 14,
    title: "Boxer CB 125F",
    price: "KSh 180,000",
    image: "/lovable-uploads/e9513fdf-9f2b-41c2-82ab-328e911ac693.png",
    rating: 4.6,
    reviews: 127,
    seller: "City Bikes",
    location: "Kiambu",
    badge: "Popular",
    category: "Vehicles",
    isNew: true,
    hoursAgo: 3
  }
];

const newRentals = [
  {
    id: 11,
    title: "Luxury 1BR in Upperhill",
    price: "KSh 55,000",
    period: "/month",
    image: "/lovable-uploads/07e762bf-6fd9-47ae-a659-1eb3f40211a4.png",
    location: "Upperhill, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Gym", "Pool"],
    landlord: "Elite Properties",
    badge: "New",
    isNew: true,
    hoursAgo: 3
  },
  {
    id: 12,
    title: "Spacious 2BR in Lavington",
    price: "KSh 75,000",
    period: "/month",
    image: "/lovable-uploads/fffbdda7-4182-484d-ac52-c4160b10517b.png",
    location: "Lavington, Nairobi",
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Parking", "Security"],
    landlord: "Prime Homes",
    badge: "New",
    isNew: true,
    hoursAgo: 1
  }
];

const NewListingsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 slide-in-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Fresh Arrivals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the latest products and properties just added to our marketplace
          </p>
        </div>

        {/* New Vehicles Section */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Latest Vehicles</h3>
              <p className="text-sm text-muted-foreground">Premium cars and motorcycles</p>
            </div>
            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto">
              <Link to="/marketplace?category=vehicles">View All Vehicles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((product, index) => (
              <Card key={product.id} className="glass-card group overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover-scale" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 md:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge
                    variant={product.badge === 'Hot' ? 'destructive' : 'default'}
                    className="absolute top-3 left-3 text-xs shadow-lg"
                  >
                    {product.badge}
                  </Badge>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge variant="outline" className="bg-background/90 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {product.hoursAgo}h
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-sm md:text-base line-clamp-2 flex-1">{product.title}</h4>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 opacity-60 hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3">
                    {product.seller} • {product.location}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg text-primary">{product.price}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 h-8 text-xs">
                      <ShoppingCart className="h-3 w-3 mr-1" />
                      Add to Cart
                    </Button>
                    <WhatsAppChat
                      message={`Hi, I'm interested in ${product.title}`}
                      size="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* New Rentals Section */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Latest Rentals</h3>
              <p className="text-sm text-muted-foreground">Premium properties available now</p>
            </div>
            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto">
              <Link to="/rentals">View All Rentals</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {newRentals.map((rental, index) => (
              <Card key={rental.id} className="glass-card group overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover-scale" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex flex-col sm:flex-row gap-4 p-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={rental.image}
                      alt={rental.title}
                      className="w-full sm:w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge variant="default" className="absolute top-2 left-2 text-xs">
                      New
                    </Badge>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm md:text-base line-clamp-2">{rental.title}</h4>
                    </div>

                    <div className="flex items-center gap-1 mb-2 text-muted-foreground">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span className="text-xs">{rental.location}</span>
                      <Clock className="h-3 w-3 ml-2" />
                      <span className="text-xs">{rental.hoursAgo}h ago</span>
                    </div>

                    <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="h-3 w-3 text-primary" />
                        <span>{rental.bedrooms} bed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-3 w-3 text-primary" />
                        <span>{rental.bathrooms} bath</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-bold text-lg text-primary">{rental.price}</span>
                        <span className="text-xs text-muted-foreground">{rental.period}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="h-7 text-xs px-3"
                          onClick={() => navigate(`/rentals/${rental.id}`)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <WhatsAppChat
                          message={`Hi, I'm interested in ${rental.title} in ${rental.location}`}
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewListingsSection;
