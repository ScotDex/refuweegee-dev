import type { APIRoute } from 'astro';
import { wixEventsV2 } from '@wix/events';
import { createClient, OAuthStrategy } from '@wix/sdk';

export const prerender = false;

const client = createClient({
  modules: { wixEventsV2 },
  auth: OAuthStrategy({
    clientId: import.meta.env.WIX_CLIENT_ID,
  }),
});

export const GET: APIRoute = async () => {
  try {
    const res = await client.wixEventsV2.queryEvents().limit(100).find();

    // TEMP: run once, read the real shape, then delete this line.
    console.log(JSON.stringify(res.items?.[0], null, 2));

    const events = (res.items ?? []).map((e: any) => ({
      id: e._id,
      title: e.title,
      start: e.dateAndTimeSettings?.startDate,
      location: e.location?.name,
      url: e.eventPageUrl,
    }));

    return new Response(JSON.stringify(events), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=900',
      },
    });
  } catch (err) {
    console.error('Wix events fetch failed:', err);
    return new Response(JSON.stringify({ error: 'Unavailable' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};