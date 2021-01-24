const playableRaces = [0];

function getPlayableById(id) {
  if (id.indexOf(playableRaces)) {
    return true;
  } else {
    return false;
  }
}

export {playableRaces, getPlayableById};
