import { IProduct } from "@/utils/type";
import { supabase } from "./supabase";

export async function getProducts(): Promise<IProduct[]> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("products")
      .select("*");

    if (error) {
      throw new Error(error);
    }
    return data as IProduct[];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductById(id: number): Promise<IProduct> {
  try {
    const { data, error }: { data: unknown; error: any } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      // throw new Error(`Product with id ${id} not Found`);
      throw new Error(error);
    }
    return data as IProduct;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
