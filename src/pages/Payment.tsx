
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Smartphone, Shield, CheckCircle } from 'lucide-react';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('mpesa');
  const [mpesaPhone, setMpesaPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const total = 361600; // Example total from previous page

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      navigate('/order-confirmation');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold gradient-text">Payment</h1>
          <p className="text-muted-foreground">Complete your payment securely</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Amount */}
              <div className="bg-primary/10 rounded-lg p-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-3xl font-bold text-primary">KSh {total.toLocaleString()}</p>
                </div>
              </div>

              {/* M-Pesa Payment */}
              {paymentMethod === 'mpesa' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 border rounded-lg bg-green-50 border-green-200">
                    <Smartphone className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-800">M-Pesa Payment</h3>
                      <p className="text-sm text-green-700">Pay securely using your M-Pesa account</p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mpesaPhone">M-Pesa Phone Number</Label>
                    <Input
                      id="mpesaPhone"
                      type="tel"
                      value={mpesaPhone}
                      onChange={(e) => setMpesaPhone(e.target.value)}
                      placeholder="254XXXXXXXXX"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter your M-Pesa registered phone number
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">How it works:</h4>
                    <ol className="text-sm text-blue-700 space-y-1">
                      <li>1. Enter your M-Pesa phone number</li>
                      <li>2. Click "Pay Now" to initiate payment</li>
                      <li>3. You'll receive an M-Pesa prompt on your phone</li>
                      <li>4. Enter your M-Pesa PIN to complete payment</li>
                    </ol>
                  </div>
                </div>
              )}

              {/* Security Info */}
              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                <Shield className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium mb-1">Secure Payment</p>
                  <p className="text-muted-foreground">
                    Your payment information is encrypted and secure. We never store your payment details.
                  </p>
                </div>
              </div>

              <Separator />

              {/* Order Summary */}
              <div className="space-y-3">
                <h3 className="font-semibold">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>iPhone 15 Pro Max 256GB</span>
                    <span>KSh 180,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MacBook Air M2 13-inch</span>
                    <span>KSh 165,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (VAT 16%)</span>
                    <span>KSh 55,200</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>KSh {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                onClick={handlePayment}
                disabled={isProcessing || !mpesaPhone}
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    Processing Payment...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Pay KSh {total.toLocaleString()}
                  </div>
                )}
              </Button>

              {isProcessing && (
                <div className="text-center text-sm text-muted-foreground">
                  <p>Please check your phone for the M-Pesa payment prompt</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Payment;
