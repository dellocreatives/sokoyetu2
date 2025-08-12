
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Truck, CreditCard, Shield, Clock } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedArea, setSelectedArea] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    area: '',
    additionalInfo: ''
  });

  const freeDeliveryAreas = [
    'CBD', 'Westlands', 'Kilimani', 'Lavington', 'Karen', 'Runda', 
    'Kileleshwa', 'Parklands', 'Upperhill', 'Hurlingham'
  ];

  const cartItems = [
    { name: "iPhone 15 Pro Max 256GB", price: 180000, quantity: 1 },
    { name: "MacBook Air M2 13-inch", price: 165000, quantity: 1 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isEligibleForFreeDelivery = freeDeliveryAreas.includes(selectedArea);
  const shipping = isEligibleForFreeDelivery ? 0 : 1500;
  const tax = subtotal * 0.16;
  const total = subtotal + shipping + tax;

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold gradient-text">Checkout</h1>
          <p className="text-muted-foreground">Complete your order details</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={shippingInfo.firstName}
                      onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={shippingInfo.lastName}
                      onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                    placeholder="Enter full address"
                  />
                </div>

                <div>
                  <Label htmlFor="area">Area</Label>
                  <Select value={selectedArea} onValueChange={setSelectedArea}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                    <SelectContent>
                      {freeDeliveryAreas.map((area) => (
                        <SelectItem key={area} value={area}>
                          <div className="flex items-center justify-between w-full">
                            <span>{area}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">Free Delivery</Badge>
                          </div>
                        </SelectItem>
                      ))}
                      <SelectItem value="other">Other Area (+KSh 1,500)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                  <Input
                    id="additionalInfo"
                    value={shippingInfo.additionalInfo}
                    onChange={(e) => setShippingInfo({...shippingInfo, additionalInfo: e.target.value})}
                    placeholder="Apartment number, building name, etc."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="mpesa" 
                      checked={paymentMethod === 'mpesa'}
                      onCheckedChange={() => setPaymentMethod('mpesa')}
                    />
                    <Label htmlFor="mpesa" className="flex items-center gap-2">
                      M-Pesa
                      <Badge variant="secondary">Popular</Badge>
                    </Label>
                  </div>

                  {isEligibleForFreeDelivery && (
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="cod" 
                        checked={paymentMethod === 'cod'}
                        onCheckedChange={() => setPaymentMethod('cod')}
                      />
                      <Label htmlFor="cod" className="flex items-center gap-2">
                        Pay After Delivery
                        <Badge variant="default">Available in your area</Badge>
                      </Label>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="card" 
                      checked={paymentMethod === 'card'}
                      onCheckedChange={() => setPaymentMethod('card')}
                    />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                </div>

                {isEligibleForFreeDelivery && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-800">
                      <Shield className="h-4 w-4" />
                      <span className="font-semibold">Free Delivery & Pay After Delivery Available!</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      Your area qualifies for free delivery and you can pay after receiving your items.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="truncate mr-2">{item.name}</span>
                    <span>KSh {item.price.toLocaleString()}</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className={isEligibleForFreeDelivery ? 'text-green-600 font-medium' : ''}>
                    {shipping === 0 ? 'FREE' : `KSh ${shipping.toLocaleString()}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax (VAT 16%)</span>
                  <span>KSh {tax.toLocaleString()}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-4">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    <span>Free delivery in selected Nairobi areas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Delivery within 24-48 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Secure payment & buyer protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              className="w-full"
              onClick={handleProceedToPayment}
              disabled={!paymentMethod || !selectedArea}
            >
              Proceed to Payment
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
