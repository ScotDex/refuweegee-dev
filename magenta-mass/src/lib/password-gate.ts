import type { AstroGlobal } from "astro";

/**
 * Server-side password check for protected pages (use with prerender = false).
 * Nothing is remembered: the page only unlocks on the response to a correct
 * password, so every visit asks for it again.
 */
export async function checkPassword(Astro: AstroGlobal, password: string) {
  let unlocked = false;
  let error = false;

  if (Astro.request.method === "POST") {
    const data = await Astro.request.formData();
    unlocked = data.get("password") === password;
    error = !unlocked;
  }

  Astro.response.headers.set("X-Robots-Tag", "noindex");
  Astro.response.headers.set("Cache-Control", "private, no-store");

  return { unlocked, error };
}
