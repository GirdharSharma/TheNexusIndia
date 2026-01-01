export function htmlExcerpt(html, maxChars = 120) {
  if (!html) return "";

  const div = document.createElement("div");
  div.innerHTML = html;
  const text = div.textContent || div.innerText || "";

  return text.length > maxChars ? text.slice(0, maxChars).trim() + "..." : text;
}
