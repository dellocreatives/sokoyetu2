import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Package, Eye, Truck, Star, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "shipped",
    total: "KSh 180,000",
    items: [
      {
        id: 1,
        title: "iPhone 15 Pro Max",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop",
        price: "KSh 180,000",
        quantity: 1
      }
    ],
    seller: "TechHub Kenya",
    estimatedDelivery: "2024-01-18"
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-10",
    status: "delivered",
    total: "KSh 85,000",
    items: [
      {
        id: 2,
        title: "Samsung 65\" QLED TV",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=100&h=100&fit=crop",
        price: "KSh 85,000",
        quantity: 1
      }
    ],
    seller: "ElectroMart",
    deliveredDate: "2024-01-12"
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-05",
    status: "cancelled",
    total: "KSh 35,000",
    items: [
      {
        id: 3,
        title: "Sony WH-1000XM5",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
        price: "KSh 35,000",
        quantity: 1
      }
    ],
    seller: "Audio Pro",
    cancelledDate: "2024-01-06"
  }
];

const statusColors = {
  pending: "secondary",
  confirmed: "default",
  shipped: "outline",
  delivered: "default",
  cancelled: "destructive"
} as const;

const OrderHistory = () => {
  const { toast } = useToast();
  const [orders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter !== 'all') {
      const orderDate = new Date(order.date);
      const now = new Date();
      const daysDiff = Math.floor((now.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24));
      
      switch (dateFilter) {
        case 'week':
          matchesDate = daysDiff <= 7;
          break;
        case 'month':
          matchesDate = daysDiff <= 30;
          break;
        case 'quarter':
          matchesDate = daysDiff <= 90;
          break;
      }
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  const reorderItems = (orderId: string) => {
    toast({
      title: "Items Added to Cart",
      description: "Previous order items have been added to your cart"
    });
    console.log("Reordering items from order:", orderId);
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const getStatusDescription = (order: any) => {
    switch (order.status) {
      case 'shipped':
        return `Estimated delivery: ${order.estimatedDelivery}`;
      case 'delivered':
        return `Delivered on ${order.deliveredDate}`;
      case 'cancelled':
        return `Cancelled on ${order.cancelledDate}`;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Order History</h1>
          
          {/* Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Search orders or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="week">Last Week</SelectItem>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last 3 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No orders found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm || statusFilter !== 'all' || dateFilter !== 'all' 
                      ? 'Try adjusting your filters to see more results.'
                      : 'You haven\'t placed any orders yet.'
                    }
                  </p>
                  <Button asChild>
                    <Link to="/marketplace">Start Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Order {order.id}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {order.date}
                          </div>
                          <span>•</span>
                          <span>{order.seller}</span>
                          <span>•</span>
                          <span className="font-semibold">{order.total}</span>
                        </div>
                      </div>
                      <Badge variant={statusColors[order.status as keyof typeof statusColors]}>
                        {getStatusText(order.status)}
                      </Badge>
                    </div>
                    {getStatusDescription(order) && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {getStatusDescription(order)}
                      </p>
                    )}
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Order Items */}
                      <div className="space-y-3">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium line-clamp-1">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                              <p className="font-semibold">{item.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/track-order?order=${order.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                        
                        {order.status === 'shipped' && (
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/track-order?order=${order.id}`}>
                              <Truck className="h-4 w-4 mr-2" />
                              Track Package
                            </Link>
                          </Button>
                        )}
                        
                        {order.status === 'delivered' && (
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Rate & Review
                          </Button>
                        )}
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => reorderItems(order.id)}
                        >
                          <RotateCcw className="h-4 w-4 mr-2" />
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderHistory;