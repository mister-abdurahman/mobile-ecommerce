import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiCategories";

export const usecategories = () => {
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery({
    queryFn: () => getCategories(),
    queryKey: ["categories"],
  });

  return { categories, isLoading, error };
};
