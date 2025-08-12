
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package, Truck, Clock, Home, Receipt } from 'lucide-react';

const OrderConfirmation = () => {
  const orderNumber = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order. We've received your payment and your order is being processed.
          </p>

          {/* Order Details Card */}
          <Card className="glass-card text-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Order Number:</span>
                <Badge variant="outline" className="font-mono">{orderNumber}</Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Payment Method:</span>
                <span>M-Pesa</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Total Paid:</span>
                <span className="font-bold text-green-600">KSh 361,600</span>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Items Ordered:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>iPhone 15 Pro Max 256GB</span>
                    <span>KSh 180,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MacBook Air M2 13-inch</span>
                    <span>KSh 165,000</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Delivery Information:</h4>
                <div className="text-sm space-y-1">
                  <p>Delivery: <span className="text-green-600 font-medium">FREE</span></p>
                  <p>Estimated Delivery: <span className="font-medium">24-48 hours</span></p>
                  <p>Payment: <span className="text-green-600 font-medium">Completed</span></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="glass-card text-left mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                What's Next?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Order Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    We're preparing your items for shipment. You'll receive an email confirmation shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 rounded-full p-2">
                  <Truck className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Your order will be delivered within 24-48 hours. We'll send you tracking information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full" asChild>
              <Link to="/track-order">
                <Package className="h-4 w-4 mr-2" />
                Track Your Order
              </Link>
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <Link to="/marketplace">
                  Continue Shopping
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>

          {/* Support Info */}
          <Card className="glass-card mt-6">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                Need help with your order? Contact our support team at{' '}
                <a href="tel:+254700000000" className="text-primary hover:underline">
                  +254 700 000 000
                </a>{' '}
                or{' '}
                <a href="mailto:support@marketplace.com" className="text-primary hover:underline">
                  support@marketplace.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
