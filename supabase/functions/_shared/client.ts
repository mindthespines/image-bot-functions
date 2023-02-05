import { createClient, SupabaseClient } from "https://esm.sh/v102/@supabase/supabase-js@2.2.3/dist/module/index";

function createSupabaseClient(req?: Request): SupabaseClient {
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

  const supabaseClient = createClient(
    supabaseUrl,
    supabaseKey,
    {
      global: {
        headers: { Authorization: req?.headers.get("Authorization")! },
      },
    },
  );

  return supabaseClient;
}

export default createSupabaseClient;
