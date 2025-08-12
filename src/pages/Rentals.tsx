
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import WhatsAppChat from '@/components/WhatsAppChat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, MapPin, Bed, Bath, Home } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const rentals = [
  {
    id: 1,
    title: "Modern 2BR Apartment in Westlands",
    price: "KSh 65,000",
    period: "/month",
    image: "/lovable-uploads/07e762bf-6fd9-47ae-a659-1eb3f40211a4.png",
    location: "Westlands, Nairobi",
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Parking", "Security", "Water"],
    landlord: "Prime Properties",
    badge: "Featured",
    type: "Apartment"
  },
  {
    id: 2,
    title: "Cozy Bedsitter in Kilimani",
    price: "KSh 25,000",
    period: "/month",
    image: "/lovable-uploads/fffbdda7-4182-484d-ac52-c4160b10517b.png",
    location: "Kilimani, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Water", "Security"],
    landlord: "Urban Homes",
    badge: "Available",
    type: "Bedsitter"
  },
  {
    id: 3,
    title: "Luxury 3BR House in Karen",
    price: "KSh 120,000",
    period: "/month",
    image: "/lovable-uploads/6060c40c-15e7-4750-baf5-fc82c6257b65.png",
    location: "Karen, Nairobi",
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["WiFi", "Garden", "Pool", "Security"],
    landlord: "Luxury Living",
    badge: "Premium",
    type: "House"
  },
  {
    id: 4,
    title: "Executive Studio in Kileleshwa",
    price: "KSh 45,000",
    period: "/month",
    image: "/lovable-uploads/04d2eae3-b2c4-4014-97b4-e6e58c17718e.png",
    location: "Kileleshwa, Nairobi",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Gym", "Pool"],
    landlord: "Elite Residences",
    badge: "New",
    type: "Studio"
  },
  {
    id: 5,
    title: "Family House in Runda",
    price: "KSh 150,000",
    period: "/month",
    image: "/lovable-uploads/99265cb7-6c49-4b76-8a5c-fb443ab3d439.png",
    location: "Runda, Nairobi",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["WiFi", "Garden", "Security", "Parking"],
    landlord: "Premium Homes",
    badge: "Premium",
    type: "House"
  },
  {
    id: 6,
    title: "Modern Townhouse",
    price: "KSh 95,000",
    period: "/month",
    image: "/lovable-uploads/92b2e08d-e840-47f5-96af-94b4f9764581.png",
    location: "Kiambu, Nairobi",
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Garden", "Security", "Parking"],
    landlord: "Modern Homes",
    badge: "Available",
    type: "Townhouse"
  }
];

const Rentals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const viewRentalDetails = (rentalId: number) => {
    navigate(`/rentals/${rentalId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <BackButton />
        
        <div className="mb-4 sm:mb-6">
          <h1 className="section-title flex items-center gap-2">
            <Home className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Rental Properties
          </h1>
          <p className="section-subtitle">
            Find your perfect home from verified landlords across Kenya
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card/50 backdrop-blur-xl border border-white/10 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search location, property type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 text-xs sm:text-sm"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-32 md:w-40 text-xs sm:text-sm">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="bedsitter">Bedsitter</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="any">
                <SelectTrigger className="w-full sm:w-28 md:w-32 text-xs sm:text-sm">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-full sm:w-32 md:w-40 text-xs sm:text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Showing {rentals.length} of 892 properties
          </p>
        </div>

        {/* Rentals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {rentals.map((rental) => (
            <Card key={rental.id} className="glass-card group overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover-scale slide-in-up">
              <div className="relative">
                <img
                  src={rental.image}
                  alt={rental.title}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant={rental.badge === 'Featured' ? 'default' : 'secondary'} 
                  className="absolute top-2 left-2 text-xs"
                >
                  {rental.badge}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="absolute top-2 right-2 bg-background/80 text-xs"
                >
                  {rental.type}
                </Badge>
              </div>

              <CardContent className="p-3">
                <h3 className="card-title line-clamp-2">
                  {rental.title}
                </h3>
                
                <div className="flex items-center gap-1 mb-2 text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs">{rental.location}</span>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Bed className="h-3 w-3" />
                    <span>{rental.bedrooms} bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-3 w-3" />
                    <span>{rental.bathrooms} bath</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {rental.amenities.slice(0, 3).map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                  {rental.amenities.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{rental.amenities.length - 3}
                    </Badge>
                  )}
                </div>

                <p className="card-text mb-3">
                  by {rental.landlord}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="card-price">{rental.price}</span>
                    <span className="text-muted-foreground text-xs sm:text-sm">{rental.period}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 text-xs h-7"
                    onClick={() => viewRentalDetails(rental.id)}
                  >
                    View Details
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-xs h-7">
                      Contact
                    </Button>
                    <WhatsAppChat
                      message={`Hi, I'm interested in ${rental.title} in ${rental.location}`}
                      size="sm"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8 sm:mt-12">
          <Button variant="outline" size="lg" className="text-xs sm:text-sm">
            Load More Properties
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rentals;
