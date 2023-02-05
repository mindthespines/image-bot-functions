import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import createSupabaseClient from "../_shared/client.ts";
import {
  errorResponse,
  optionsResponse,
  successResponse,
} from "../_shared/response.ts";

console.log("image-bot create-new function is online!");

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") return optionsResponse;

  try {
    const supabaseClient = createSupabaseClient(req);
    const reqBody = await req.json();

    if (!reqBody.url) {
      throw new Error(
        "Please provide a URL for the image to be added; minimum request body is { url: 'urlgoeshere.com' }",
      );
    }

    const { error, statusText } = await supabaseClient.from("images").insert(
      reqBody,
    );
    if (error) throw error;

    return successResponse(statusText);
  } catch (error) {
    return errorResponse(error);
  }
});

// To run locally from image-bot-functions folder:
// SUPABASE_URL=https://yujqewlvubqtkxllxjvx.supabase.co SUPABASE_ANON_KEY=[anon key here] deno run --allow-net --allow-env supabase/functions/create-new/index.ts

// To invoke:
// curl -i --location --request POST 'http://localhost:8000' --data '{"url": "whateverurl.com"}'
