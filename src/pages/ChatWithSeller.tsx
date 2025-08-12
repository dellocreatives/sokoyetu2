
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Send, User, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'seller';
  timestamp: Date;
}

const ChatWithSeller = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const sellerName = searchParams.get('seller') || 'Seller';
  const productTitle = searchParams.get('product') || 'Product';
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `Hi! I'm interested in "${productTitle}". Is it still available?`,
      sender: 'user',
      timestamp: new Date(Date.now() - 300000)
    },
    {
      id: 2,
      text: 'Hello! Yes, it\'s still available. Would you like to know more details about the condition and price?',
      sender: 'seller',
      timestamp: new Date(Date.now() - 240000)
    },
    {
      id: 3,
      text: 'Great! Can you tell me more about the warranty and delivery options?',
      sender: 'user',
      timestamp: new Date(Date.now() - 120000)
    }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate seller response
      setTimeout(() => {
        const sellerResponse: Message = {
          id: messages.length + 2,
          text: 'Thanks for your question! I\'ll get back to you with the details shortly.',
          sender: 'seller',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, sellerResponse]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="gap-2">
            <Link to={`/product/${id}`}>
              <ArrowLeft className="h-4 w-4" />
              Back to Product
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Chat Header */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{sellerName[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-xl">{sellerName}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Verified Seller</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Usually responds in 1 hour</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Online
                </Badge>
              </div>
            </CardHeader>
          </Card>

          {/* Product Context */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="text-sm text-muted-foreground mb-2">
                Discussing product:
              </div>
              <div className="font-semibold text-primary">
                {productTitle}
              </div>
            </CardContent>
          </Card>

          {/* Chat Messages */}
          <Card className="mb-6">
            <CardContent className="p-0">
              <ScrollArea className="h-96 p-4">
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] ${
                          msg.sender === 'user' ? 'order-2' : 'order-1'
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            msg.sender === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <User className="h-3 w-3" />
                            <span className="text-xs opacity-70">
                              {msg.sender === 'user' ? 'You' : sellerName}
                            </span>
                            <span className="text-xs opacity-50">
                              {formatTime(msg.timestamp)}
                            </span>
                          </div>
                          <p className="text-sm">{msg.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Message Input */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button onClick={sendMessage} disabled={!message.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Press Enter to send or click the send button
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatWithSeller;
