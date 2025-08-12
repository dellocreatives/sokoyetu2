
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  fallbackRoute?: string;
  className?: string;
}

const BackButton = ({ fallbackRoute = '/', className = '' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackRoute);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleGoBack}
      className={`mb-4 hover:bg-accent transition-colors ${className}`}
    >
      <ArrowLeft className="h-4 w-4 mr-2" />
      <span className="hidden sm:inline">Back</span>
    </Button>
  );
};

export default BackButton;
