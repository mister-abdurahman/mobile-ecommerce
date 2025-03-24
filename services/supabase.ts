import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://edtiyvwjdmwmruamkpzr.supabase.co";

export const supabase = createClient(
  supabaseUrl,
  process.env.EXPO_PUBLIC_SUPABASE_KEY!
);
