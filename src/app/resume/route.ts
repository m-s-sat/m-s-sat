import { NextResponse } from 'next/server';

const RESUME_FILE_ID = process.env.RESUME_FILE_ID;

export async function GET() {
  return NextResponse.redirect(
    `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`,
    307,
  );
}

