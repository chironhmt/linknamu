import { NextRequest, NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: "Missing link id" }, { status: 400 });
  }

  try {
    const client = await getMongoClient();
    const db = client.db();

    await db
      .collection("linkClicks")
      .updateOne(
        { linkId: id },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true }
      );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record link click", error);
    return NextResponse.json(
      { error: "Failed to record click" },
      { status: 500 }
    );
  }
}
