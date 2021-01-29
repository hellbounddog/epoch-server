const item = {
  name: 'Crown of Cowardly Kings',
  rarity: 'rare',
  modifiers: {
    stamina: 'd6 + 3',
    intellect: 'd6 + 12',
    agility: 'd4 + 2',
  },
  equipEffects: [2, 15], // @todo implement
  description:
    '"A crown should befit a king. For you cowardly lot, it shall be from thorns and blood!"',
  tooltip: function () {
    function displayName(name, rarity) {
      return `<h3 style='color: #71CDFF;'>${name}</h3>`;
    }

    function displayModifiers(modifiers) {
      let stats = '';

      if (modifiers) {
        stats += '<ul>';

        if (modifiers.stamina) {
          stats += '<li><strong>Stamina: </strong>' + modifiers.stamina + '</li>';
        }

        if (modifiers.intellect) {
          stats +=
            '<li><strong>Intellect: </strong>' + modifiers.intellect + '</li>';
        }

        stats += '</ul>';
      }

      return stats;
    }

    return (
      displayName(this.name, this.rarity) +
      displayModifiers(this.modifiers) +
      `<quote>${this.description}</quote>`
    );
  },
};

tippy.setDefaultProps({
  allowHTML: true,
  arrow: false,
  duration: 0,
  followCursor: true,
});

tippy('.tooltip', {
  content: item.tooltip(),
});
