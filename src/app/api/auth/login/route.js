import { NextResponse } from "next/server";
 

export async function POST(request) {
  const payload = await request.json();
 
  const res = await fetch(
    "https://dashboard.encryptbox.co.uk/api/v1/live/createaccount",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token:
          "0Coc24mjYhIsJ8bPSZWYKGjVKYHeWBhDjgqIqiFK4Hf9FsLN5HTMpRxej85pMwGx",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
