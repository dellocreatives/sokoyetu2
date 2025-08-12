import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MapPin, Package, Truck, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock order data
const mockOrder = {
  id: "ORD-2024-001",
  status: "shipped",
  items: [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: "KSh 180,000",
      quantity: 1,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop"
    }
  ],
  total: "KSh 180,000",
  orderDate: "2024-01-15",
  estimatedDelivery: "2024-01-18",
  trackingNumber: "TRK123456789",
  seller: {
    name: "TechHub Kenya",
    phone: "+254 700 123 456",
    email: "orders@techhub.co.ke"
  },
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street, Westlands",
    city: "Nairobi",
    phone: "+254 700 987 654"
  },
  timeline: [
    {
      status: "ordered",
      date: "2024-01-15 10:30 AM",
      description: "Order placed successfully",
      completed: true
    },
    {
      status: "confirmed",
      date: "2024-01-15 2:15 PM",
      description: "Order confirmed by seller",
      completed: true
    },
    {
      status: "shipped",
      date: "2024-01-16 9:00 AM",
      description: "Package shipped from Nairobi",
      completed: true
    },
    {
      status: "in_transit",
      date: "Expected: 2024-01-17 12:00 PM",
      description: "Out for delivery",
      completed: false
    },
    {
      status: "delivered",
      date: "Expected: 2024-01-18 6:00 PM",
      description: "Package delivered",
      completed: false
    }
  ]
};

const statusColors = {
  ordered: "bg-blue-500",
  confirmed: "bg-yellow-500",
  shipped: "bg-orange-500",
  in_transit: "bg-purple-500",
  delivered: "bg-green-500"
};

const TrackOrder = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('order') || '');
  const [order, setOrder] = useState(trackingNumber ? mockOrder : null);

  const trackOrder = () => {
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter your order number or tracking number",
        variant: "destructive"
      });
      return;
    }

    // Simulate order lookup
    setOrder(mockOrder);
    toast({
      title: "Order Found",
      description: "Your order details have been loaded"
    });
  };

  const getProgressPercentage = () => {
    const completedSteps = order?.timeline.filter(step => step.completed).length || 0;
    const totalSteps = order?.timeline.length || 1;
    return (completedSteps / totalSteps) * 100;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ordered':
        return <Package className="h-5 w-5" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'in_transit':
        return <MapPin className="h-5 w-5" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Track Your Order</h1>
          
          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Enter Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Enter order number or tracking number (e.g., ORD-2024-001)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={trackOrder}>
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {order && (
            <div className="space-y-8">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Order #{order.id}</CardTitle>
                      <p className="text-muted-foreground">Placed on {order.orderDate}</p>
                    </div>
                    <Badge variant={order.status === 'delivered' ? 'default' : 'secondary'}>
                      {order.status.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Order Items</h3>
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            <p className="font-semibold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Delivery Information</h3>
                        <div className="space-y-2 text-sm">
                          <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                          <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
                          <p><strong>Total:</strong> {order.total}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Shipping Address</h3>
                        <div className="text-sm space-y-1">
                          <p>{order.shippingAddress.name}</p>
                          <p>{order.shippingAddress.address}</p>
                          <p>{order.shippingAddress.city}</p>
                          <p>{order.shippingAddress.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Progress</CardTitle>
                  <Progress value={getProgressPercentage()} className="w-full" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.timeline.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`p-2 rounded-full text-white ${
                          step.completed ? statusColors[step.status as keyof typeof statusColors] : 'bg-gray-400'
                        }`}>
                          {getStatusIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className={`font-medium ${step.completed ? 'text-primary' : 'text-muted-foreground'}`}>
                                {step.description}
                              </h3>
                              <p className="text-sm text-muted-foreground">{step.date}</p>
                            </div>
                            {step.completed && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Seller Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Seller Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">{order.seller.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-sm">{order.seller.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <span className="text-sm">{order.seller.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`tel:${order.seller.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call Seller
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`mailto:${order.seller.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email Seller
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackOrder;