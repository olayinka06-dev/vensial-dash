import { NextResponse } from "next/server";

export async function GET() {
  console.log("3456789jvbcfghj");
  const res = await fetch(
    "https://dashboard.encryptbox.co.uk/api/v1/live/getcustomers",
    {
      headers: {
        "Content-Type": "application/json",
        token:
          "0Coc24mjYhIsJ8bPSZWYKGjVKYHeWBhDjgqIqiFK4Hf9FsLN5HTMpRxej85pMwGx",
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request) {
  const payload = await request.json();

  const param = {
    reference: "hjerj3784ufikj394iuiwwriw",
    first_name: payload.surname,
    last_name: payload.otherNames,
    mobile_number: payload.phoneNumber,
    email: payload.email,
    address: "Abuja, oyo state",
    nin: "1234567889",
    bvn: "11234567890",
  };
  const res = await fetch(
    "https://dashboard.encryptbox.co.uk/api/v1/live/createaccount",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token:
          "0Coc24mjYhIsJ8bPSZWYKGjVKYHeWBhDjgqIqiFK4Hf9FsLN5HTMpRxej85pMwGx",
      },
      body: JSON.stringify(param),
    }
  );

  const data = await res.json();

  return NextResponse.json(data);
}
