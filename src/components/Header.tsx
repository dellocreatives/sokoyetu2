
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home,
  Menu,
  X,
  User,
  Settings,
  Bell,
  Shield,
  CreditCard,
  LogOut,
  UserCircle,
  Store,
  DollarSign,
  Building,
  ShoppingCart,
  Package,
  Truck,
  Clock,
  ChevronDown
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import CartDropdown from './CartDropdown';
import NotificationDropdown from './NotificationDropdown';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
    localStorage.removeItem('userToken');
    navigate('/');
    console.log("User signed out");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
            <Link to="/" className="flex items-center shrink-0">
              <img 
                src="/lovable-uploads/4795a0b2-da78-441a-a132-590b310df02c.png" 
                alt="SokoXpress - Your Market, Your Speed" 
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            
            <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
              <Link 
                to="/" 
                className="text-xs sm:text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <Home className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
              <Link 
                to="/marketplace" 
                className="text-xs sm:text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <Store className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden lg:inline">Marketplace</span>
              </Link>
              <Link 
                to="/rentals" 
                className="text-xs sm:text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden lg:inline">Rentals</span>
              </Link>
              <Link 
                to="/sell" 
                className="text-xs sm:text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden lg:inline">Sell</span>
              </Link>
            </nav>
          </div>

          {/* Compact search bar for medium and larger screens */}
          <div className="hidden md:block flex-1 max-w-xs lg:max-w-md mx-2 lg:mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    <span className="hidden lg:inline text-xs">Orders</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-popover border border-border">
                  <DropdownMenuItem asChild>
                    <Link to="/track-order" className="flex items-center gap-2 cursor-pointer hover:bg-accent transition-colors">
                      <Truck className="h-4 w-4" />
                      Track Order
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/order-history" className="flex items-center gap-2 cursor-pointer hover:bg-accent transition-colors">
                      <Clock className="h-4 w-4" />
                      Order History
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <NotificationDropdown />
              <CartDropdown />
              
              {/* Settings Dropdown with Hover */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:bg-accent group p-1 sm:p-2">
                    <Settings className="h-4 w-4 group-hover:rotate-90 transition-transform duration-200" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border border-border" align="end">
                  <DropdownMenuLabel>Settings</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem asChild>
                    <Link to="/settings/profile" className="flex items-center cursor-pointer hover:bg-accent transition-colors">
                      <UserCircle className="mr-2 h-4 w-4" />
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/settings/notifications" className="flex items-center cursor-pointer hover:bg-accent transition-colors">
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/settings/privacy" className="flex items-center cursor-pointer hover:bg-accent transition-colors">
                      <Shield className="mr-2 h-4 w-4" />
                      Privacy & Security
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild>
                    <Link to="/settings/payments" className="flex items-center cursor-pointer hover:bg-accent transition-colors">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem 
                    onClick={handleSignOut}
                    className="text-destructive cursor-pointer hover:bg-destructive/10 transition-colors"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="hidden sm:flex items-center space-x-1 sm:space-x-2">
              <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm px-2 sm:px-3">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" asChild className="text-xs sm:text-sm px-2 sm:px-3">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-border/40 py-4">
            <div className="mb-4">
              <SearchBar />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link to="/marketplace" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                <Store className="h-4 w-4" />
                Marketplace
              </Link>
              <Link to="/rentals" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                <Building className="h-4 w-4" />
                Rentals
              </Link>
              <Link to="/sell" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Sell
              </Link>
              <div className="flex items-center space-x-4 pt-2">
                <Link to="/track-order" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  Track Order
                </Link>
                <Link to="/order-history" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Orders
                </Link>
                <NotificationDropdown />
                <CartDropdown />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <DropdownMenuLabel>Settings</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/settings/profile" className="flex items-center cursor-pointer">
                        <UserCircle className="mr-2 h-4 w-4" />
                        Profile Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings/notifications" className="flex items-center cursor-pointer">
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings/privacy" className="flex items-center cursor-pointer">
                        <Shield className="mr-2 h-4 w-4" />
                        Privacy & Security
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings/payments" className="flex items-center cursor-pointer">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Payment Methods
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/40">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
