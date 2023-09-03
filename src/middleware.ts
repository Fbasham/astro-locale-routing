export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  if (url.pathname === "/") return next();
  if (!/^\/(en|fr)\//.test(url.pathname)) {
    return redirect("/404");
  }
  return next();
}
