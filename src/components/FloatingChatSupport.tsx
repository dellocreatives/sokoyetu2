
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FloatingChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:scale-110 transition-all duration-300 pulse-glow"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 animate-scale-in">
          <Card className="w-80 glass-card shadow-2xl">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our support team is here to help you 24/7
                </p>
                <div className="space-y-2">
                  <Button className="w-full">Start Live Chat</Button>
                  <Button variant="outline" className="w-full">Send Email</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default FloatingChatSupport;
