/** Static portfolio worker for OpenAI Sites hosting. */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Sites serves the static bundle from dist/client. Keep the public root
    // independent from the local filename used for the portfolio homepage.
    if (url.pathname === "/") url.pathname = "/portfolio.html";
    if (url.pathname === "/portfolio-ru") url.pathname = "/portfolio-ru.html";
    if (url.pathname === "/case-ru") url.pathname = "/case-ru.html";
    if (url.pathname === "/cv") url.pathname = "/cv.html";
    if (url.pathname === "/cv-ru") url.pathname = "/cv-ru.html";
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};
