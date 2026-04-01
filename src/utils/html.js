/**
 * Check if an HTML string has actual visible content.
 * Returns false for empty strings, null, or strings with only empty tags like <p></p>, <p><br></p>.
 */
export function hasHtmlContent(html) {
  if (!html) return false;
  const stripped = html.replace(/<[^>]*>/g, '').trim();
  return stripped.length > 0;
}

/**
 * Sanitize an HTML string to prevent XSS.
 * NOTE: Using a custom sanitizer as external libraries (like DOMPurify)
 * cannot be installed due to environment restrictions.
 *
 * This function removes script tags, event handlers, and dangerous protocols.
 *
 * @param {string} html
 * @returns {string}
 */
export function sanitizeHtml(html) {
  if (!html) return '';

  // Use a temporary element for sanitization in the browser
  if (typeof document !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = html;

    // Remove dangerous tags
    const dangerousTags = ['script', 'object', 'embed', 'form', 'base', 'link', 'style', 'iframe', 'frame', 'frameset', 'applet'];
    dangerousTags.forEach(tag => {
      const elements = div.getElementsByTagName(tag);
      for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.removeChild(elements[i]);
      }
    });

    // Remove event handlers and dangerous attributes
    const allElements = div.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
      const el = allElements[i];
      const attributes = Array.from(el.attributes);

      attributes.forEach(attr => {
        const attrName = attr.name.toLowerCase();

        // Remove event handlers (onclick, onerror, etc.)
        if (attrName.startsWith('on')) {
          el.removeAttribute(attr.name);
          return;
        }

        // Remove dangerous protocols in URI attributes
        if (['href', 'src', 'action', 'formaction', 'xlink:href', 'data'].includes(attrName)) {
          const attrValue = attr.value.toLowerCase().trim();
          if (attrValue.startsWith('javascript:') ||
              attrValue.startsWith('data:') ||
              attrValue.startsWith('vbscript:')) {
            el.removeAttribute(attr.name);
          }
        }
      });
    }

    return div.innerHTML;
  }

  // Fallback for non-browser environments (basic but improved regex)
  // This is a last-resort measure.
  return html
    .replace(/<(script|object|embed|form|base|link|style|iframe|frame|frameset|applet)\b[^>]*>([\s\S]*?)<\/\1>/gim, "")
    .replace(/<(script|object|embed|form|base|link|style|iframe|frame|frameset|applet)\b[^>]*>/gim, "")
    .replace(/\s+on\w+\s*=\s*(['"]?)[^>]*?\1(\s|>)/gim, "$2")
    .replace(/(href|src|action|formaction|data)\s*=\s*(['"])?\s*(javascript|data|vbscript):.*?(\2|>)/gim, "$1=\"#\"$4");
}
