let timeoutId;

function debounce(fn, delay) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(fn, delay);
}

export default debounce;
