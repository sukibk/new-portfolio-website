export async function GET(req) {
  let ip = req.headers.get("x-forwarded-for") || "8.8.8.8"; // fallback to Google DNS

  // Handle local dev
  if (ip === "::1" || ip === "127.0.0.1") {
    ip = "8.8.8.8"; // sample IP (California)
  }

  const res = await fetch(`https://ipapi.co/${ip}/json/`);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
