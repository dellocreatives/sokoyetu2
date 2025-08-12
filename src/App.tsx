
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingChatSupport from "@/components/FloatingChatSupport";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sell from "./pages/Sell";
import ListProperty from "./pages/ListProperty";
import Marketplace from "./pages/Marketplace";
import Rentals from "./pages/Rentals";
import ProductDetails from "./pages/ProductDetails";
import RentalDetails from "./pages/RentalDetails";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import TrackOrder from "./pages/TrackOrder";
import OrderHistory from "./pages/OrderHistory";
import FlashSales from "./pages/FlashSales";
import BrowseCategories from "./pages/BrowseCategories";
import ViewAllProducts from "./pages/ViewAllProducts";
import SuggestCategory from "./pages/SuggestCategory";
import ProductReviews from "./pages/ProductReviews";
import ChatWithSeller from "./pages/ChatWithSeller";
import ProfileSettings from "./pages/settings/ProfileSettings";
import PaymentMethods from "./pages/settings/PaymentMethods";
import NotificationSettings from "./pages/settings/NotificationSettings";
import PrivacySettings from "./pages/settings/PrivacySettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/rentals/:id" element={<RentalDetails />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/flash-sales" element={<FlashSales />} />
            <Route path="/browse-categories" element={<BrowseCategories />} />
            <Route path="/products" element={<ViewAllProducts />} />
            <Route path="/suggest-category" element={<SuggestCategory />} />
            <Route path="/product/:id/reviews" element={<ProductReviews />} />
            <Route path="/chat/:sellerId" element={<ChatWithSeller />} />
            <Route path="/settings/profile" element={<ProfileSettings />} />
            <Route path="/settings/payment-methods" element={<PaymentMethods />} />
            <Route path="/settings/notifications" element={<NotificationSettings />} />
            <Route path="/settings/privacy" element={<PrivacySettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingChatSupport />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
