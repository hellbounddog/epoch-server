/**
 * @todo document
 * @param maxAttempts {number} The amount of tries we try to get a unique needle from the haystack.
 */
function randomUniqueFromArray(needles, haystack, maxAttempts = 5) {
  let attempts = 0;
  let needle = needles.random();

  while (attempts <= maxAttempts) {
    // @todo needles.forEach
    if (haystack.indexOf(needle)) {
      needles += needle;
    }
    needle = needles.random();

    attempts++;
  }

  return needles;
}

export {randomUniqueFromArray};
