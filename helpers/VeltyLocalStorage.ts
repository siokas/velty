export function setLocalStorageTheme(value: string) {
  if ("localStorage" in window && "theme" in localStorage) {
    localStorage.setItem("theme", value);
  }
}

export function getLocalStorageTheme(): string {
  if ("localStorage" in window && "theme" in localStorage) {
    return localStorage.theme;
  }
  return "light";
}
