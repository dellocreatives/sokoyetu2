import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import PaymentMethodsBanner from './PaymentMethodsBanner';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/40">
      {/* Payment Methods Banner */}
      <PaymentMethodsBanner />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/4795a0b2-da78-441a-a132-590b310df02c.png"
                alt="SokoXpress - Your Market, Your Speed"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Kenya's premier marketplace for buying, selling, and renting.
              Your trusted platform for all transactions.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                Download App
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>
            <div className="space-y-2 text-sm">
              <Link to="/categories" className="block text-muted-foreground hover:text-primary transition-colors">
                All Categories
              </Link>
              <Link to="/electronics" className="block text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </Link>
              <Link to="/fashion" className="block text-muted-foreground hover:text-primary transition-colors">
                Fashion
              </Link>
              <Link to="/vehicles" className="block text-muted-foreground hover:text-primary transition-colors">
                Vehicles
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Real Estate</h3>
            <div className="space-y-2 text-sm">
              <Link to="/rentals" className="block text-muted-foreground hover:text-primary transition-colors">
                Browse Rentals
              </Link>
              <Link to="/apartments" className="block text-muted-foreground hover:text-primary transition-colors">
                Apartments
              </Link>
              <Link to="/houses" className="block text-muted-foreground hover:text-primary transition-colors">
                Houses
              </Link>
              <Link to="/commercial" className="block text-muted-foreground hover:text-primary transition-colors">
                Commercial
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/safety" className="block text-muted-foreground hover:text-primary transition-colors">
                Safety Tips
              </Link>
              <Link to="/disputes" className="block text-muted-foreground hover:text-primary transition-colors">
                Report Issue
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 SokoXpress. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
