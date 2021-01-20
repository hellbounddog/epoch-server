import {generateIQ} from './generators/common-sentient.mjs';

/**
 * @todo document
 */
function isPlayableById(race) {
  if (race.indexOf(playableRaces)) {
    return true;
  }

  return false;
}

export {isPlayableById};
