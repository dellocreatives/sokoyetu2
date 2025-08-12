
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ProductChatButtonProps {
  productId: number;
  sellerName: string;
  productTitle: string;
  size?: "sm" | "default" | "lg";
}

const ProductChatButton = ({ productId, sellerName, productTitle, size = "default" }: ProductChatButtonProps) => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    const params = new URLSearchParams({
      seller: sellerName,
      product: productTitle
    });
    navigate(`/product/${productId}/chat?${params.toString()}`);
  };

  return (
    <Button
      size={size}
      variant="outline"
      onClick={handleChatClick}
      className="hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      <MessageCircle className={`${size === "sm" ? "h-3 w-3" : "h-4 w-4"} mr-1`} />
      Chat
    </Button>
  );
};

export default ProductChatButton;
