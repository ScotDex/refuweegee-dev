import type { APIRoute } from 'astro';
import { fetchUpcomingEvents } from '../../lib/events';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const events = await fetchUpcomingEvents();

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
