import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

export const useProducts = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryFn: () => getProducts(),
    queryKey: ["products"],
  });

  return { products, isLoading, error };
};
