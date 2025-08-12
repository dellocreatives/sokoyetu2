
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const PrivacySettings = () => {
  const [settings, setSettings] = useState({
    profileVisibility: true,
    showOnlineStatus: false,
    allowMessages: true,
    dataCollection: false,
    twoFactorAuth: false,
  });
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved.",
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
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-2xl gradient-text">Privacy & Security</CardTitle>
                  <CardDescription>
                    Control your privacy and security settings
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Privacy Controls</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="profile">Public Profile</Label>
                      <p className="text-sm text-muted-foreground">Make your profile visible to other users</p>
                    </div>
                  </div>
                  <Switch
                    id="profile"
                    checked={settings.profileVisibility}
                    onCheckedChange={(checked) => setSettings({...settings, profileVisibility: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="online">Show Online Status</Label>
                      <p className="text-sm text-muted-foreground">Let others see when you're online</p>
                    </div>
                  </div>
                  <Switch
                    id="online"
                    checked={settings.showOnlineStatus}
                    onCheckedChange={(checked) => setSettings({...settings, showOnlineStatus: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="messages">Allow Messages</Label>
                      <p className="text-sm text-muted-foreground">Allow other users to message you</p>
                    </div>
                  </div>
                  <Switch
                    id="messages"
                    checked={settings.allowMessages}
                    onCheckedChange={(checked) => setSettings({...settings, allowMessages: checked})}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security Settings</h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="2fa">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                  </div>
                  <Switch
                    id="2fa"
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings({...settings, twoFactorAuth: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label htmlFor="data">Data Collection</Label>
                      <p className="text-sm text-muted-foreground">Allow analytics and usage data collection</p>
                    </div>
                  </div>
                  <Switch
                    id="data"
                    checked={settings.dataCollection}
                    onCheckedChange={(checked) => setSettings({...settings, dataCollection: checked})}
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

export default PrivacySettings;
