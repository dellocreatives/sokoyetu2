import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Upload, Package, DollarSign, Camera, MapPin, Star, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Sell = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const categories = [
    'Electronics', 'Fashion', 'Home & Living', 'Vehicles', 
    'Health & Beauty', 'Baby & Kids', 'Sports & Outdoors', 
    'Agriculture', 'Services'
  ];

  const sellingTips = [
    { icon: Camera, title: "High-Quality Photos", desc: "Use clear, well-lit images from multiple angles" },
    { icon: DollarSign, title: "Competitive Pricing", desc: "Research similar items to set the right price" },
    { icon: Package, title: "Detailed Description", desc: "Include condition, features, and specifications" },
    { icon: MapPin, title: "Accurate Location", desc: "Help buyers find you easily" }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Wide Reach", desc: "Connect with thousands of potential buyers", color: "text-emerald-400" },
    { icon: Star, title: "Trusted Platform", desc: "Secure transactions and verified users", color: "text-blue-400" },
    { icon: Package, title: "Easy Listing", desc: "Simple process to get your items online", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Start Selling on SokoXpress
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Turn your unused items into cash. Join thousands of sellers on Kenya's most trusted marketplace.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Package className="w-4 h-4 mr-2" />
              Free Listings
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <Star className="w-4 h-4 mr-2" />
              Verified Buyers
            </Badge>
            <Badge variant="outline" className="text-sm py-2 px-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Quick Sales
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Listing Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Create Your Listing
              </CardTitle>
              <CardDescription>
                Fill in the details to list your item for sale
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Item Title</Label>
                  <Input id="title" placeholder="e.g., iPhone 14 Pro Max" />
                </div>
                <div>
                  <Label htmlFor="price">Price (KSh)</Label>
                  <Input id="price" placeholder="25,000" type="number" />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your item's condition, features, and any important details..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Brand New</SelectItem>
                      <SelectItem value="like-new">Like New</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g., Nairobi, Westlands" />
                </div>
              </div>

              <div>
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Camera className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">Drop your images here or click to browse</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Upload className="w-4 h-4 mr-2" />
                List Item for Sale
              </Button>
            </CardContent>
          </Card>

          {/* Tips & Benefits */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Why Sell on SokoXpress?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-card/50 ${benefit.color}`}>
                      <benefit.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Selling Tips</CardTitle>
                <CardDescription>Maximize your chances of a quick sale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {sellingTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{tip.title}</h4>
                      <p className="text-sm text-muted-foreground">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="glass-card mb-12">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                <p className="text-muted-foreground">Active Buyers</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                <p className="text-muted-foreground">Successful Sales</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">24h</div>
                <p className="text-muted-foreground">Average Sale Time</p>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">0%</div>
                <p className="text-muted-foreground">Listing Fees</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;