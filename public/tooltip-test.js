const item = {
  name: 'Crown of Cowardly Kings',
  /**
   * Item Level
   * Minimum level requirement is calculted by
   * itemLevel - 5?
   */
  level: 25,
  /**
   * Item Rarity:
   * 0 - Junk
   * 1 - Common
   * 2 - Uncommon
   * 3 - Rare
   * 4 - Epic
   * 5 - Legendary
   */
  rarity: 3,
  /**
   * Item Types:
   * 0  - Gold
   * 1  - Unique
   * 2  - Quest Item
   * 3  - Quest Trigger
   * ?  - ???
   * 10 - Armor
   * 11 - Helmet
   * ?  - ???
   * 30 - Weapon
   */
  types: [1, 10, 11],
  modifiers: {
    stamina: 'd6 + 3',
    intellect: 'd6 + 12',
    agility: 'd4 + 2',
  },
  /**
   * Equip Effects
   * 216  - Curse of Thorns
   *        Not even cowards like cowards.
   *         Party members are less likely to assist you in battle.
   *          player.partyMembers.combatMorale
   * 217  - Touch of Thorns
   *        Has a #(chance) chance to cause melee attackers 2d4 damage.
   *        The damage has a high chance to cause the enemy to ignore you.
   *        Entity.resetThreat(spellSource)
   */
  equipEffects: [216, 217], // @todo implement
  description:
    '"A crown should befit a king. For you cowardly lot, it shall be from thorns and blood!"',
  tooltip: function () {
    function displayName(name, rarity) {
      if (rarity === 5) {
        //
      } else if (rarity === 4) {
        //
      } else if (rarity === 3) {
        return `<h3 style='color: #71CDFF;'>${name}</h3>`;
      } else if (rarity === 2) {
        //
      } else if (rarity === 1) {
        //
      } else {
        return '';
      }
    }

    function displayType(types) {
      let type = '';

      /**
       * Armor and weapons gets bold, quest items and triggers get semi-bold.
       */
      if (types.includes(10) || types.includes(30)) {
        type += "<h5 style='font-weight: 700;'>";
      } else if (types.includes(2) || types.includes(3)) {
        type += "<h5 style='font-weight: 600;'>";
      } else {
        type += "<h5 style='font-weight: 500;'>";
      }

      if (types.includes(0)) {
        type += 'Currency';
      } else if (types.includes(2)) {
        type += 'Quest Item';
      } else if (types.includes(3)) {
        type += 'Begins a quest';
      } else if (types.includes(11)) {
        type += 'Head';
      }

      type += '</h5>';
      return type;
    }

    function displayUnique(types) {
      if (types.includes(1)) {
        return '<h6>Unique</h6>';
      } else {
        return '';
      }
    }

    function displayModifiers(modifiers) {
      let stats = '';

      // @todo test for all kinds of shenanigans
      if (Object.keys(modifiers).length) {
        stats += '<ul>';

        if (modifiers.stamina) {
          stats +=
            '<li><strong>Stamina: </strong>' + modifiers.stamina + '</li>';
        }

        if (modifiers.agility) {
          stats +=
            '<li><strong>Agility: </strong>' + modifiers.agility + '</li>';
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
      displayType(this.types) +
      displayUnique(this.types) +
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
