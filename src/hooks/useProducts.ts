
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts, Product } from '@/services/firebaseServices';

export const useProducts = (category?: string, limitCount?: number) => {
  return useQuery({
    queryKey: ['products', category, limitCount],
    queryFn: () => getProducts(category, limitCount),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useFeaturedProducts = () => {
  return useProducts(undefined, 8);
};
