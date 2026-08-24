import type { APIRoute } from "astro";
import Stripe from "stripe";
import { getProduct } from "../data/products";

export const prerender = false;

const MAX_QUANTITY = 20;

interface CartItem {
  id: number;
  quantity: number;
}

export const POST: APIRoute = async ({ request, url }) => {
  let body: { items?: CartItem[] };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
    });
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return new Response(JSON.stringify({ error: "Basket is empty" }), {
      status: 400,
    });
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  for (const item of body.items) {
    const quantity = Number(item.quantity);
    if (
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > MAX_QUANTITY
    ) {
      return new Response(
        JSON.stringify({ error: `Invalid quantity for item ${item.id}` }),
        { status: 400 },
      );
    }

    const product = getProduct(Number(item.id));
    if (!product) {
      return new Response(
        JSON.stringify({ error: `Unknown product ${item.id}` }),
        { status: 400 },
      );
    }

    lineItems.push({
      quantity,
      price_data: {
        currency: "gbp",
        unit_amount: product.priceInPence,
        product_data: {
          name: product.name,
          images: [new URL(product.image, url.origin).toString()],
        },
      },
    });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return new Response(JSON.stringify({ error: "Stripe is not configured" }), {
      status: 500,
    });
  }

  const stripe = new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["GB"] },
      success_url: `${url.origin}/merch/success`,
      cancel_url: `${url.origin}/merch?canceled=1`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to create checkout session";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
};
