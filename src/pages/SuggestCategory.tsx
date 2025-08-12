
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Send, Star, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const SuggestCategory = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    description: '',
    reasoning: '',
    priority: '',
    email: ''
  });

  const recentSuggestions = [
    { name: "Pet Supplies", votes: 45, status: "Under Review" },
    { name: "Art & Crafts", votes: 32, status: "Approved" },
    { name: "Health & Beauty", votes: 28, status: "Under Review" },
    { name: "Garden & Outdoor", votes: 23, status: "Under Review" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Suggest New Category</h1>
            <p className="text-muted-foreground text-lg">
              Help us expand our marketplace by suggesting new categories
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Category Suggestion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="categoryName">Category Name *</Label>
                    <Input
                      id="categoryName"
                      placeholder="e.g., Pet Supplies, Sports Equipment"
                      value={formData.categoryName}
                      onChange={(e) => setFormData(prev => ({ ...prev, categoryName: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Category Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what items would be included in this category..."
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="reasoning">Why is this category needed? *</Label>
                    <Textarea
                      id="reasoning"
                      placeholder="Explain why this category would benefit the marketplace and its users..."
                      rows={4}
                      value={formData.reasoning}
                      onChange={(e) => setFormData(prev => ({ ...prev, reasoning: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label>Priority Level</Label>
                    <Select value={formData.priority} onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this category?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Nice to have</SelectItem>
                        <SelectItem value="medium">Medium - Would be useful</SelectItem>
                        <SelectItem value="high">High - Highly needed</SelectItem>
                        <SelectItem value="critical">Critical - Essential for marketplace</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll notify you when your suggestion is reviewed
                    </p>
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Suggestion
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Suggestions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <h4 className="font-medium">{suggestion.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={suggestion.status === 'Approved' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {suggestion.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {suggestion.votes} votes
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Be specific about the category scope</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Explain the market demand</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Consider existing categories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Provide clear reasoning</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>1. Our team reviews your suggestion within 3-5 business days</p>
                  <p>2. We evaluate market demand and technical feasibility</p>
                  <p>3. If approved, the category is added to our roadmap</p>
                  <p>4. You'll be notified of the decision via email</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuggestCategory;
