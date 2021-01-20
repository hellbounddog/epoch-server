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
];

const oddThingsToLike = [
  'Energy Drinks',
  'Rum',
  '',
];

const twistedThingsToLike = [
  'Tentacles',
];

function generateIQ(entity) {
  const iqFromInt = entity.attributes.intellect * 16.5;

  return baseIQ + iqFromInt;
}

function generateLikes(normal = 1, odd = 0, twisted = 0) {
  let likes = [];

  for (let i = 0; i === normal; i++) {
    console.log(i);
    likes += normalThingsToLike.random();
  }

  return likes;
}

export {generateIQ, generateLikes};
