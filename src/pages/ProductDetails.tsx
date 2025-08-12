
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star, Heart, ShoppingCart, MessageCircle, Send, MapPin, Shield, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock product data
const product = {
  id: 1,
  title: "iPhone 15 Pro Max 256GB",
  price: "KSh 180,000",
  originalPrice: "KSh 200,000",
  images: [
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=400&fit=crop"
  ],
  rating: 4.8,
  totalReviews: 124,
  seller: {
    name: "TechHub Kenya",
    avatar: "/placeholder.svg",
    rating: 4.9,
    totalSales: 1250,
    responseTime: "1 hour"
  },
  location: "Nairobi, Kenya",
  description: "Brand new iPhone 15 Pro Max with 256GB storage. Comes with original box, charger, and 1-year warranty. Perfect condition, never used.",
  specifications: {
    Brand: "Apple",
    Model: "iPhone 15 Pro Max",
    Storage: "256GB",
    Color: "Natural Titanium",
    Condition: "Brand New"
  }
};

const reviews = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2 days ago",
    comment: "Excellent product! Fast delivery and great communication from seller.",
    replies: [
      {
        id: 1,
        user: "TechHub Kenya",
        avatar: "/placeholder.svg",
        date: "1 day ago",
        comment: "Thank you for the positive feedback! We're glad you're satisfied with your purchase."
      }
    ]
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "1 week ago",
    comment: "Good quality phone, exactly as described. Packaging could be better but overall satisfied.",
    replies: []
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [newReply, setNewReply] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [chatMessage, setChatMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const addToCart = () => {
    toast({
      title: "Added to Cart",
      description: "Product has been added to your cart.",
    });
    console.log("Product added to cart");
  };

  const submitReview = () => {
    if (!newReview.comment.trim()) return;
    
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    console.log("Review submitted:", newReview);
    setNewReview({ rating: 5, comment: '' });
  };

  const submitReply = (reviewId: number) => {
    if (!newReply.trim()) return;
    
    toast({
      title: "Reply Submitted",
      description: "Your reply has been posted.",
    });
    console.log("Reply submitted to review:", reviewId, newReply);
    setNewReply('');
    setReplyingTo(null);
  };

  const sendChatMessage = () => {
    if (!chatMessage.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the seller.",
    });
    console.log("Chat message sent:", chatMessage);
    setChatMessage('');
  };

  const navigateToChat = () => {
    const params = new URLSearchParams({
      seller: product.seller.name,
      product: product.title
    });
    navigate(`/product/${id}/chat?${params.toString()}`);
  };

  const navigateToReviews = () => {
    const params = new URLSearchParams({
      product: product.title
    });
    navigate(`/product/${id}/reviews?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <BackButton />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Product Images */}
          <div className="space-y-3">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-muted'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 mb-3">
                <button 
                  onClick={navigateToReviews}
                  className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2 hover:text-primary">
                    {product.rating} ({product.totalReviews} reviews)
                  </span>
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <span className="text-base text-muted-foreground line-through">{product.originalPrice}</span>
                <Badge variant="destructive" className="text-xs">Save 10%</Badge>
              </div>
            </div>

            {/* Seller Info */}
            <Card>
              <CardContent className="flex items-center gap-3 p-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={product.seller.avatar} />
                  <AvatarFallback className="text-sm">{product.seller.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">{product.seller.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {product.seller.rating}
                    </span>
                    <span>{product.seller.totalSales} sales</span>
                    <span>Responds in {product.seller.responseTime}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={navigateToChat}
                  className="text-xs"
                >
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Chat
                </Button>
              </CardContent>
            </Card>

            {/* Product Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {product.location}
              </div>
              
              <p className="text-sm text-muted-foreground">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-muted-foreground text-xs">{key}:</span>
                    <span className="font-medium text-xs">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button className="flex-1" onClick={addToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3 text-green-500" />
                Verified Seller
              </div>
              <div className="flex items-center gap-1">
                <Truck className="h-3 w-3 text-blue-500" />
                Fast Delivery
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        {isChatOpen && (
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <MessageCircle className="h-4 w-4" />
                Chat with {product.seller.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="h-24 bg-muted rounded-lg p-3 overflow-y-auto">
                <p className="text-xs text-muted-foreground">Start a conversation with the seller...</p>
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                  className="text-sm"
                />
                <Button onClick={sendChatMessage} size="sm">
                  <Send className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Write Review */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Write a Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="block text-xs font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1"
                    >
                      <Star
                        className={`h-5 w-5 ${
                          star <= newReview.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <Textarea
                placeholder="Share your experience with this product..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="text-sm min-h-[80px]"
              />
              <Button onClick={submitReview} className="w-full text-sm">
                Submit Review
              </Button>
            </CardContent>
          </Card>

          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Customer Reviews</h2>
              <Button variant="outline" onClick={navigateToReviews} size="sm" className="text-xs">
                View All Reviews
              </Button>
            </div>
            
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback className="text-xs">{review.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm">{review.user}</h4>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
                        className="text-xs h-6"
                      >
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Reply
                      </Button>

                      {/* Replies */}
                      {review.replies.length > 0 && (
                        <div className="ml-6 space-y-3 border-l-2 border-muted pl-3">
                          {review.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={reply.avatar} />
                                <AvatarFallback className="text-xs">{reply.user[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-xs">{reply.user}</span>
                                  <span className="text-xs text-muted-foreground">{reply.date}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{reply.comment}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Form */}
                      {replyingTo === review.id && (
                        <div className="ml-6 space-y-2">
                          <Textarea
                            placeholder="Write a reply..."
                            value={newReply}
                            onChange={(e) => setNewReply(e.target.value)}
                            className="min-h-[60px] text-xs"
                          />
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => submitReply(review.id)} className="text-xs h-6">
                              Post Reply
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)} className="text-xs h-6">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
