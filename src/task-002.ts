// Write PROPertytest for config file
// Serialize and Deserialize

// username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/

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
