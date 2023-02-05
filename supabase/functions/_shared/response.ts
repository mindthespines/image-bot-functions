const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export const optionsResponse = new Response("ok", {
  headers: corsHeaders,
});

export function successResponse<T>(data: T): Response {
  return new Response(
    JSON.stringify({ data }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    },
  );
}

export function errorResponse(error: Error): Response {
  return new Response(
    JSON.stringify({ error: error.message }),
    {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    },
  );
}
