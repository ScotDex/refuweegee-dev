import { wixEventsV2 } from '@wix/events';
import { createClient, OAuthStrategy } from '@wix/sdk';

export interface WixEvent {
  id: string;
  title: string;
  start?: string;
  location?: string;
  url: string;
}

const client = createClient({
  modules: { wixEventsV2 },
  auth: OAuthStrategy({
    clientId: import.meta.env.WIX_CLIENT_ID,
  }),
});

export async function fetchUpcomingEvents(): Promise<WixEvent[]> {
  const res = await client.wixEventsV2.queryEvents().limit(100).find();

  const now = Date.now();
  return (res.items ?? [])
    .map((e: any) => ({
      id: e._id,
      title: e.title,
      start: e.dateAndTimeSettings?.startDate,
      location: e.location?.name,
      url: e.eventPageUrl,
    }))
    .filter((e) => e.start && new Date(e.start).getTime() >= now)
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
}
