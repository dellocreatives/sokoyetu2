import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { MapPin, Bed, Bath, Wifi, Car, Shield, Calendar, Star, MessageCircle, Heart, Phone } from 'lucide-react';

// Mock rental data with updated images
const rental = {
  id: 1,
  title: "Luxury Apartment in Westlands",
  price: "KSh 75,000",
  period: "/month",
  images: [
    "/lovable-uploads/6c998c67-ce63-4271-a118-caaeccfa364e.png",
    "/lovable-uploads/81adc088-9490-4a47-b4b5-831351918694.png",
    "/lovable-uploads/f5352adf-f19e-40a9-a446-7a9d7a2a8e9b.png"
  ],
  location: "Westlands, Nairobi",
  bedrooms: 2,
  bathrooms: 2,
  amenities: ["WiFi", "Parking", "Security"],
  description: "A stunning, fully furnished apartment in the heart of Westlands. Enjoy breathtaking views and top-notch amenities.",
  landlord: {
    name: "Luxury Homes Ltd",
    avatar: "/placeholder.svg",
    rating: 4.7,
    totalProperties: 56,
    responseTime: "2 hours"
  },
  availability: "Immediately",
  deposit: "2 months rent",
  leaseTerm: "1 year minimum",
  type: "Apartment",
  size: "1200 sq ft",
  furnished: "Fully furnished",
  petPolicy: "No pets allowed"
};

const RentalDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <BackButton />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Property Images */}
          <div className="space-y-3 slide-in-up">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={rental.images[selectedImage]}
                alt={rental.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {rental.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all hover-scale ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Property Info */}
          <div className="space-y-4 fade-in-stagger">
            <div>
              <h1 className="text-2xl font-bold mb-2">{rental.title}</h1>
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">{rental.location}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">{rental.price}</span>
                <span className="text-base text-muted-foreground">{rental.period}</span>
                <Badge variant="default" className="text-xs">Available</Badge>
              </div>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Bed className="h-4 w-4 text-primary" />
                <span className="text-sm">{rental.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-4 w-4 text-primary" />
                <span className="text-sm">{rental.bathrooms} Bathrooms</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-medium text-sm mb-2">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {rental.amenities.map((amenity) => (
                  <Badge key={amenity} variant="outline" className="text-xs">
                    {amenity === 'WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                    {amenity === 'Parking' && <Car className="h-3 w-3 mr-1" />}
                    {amenity === 'Security' && <Shield className="h-3 w-3 mr-1" />}
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Landlord Info */}
            <Card>
              <CardContent className="flex items-center gap-3 p-4">
                <Avatar>
                  <AvatarImage src={rental.landlord.avatar} />
                  <AvatarFallback className="text-sm">{rental.landlord.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{rental.landlord.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {rental.landlord.rating}
                    </span>
                    <span>{rental.landlord.totalProperties} properties</span>
                    <span>Responds in {rental.landlord.responseTime}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Chat
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <Phone className="h-3 w-3 mr-1" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">{rental.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Viewing
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setLiked(!liked)}
              >
                <Heart className={`h-4 w-4 ${liked ? 'fill-current text-red-500' : ''}`} />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-green-500" />
                Verified Landlord
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3 text-blue-500" />
                Flexible Viewing
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Property Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Type:</span>
                  <span className="font-medium text-xs">Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Size:</span>
                  <span className="font-medium text-xs">1200 sq ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Furnished:</span>
                  <span className="font-medium text-xs">Semi-furnished</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Pet Policy:</span>
                  <span className="font-medium text-xs">No pets</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Rental Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Deposit:</span>
                  <span className="font-medium text-xs">2 months rent</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Lease Term:</span>
                  <span className="font-medium text-xs">1 year minimum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Available:</span>
                  <span className="font-medium text-xs">Immediately</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-xs">Utilities:</span>
                  <span className="font-medium text-xs">Excluded</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RentalDetails;
