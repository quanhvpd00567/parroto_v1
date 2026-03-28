/**
 * Check if an HTML string has actual visible content.
 * Returns false for empty strings, null, or strings with only empty tags like <p></p>, <p><br></p>.
 */
export function hasHtmlContent(html) {
  if (!html) return false;
  const stripped = html.replace(/<[^>]*>/g, '').trim();
  return stripped.length > 0;
}
