import { ICategory } from "../utils/type";
import { supabase } from "../services/supabase";

export async function getCategories(): Promise<ICategory[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("categories")
      .select("*");

    if (error) {
      throw new Error(error);
    }
    return data as ICategory[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCategoryById(id: number): Promise<ICategory> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("categories")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // throw new Error(`Category with id ${id} not Found`);
      throw new Error(error);
    }
    return data as ICategory;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
