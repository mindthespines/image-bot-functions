import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.2.3";
import { corsHeaders } from "./_shared/cors.ts";

console.log("Hello from Functions!");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

  try {
    const supabaseClient = createClient(
      supabaseUrl,
      supabaseKey,
      {
        global: {
          headers: { Authorization: req.headers.get("Authorization")! },
        },
      },
    );

    const { data, error } = await supabaseClient.from("images").select("*");
    if (error) throw error;

    return new Response(JSON.stringify({ data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});

// To run locally from image-bot-functions folder:
// SUPABASE_URL=https://yujqewlvubqtkxllxjvx.supabase.co SUPABASE_ANON_KEY=[anon key here] deno run --allow-net --allow-env supabase/functions/get-all/index.ts

// To invoke:
// curl -i --location --request POST 'http://localhost:8000'
