import type { APIRoute } from 'astro';
import { wixEvents } from '@wix/events';
import { createClient, OAuthStrategy } from '@wix/sdk';

export const prerender = false;

const client = createClient({
  modules: { wixEvents },
  auth: OAuthStrategy({ clientId: 'd0686898-...' }),
});

export const GET: APIRoute = async () => {
  const res = await client.wixEvents.queryEvents({ limit: 100 });
  const events = (res.events ?? []).map((e) => ({
    id: e.id,
    title: e.title,
    start: e.scheduling?.config?.startDate,
    location: e.location?.name,
    url: e.eventPageUrl?.url,
  }));
  return new Response(JSON.stringify(events), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=900',
    },
  });
};