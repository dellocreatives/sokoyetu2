
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Bell, Mail, Smartphone, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsNotifications: false,
    newMessages: true,
    orderUpdates: true,
    promotions: false,
  });
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your notification preferences have been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl gradient-text">Notification Settings</CardTitle>
                  <CardDescription>
                    Manage how you receive notifications
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notification Methods</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="email">Email Notifications</Label>
                  </div>
                  <Switch
                    id="email"
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="push">Push Notifications</Label>
                  </div>
                  <Switch
                    id="push"
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="sms">SMS Notifications</Label>
                  </div>
                  <Switch
                    id="sms"
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({...settings, smsNotifications: checked})}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Notification Types</h3>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="messages">New Messages</Label>
                  <Switch
                    id="messages"
                    checked={settings.newMessages}
                    onCheckedChange={(checked) => setSettings({...settings, newMessages: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="orders">Order Updates</Label>
                  <Switch
                    id="orders"
                    checked={settings.orderUpdates}
                    onCheckedChange={(checked) => setSettings({...settings, orderUpdates: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="promotions">Promotions & Offers</Label>
                  <Switch
                    id="promotions"
                    checked={settings.promotions}
                    onCheckedChange={(checked) => setSettings({...settings, promotions: checked})}
                  />
                </div>
              </div>
              
              <Button onClick={handleSave} className="w-full">
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotificationSettings;
