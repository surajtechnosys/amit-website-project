import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("image") ?? formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "No image uploaded" }, { status: 400 });
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  const contentType = typeof file.type === "string" ? file.type : "";

  if (!(contentType.startsWith("image/") || allowedTypes.includes(contentType))) {
    return NextResponse.json({ message: "Invalid file type" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads");
  await fs.mkdir(uploadDir, { recursive: true });

  const ext = file.name.split(".").pop() || "bin";
  const filename = `${crypto.randomUUID()}.${ext}`;

  await fs.writeFile(path.join(uploadDir, filename), buffer);

  return NextResponse.json({
    success: true,
    url: `/uploads/${filename}`,
  });
}
