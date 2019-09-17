// ex: username=John Doe;

let dummyCookie = '';

export function addCookie(name: string, value: string) {
  dummyCookie = `${dummyCookie};${name}=${value}`;
}

export function getCookie(name: string) {
  const cookie = dummyCookie
    .split(';')
    .find((cookie) => cookie.startsWith(name));

  if (!cookie) {
    return undefined;
  }

  return cookie.split('=')[1];
}
