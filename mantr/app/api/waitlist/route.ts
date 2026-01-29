import { NextResponse } from "next/server";
import { z } from "zod";
import type { MongoServerError } from "mongodb";

import { insertWaitlistEntry } from "@/lib/models";

const bodySchema = z.object({
  email: z.string().trim().email(),
  name: z.string().trim().max(80).optional(),
});

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  try {
    await insertWaitlistEntry(parsed.data);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    const e = err as Partial<MongoServerError> & { code?: number };
    if (e.code === 11000) {
      return NextResponse.json(
        { error: "That email is already on the waitlist." },
        { status: 409 },
      );
    }
    return NextResponse.json(
      { error: "Unable to save your spot right now. Please try again." },
      { status: 500 },
    );
  }
}
