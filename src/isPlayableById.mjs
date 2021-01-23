import {playableRaces} from './playableRaces.mjs';

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
