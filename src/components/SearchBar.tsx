
import { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Clock, TrendingUp } from 'lucide-react';

interface SearchSuggestion {
  id: number;
  text: string;
  type: 'recent' | 'trending' | 'product';
  category?: string;
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions] = useState<SearchSuggestion[]>([
    { id: 1, text: 'Wireless Headphones', type: 'recent' },
    { id: 2, text: 'Smart Watch', type: 'recent' },
    { id: 3, text: 'iPhone Cases', type: 'trending' },
    { id: 4, text: 'Gaming Laptop', type: 'trending' },
    { id: 5, text: 'Bluetooth Speaker', type: 'product', category: 'Electronics' },
    { id: 6, text: 'Running Shoes', type: 'product', category: 'Sports' },
    { id: 7, text: 'Coffee Maker', type: 'product', category: 'Home' },
    { id: 8, text: 'Desk Chair', type: 'product', category: 'Furniture' }
  ]);

  const searchRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const recentSuggestions = filteredSuggestions.filter(s => s.type === 'recent');
  const trendingSuggestions = filteredSuggestions.filter(s => s.type === 'trending');
  const productSuggestions = filteredSuggestions.filter(s => s.type === 'product');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      console.log('Searching for:', query);
      setShowSuggestions(false);
      // Here you would typically navigate to search results or trigger search
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.text);
    handleSearch(suggestion.text);
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="search"
          placeholder="Search products, rentals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className="w-full rounded-lg bg-muted/50 pl-10 pr-12 py-2 text-sm border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
        />
        <Button
          size="sm"
          variant="ghost"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
          onClick={() => handleSearch()}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {showSuggestions && (searchQuery.length > 0 || true) && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg">
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {searchQuery.length === 0 ? (
                // Show default suggestions when no query
                <div className="p-4 space-y-4">
                  {recentSuggestions.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                        <Clock className="h-4 w-4" />
                        Recent Searches
                      </div>
                      {recentSuggestions.slice(0, 3).map(suggestion => (
                        <button
                          key={suggestion.id}
                          className="w-full text-left p-2 hover:bg-muted/50 rounded-md text-sm"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion.text}
                        </button>
                      ))}
                    </div>
                  )}
                  {trendingSuggestions.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                        <TrendingUp className="h-4 w-4" />
                        Trending
                      </div>
                      {trendingSuggestions.slice(0, 3).map(suggestion => (
                        <button
                          key={suggestion.id}
                          className="w-full text-left p-2 hover:bg-muted/50 rounded-md text-sm"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion.text}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Show filtered suggestions when there's a query
                <div className="p-2">
                  {filteredSuggestions.length === 0 ? (
                    <p className="text-center text-muted-foreground py-4 text-sm">
                      No suggestions found
                    </p>
                  ) : (
                    filteredSuggestions.slice(0, 8).map(suggestion => (
                      <button
                        key={suggestion.id}
                        className="w-full text-left p-2 hover:bg-muted/50 rounded-md text-sm flex items-center justify-between"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <span>{suggestion.text}</span>
                        {suggestion.category && (
                          <span className="text-xs text-muted-foreground">
                            {suggestion.category}
                          </span>
                        )}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
