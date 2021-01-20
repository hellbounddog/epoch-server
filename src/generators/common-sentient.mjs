/**
 * The minimum IQ the generated creature will have without any
 * intelligence calculations.
 */
const baseIQ = 30;

/**
 * The minimum IQ required for having intelligent options in dialogues.
 */
const minDialogueIQ = 50;

const normalThingsToLike = [
  'Poetry',
  'Ninjas',
  'Chicken',
  'Turkey',
  'Apple Juice',
  'Dogs',
  'Cats',
];

const oddThingsToLike = [
  'Energy Drinks',
  'Rum',
  '',
];

const twistedThingsToLike = [
  'Tentacles',
];

/**
 * @todo document
 * @todo move to its own module
 */
function randomUniqueFromArray(needles, haystack) {
}

/**
 * @todo document
 */
function generateIQ(entity) {
  const iqFromInt = entity.attributes.intellect * 16.5;

  return baseIQ + iqFromInt;
}

/**
 * @todo document
 */
function generateLikes(normal = 2, odd = 1, twisted = 0) {
  let likes = [];

  for (let i = 0; i === normal; i++) {
    likes += randomUniqueFromArray(likes, normalThingsToLike);
  }

  return likes;
}

export {generateIQ, generateLikes};
