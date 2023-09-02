export function onRequest({ request, redirect }, next) {
  const url = new URL(request.url);
  if (url.pathname === "/") return next();
  if (!url.pathname.startsWith("/en") && !url.pathname.startsWith("/fr")) {
    return redirect("/404");
  }
  return next();
}
