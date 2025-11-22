import { NextResponse } from "next/server";
import crypto from "crypto";

// GrowthBook webhook secret - set this in your environment variables
const GROWTHBOOK_WEBHOOK_SECRET = process.env.GROWTHBOOK_WEBHOOK_SECRET;

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const headers = request.headers;

    // Get webhook headers
    const webhookId = headers.get("webhook-id");
    const webhookTimestamp = headers.get("webhook-timestamp");
    const webhookSignature = headers.get("webhook-signature");

    // Verify webhook signature if secret is provided
    if (GROWTHBOOK_WEBHOOK_SECRET) {
      if (!webhookId || !webhookTimestamp || !webhookSignature) {
        return NextResponse.json(
          { error: "Missing webhook headers" },
          { status: 400 }
        );
      }

      // Verify signature
      const signature = webhookSignature.split(",")[1]; // Remove "v1," prefix
      const computed = crypto
        .createHmac("sha256", GROWTHBOOK_WEBHOOK_SECRET)
        .update(`${webhookId}.${webhookTimestamp}.${body}`)
        .digest("base64");

      if (!crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(signature))) {
        return NextResponse.json(
          { error: "Invalid signature" },
          { status: 401 }
        );
      }
    }

    // Parse the webhook payload
    const payload = JSON.parse(body);
    
    // Handle different webhook types
    switch (payload.type) {
      case "payload.changed":
        console.log("GrowthBook payload changed:", payload.data);
        // Here you can implement logic to update your cache or trigger revalidation
        // For example, you might want to:
        // 1. Update a Redis cache
        // 2. Trigger a rebuild of static pages
        // 3. Send notifications to your team
        break;
      
      default:
        console.log("Unknown webhook type:", payload.type);
    }

    // Always return 200 for successful webhook processing
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ message: "GrowthBook webhook endpoint" });
}

