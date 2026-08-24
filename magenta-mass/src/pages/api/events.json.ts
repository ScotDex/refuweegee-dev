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

    const now = Date.now();
    const events = (res.items ?? [])
      .map((e: any) => ({
        id: e._id,
        title: e.title,
        start: e.dateAndTimeSettings?.startDate,
        location: e.location?.name,
        url: e.eventPageUrl,
      }))
      .filter((e) => e.start && new Date(e.start).getTime() >= now)
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

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