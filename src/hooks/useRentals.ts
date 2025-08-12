
import { useQuery } from '@tanstack/react-query';
import { getRentals, Rental } from '@/services/firebaseServices';

export const useRentals = (category?: string, limitCount?: number) => {
  return useQuery({
    queryKey: ['rentals', category, limitCount],
    queryFn: () => getRentals(category, limitCount),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useFeaturedRentals = () => {
  return useRentals(undefined, 6);
};
