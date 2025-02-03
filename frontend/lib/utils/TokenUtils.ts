export async function createSignedToken(data: any) {
  const encoder = new TextEncoder();
  const payload = JSON.stringify(data);
  const secret = process.env.NEXT_SECRET_KEY;

  const keyData = encoder.encode(secret);

  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBuffer = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload)
  );
  const signature = Buffer.from(signatureBuffer).toString("hex");

  return Buffer.from(`${payload}.${signature}`).toString("base64");
}

async function verifySignedToken(token: string) {
  try {
    const decoder = new TextDecoder();
    const secret = process.env.NEXT_SECRET_KEY;
    const decoded = Buffer.from(token, "base64").toString();
    const [payload, signature] = decoded.split(".");

    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const expectedSignatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(payload)
    );
    const expectedSignature = Buffer.from(expectedSignatureBuffer).toString(
      "hex"
    );

    if (expectedSignature !== signature) return false;
    const { timestamp } = JSON.parse(payload);
    if (Date.now() - timestamp > 5 * 60 * 1000) return false;
    return true;
  } catch (error) {
    return false;
  }
}
