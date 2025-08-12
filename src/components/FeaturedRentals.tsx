
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath } from 'lucide-react';
import ProductChatButton from './ProductChatButton';

const featuredRentals = [
  {
    id: 1,
    title: "Modern 2BR Apartment in Westlands",
    price: "KSh 65,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    location: "Westlands, Nairobi",
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Parking", "Security"],
    landlord: "Prime Properties",
    badge: "Featured"
  },
  {
    id: 2,
    title: "Cozy Bedsitter in Kilimani",
    price: "KSh 25,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    location: "Kilimani, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Water"],
    landlord: "Urban Homes",
    badge: "Available"
  },
  {
    id: 3,
    title: "Spacious 3BR House in Karen",
    price: "KSh 120,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    location: "Karen, Nairobi",
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["WiFi", "Parking", "Garden", "Security"],
    landlord: "Luxury Living",
    badge: "Premium"
  },
  {
    id: 4,
    title: "Spacious bedsitter",
    price: "KSh 13,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    location: "Kasarani, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Own compound"],
    landlord: "Housing",
    badge: "Mid-level"
  },
  {
    id: 5,
    title: "Executive Studio in Kileleshwa",
    price: "KSh 21,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    location: "Kileleshwa, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Gym", "Pool"],
    landlord: "Elite Residences",
    badge: "New"
  },
  {
    id: 6,
    title: "Family House in Runda",
    price: "KSh 150,000",
    period: "/month",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    location: "Runda, Nairobi",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["WiFi", "Garden", "Security", "Parking"],
    landlord: "Premium Homes",
    badge: "Premium"
  }
];

const FeaturedRentals = () => {
  const navigate = useNavigate();

  const viewRentalDetails = (rentalId: number) => {
    console.log(`Viewing rental ${rentalId} details`);
    navigate(`/rentals/${rentalId}`);
  };

  return (
    <section className="section-content bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 slide-in-up">
          <h2 className="section-title gradient-text">Featured Rentals</h2>
          <p className="section-subtitle">
            Find your perfect home from verified landlords across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {featuredRentals.map((rental) => (
            <Card key={rental.id} className="glass-card group overflow-hidden fade-in-stagger hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={rental.image}
                  alt={rental.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge
                  variant={rental.badge === 'Premium' ? 'default' : 'secondary'}
                  className="absolute top-2 left-2 pulse-glow text-xs"
                >
                  {rental.badge}
                </Badge>
              </div>

              <CardContent className="p-3">
                <h3 className="card-title line-clamp-2 group-hover:text-primary transition-colors text-white">
                  {rental.title}
                </h3>

                <div className="flex items-center gap-1 mb-2 text-gray-400">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span className="text-xs">{rental.location}</span>
                </div>

                <div className="flex items-center gap-3 mb-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Bed className="h-3 w-3 text-primary" />
                    <span>{rental.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-3 w-3 text-primary" />
                    <span>{rental.bathrooms} bath</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {rental.amenities.slice(0, 3).map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs shimmer">
                      {amenity}
                    </Badge>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mb-2">
                  by {rental.landlord}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="card-price gradient-text">{rental.price}</span>
                    <span className="text-xs text-gray-400">{rental.period}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full h-7 text-xs glow-effect bg-transparent hover:bg-primary/10 text-white border-primary/50 font-semibold"
                    onClick={() => viewRentalDetails(rental.id)}
                  >
                    View Details
                  </Button>
                  <ProductChatButton
                    productId={rental.id}
                    sellerName={rental.landlord}
                    productTitle={rental.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="shimmer pulse-glow bg-transparent hover:bg-primary/10 text-white border-primary/50 font-semibold" asChild>
            <Link to="/rentals">
              View All Rentals
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRentals;
