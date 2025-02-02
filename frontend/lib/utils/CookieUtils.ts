// Get a cookie by name
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null; // Prevent errors in SSR
  const cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split("=");
    if (cookiePair[0] === name) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

// Set a cookie with expiration time (in minutes)
export function setCookie(name: string, value: string, minutes: number) {
  if (typeof document === "undefined") return; // Prevent errors in SSR
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + minutes);
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; Path=/; Expires=${expires.toUTCString()}; Secure; HttpOnly; SameSite=Lax`;
}

// Delete a cookie (e.g., for logout)
export function deleteCookie(name: string) {
  if (typeof document === "undefined") return; // Prevent errors in SSR
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; HttpOnly; SameSite=Lax`;
}
