import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://yxlloo4kwr8sevnc.public.blob.vercel-storage.com/MarkoSudarResume-Ieq5915FO6v7U4IczUBbnVh06YmcK8.pdf";

  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const contentType = res.headers.get("content-type") || "application/pdf";

  return new NextResponse(Buffer.from(buffer), {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": 'attachment; filename="MarkoSudar_Resume.pdf',
    },
  });
}
