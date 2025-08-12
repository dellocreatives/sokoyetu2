
import { Card, CardContent } from '@/components/ui/card';
import { Users, Package, Home, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Users",
    description: "Trusted community"
  },
  {
    icon: Package,
    value: "10K+",
    label: "Products Listed",
    description: "Daily new arrivals"
  },
  {
    icon: Home,
    value: "2.5K+",
    label: "Properties Available",
    description: "Across major cities"
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    description: "Customer satisfaction"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="glass-card text-center fade-in-stagger floating"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-effect pulse-glow">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 gradient-text">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
