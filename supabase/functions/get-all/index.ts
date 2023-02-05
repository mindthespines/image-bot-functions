import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import createSupabaseClient from "../_shared/client.ts";
import { errorResponse, optionsResponse, successResponse } from "../_shared/response.ts";

console.log("image-bot get-all function is online!");

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") return optionsResponse;

  try {
    const client = createSupabaseClient(req);

    const { data, error } = await client.from("images").select("*");
    if (error) throw error;

    return successResponse(data);
  } catch (error) {
    return errorResponse(error);
  }
});

// To run locally from image-bot-functions folder:
// SUPABASE_URL=https://yujqewlvubqtkxllxjvx.supabase.co SUPABASE_ANON_KEY=[anon key here] deno run --allow-net --allow-env supabase/functions/get-all/index.ts

// To invoke:
// curl -i --location --request POST 'http://localhost:8000'
