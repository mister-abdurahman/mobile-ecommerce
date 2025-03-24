import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/apiProducts";

export const useProductById = (id: number) => {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["product"],
  });

  return { product, isLoading, error };
};
