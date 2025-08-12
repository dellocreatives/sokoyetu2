
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Star, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    user: "John Doe",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2 days ago",
    verified: true,
    comment: "Excellent product! Fast delivery and great communication from seller. The item was exactly as described and arrived in perfect condition. Highly recommend this seller!",
    helpful: 12,
    replies: [
      {
        id: 1,
        user: "TechHub Kenya",
        avatar: "/placeholder.svg",
        date: "1 day ago",
        comment: "Thank you for the positive feedback! We're glad you're satisfied with your purchase.",
        isSeller: true
      }
    ]
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "1 week ago",
    verified: true,
    comment: "Good quality phone, exactly as described. Packaging could be better but overall satisfied with the purchase. Would buy from this seller again.",
    helpful: 8,
    replies: []
  },
  {
    id: 3,
    user: "Mike Johnson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2 weeks ago",
    verified: false,
    comment: "Amazing deal! The product works perfectly and the seller was very responsive to my questions.",
    helpful: 15,
    replies: []
  },
  {
    id: 4,
    user: "Sarah Wilson",
    avatar: "/placeholder.svg",
    rating: 3,
    date: "3 weeks ago",
    verified: true,
    comment: "Product is okay but had some minor scratches that weren't mentioned in the description. Still functional though.",
    helpful: 3,
    replies: [
      {
        id: 2,
        user: "TechHub Kenya",
        avatar: "/placeholder.svg",
        date: "3 weeks ago",
        comment: "We apologize for the oversight. We've noted your feedback and will be more detailed in our descriptions going forward.",
        isSeller: true
      }
    ]
  }
];

const ProductReviews = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const productTitle = searchParams.get('product') || 'Product';
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [newReply, setNewReply] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  // Calculate rating statistics
  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    reviews.filter(review => review.rating === rating).length
  );

  const submitReview = () => {
    if (!newReview.comment.trim()) return;
    
    console.log("Review submitted:", newReview);
    setNewReview({ rating: 5, comment: '' });
  };

  const submitReply = (reviewId: number) => {
    if (!newReply.trim()) return;
    
    console.log("Reply submitted to review:", reviewId, newReply);
    setNewReply('');
    setReplyingTo(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="gap-2">
            <Link to={`/product/${id}`}>
              <ArrowLeft className="h-4 w-4" />
              Back to Product
            </Link>
          </Button>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Product Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Reviews for {productTitle}</CardTitle>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rating Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(averageRating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on {totalReviews} reviews
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating, index) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm w-8">{rating}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Progress value={(ratingCounts[index] / totalReviews) * 100} className="flex-1" />
                        <span className="text-sm text-muted-foreground w-8">
                          {ratingCounts[index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Write Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Write a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setNewReview({ ...newReview, rating: star })}
                          className="p-1"
                        >
                          <Star
                            className={`h-6 w-6 ${
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
                  />
                  <Button onClick={submitReview} className="w-full">
                    Submit Review
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold">Customer Reviews ({totalReviews})</h2>
              
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">{review.user}</h4>
                            {review.verified && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <p className="text-muted-foreground">{review.comment}</p>
                        
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="h-4 w-4" />
                            Helpful ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setReplyingTo(replyingTo === review.id ? null : review.id)}
                            className="gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            Reply
                          </Button>
                        </div>

                        {/* Replies */}
                        {review.replies.length > 0 && (
                          <div className="ml-8 space-y-4 border-l-2 border-muted pl-4">
                            {review.replies.map((reply) => (
                              <div key={reply.id} className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={reply.avatar} />
                                  <AvatarFallback>{reply.user[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm">{reply.user}</span>
                                    {reply.isSeller && (
                                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                                        Seller
                                      </Badge>
                                    )}
                                    <span className="text-xs text-muted-foreground">{reply.date}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1">{reply.comment}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Reply Form */}
                        {replyingTo === review.id && (
                          <div className="ml-8 space-y-3">
                            <Textarea
                              placeholder="Write a reply..."
                              value={newReply}
                              onChange={(e) => setNewReply(e.target.value)}
                              className="min-h-[80px]"
                            />
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => submitReply(review.id)}>
                                Post Reply
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => setReplyingTo(null)}>
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
      </div>

      <Footer />
    </div>
  );
};

export default ProductReviews;
