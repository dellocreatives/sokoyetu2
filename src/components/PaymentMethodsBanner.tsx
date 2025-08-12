import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Smartphone, 
  Bitcoin, 
  Wallet,
  Shield,
  CheckCircle
} from 'lucide-react';

const paymentMethods = [
  {
    name: "M-Pesa",
    icon: Smartphone,
    image: "/lovable-uploads/87ca1d01-b655-43fd-882e-6c91fab707b9.png",
    description: "Mobile Money",
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Visa",
    icon: CreditCard,
    image: "/lovable-uploads/a57c083f-8134-41ed-b6b3-234853eac9a5.png",
    description: "Credit & Debit Cards",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "PayPal",
    icon: Wallet,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=80&fit=crop",
    description: "Digital Wallet",
    color: "from-blue-400 to-blue-500"
  },
  {
    name: "Bitcoin",
    icon: Bitcoin,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=120&h=80&fit=crop",
    description: "Cryptocurrency",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Crypto",
    icon: Bitcoin,
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=120&h=80&fit=crop",
    description: "Digital Currency",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Skrill",
    icon: Wallet,
    image: "/lovable-uploads/29754f98-7cea-4bd7-b153-4aea750cbb6a.png",
    description: "E-Wallet",
    color: "from-purple-400 to-purple-600"
  }
];

const PaymentMethodsBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-emerald-400 to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <Badge variant="outline" className="bg-primary/10 border-primary/30 text-primary px-4 py-2">
              Secure Payments
            </Badge>
            <CheckCircle className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-primary to-emerald-400 bg-clip-text text-transparent">
            We Accept Multiple Payment Methods
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose from a variety of secure payment options for your convenience
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {paymentMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card 
                key={method.name}
                className="group relative overflow-hidden bg-gradient-to-br from-gray-800/60 to-gray-700/40 border-gray-600/30 hover:border-primary/30 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 text-center">
                  {/* Payment Method Image/Icon */}
                  <div className="relative mb-3">
                    <div className={`w-16 h-10 mx-auto rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center overflow-hidden`}>
                      <img 
                        src={method.image} 
                        alt={method.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Method Info */}
                  <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-primary transition-colors">
                    {method.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {method.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Security Note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">
              All transactions are secured with 256-bit SSL encryption
            </span>
            <CheckCircle className="w-5 h-5 text-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsBanner;
