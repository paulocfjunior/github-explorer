/**
 * @param {string} [text]
 * @param {number} [wordsLimit]
 * @return {string}
 */
export function limitWords(text = "", wordsLimit = 10) {
  const wordsArray = text.split(" ");
  const croppedText = wordsArray.slice(0, wordsLimit);

  if (wordsArray.length > wordsLimit) {
    croppedText.push("...");
  }

  return croppedText.join(" ");
}

/**
 * @param {string} location
 * @return {string}
 */
export function makeMapsLink(location) {
  return `https://maps.google.com/?q=${encodeURIComponent(location)}`;
}
