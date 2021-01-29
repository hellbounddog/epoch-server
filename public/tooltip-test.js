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
    function modifiers() {
      return (
        '<ul>' +
        this.modifiers.forEach((modifier) => '<li>' + modifier + '</li>') +
        '</ul>'
      );
    }

    return (
      `<h3 class='item-${this.rarity}'>${this.name}</h3>` +
      modifiers() +
      `<quote>${this.description}</quote>`
    );
  },
};

tippy.setDefaultProps({
  allowHTML: true,
  arrow: false,
  duration: 0,
});

tippy('.tooltip', {
  content: item.tooltip(),
});
