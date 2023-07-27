addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.protocol = 'https:'
  url.hostname = "cachefly.cachefly.net/200mb.test";
  let request = new Request(url, event.request);
  event.respondWith(fetch(request));
})
