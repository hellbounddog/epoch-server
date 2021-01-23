/**
 * Entities are generated objects.
 *
 * @todo coords: All entities must have an x,y or x,y,z Vector for coords.
 * @todo rotation: All entities must have an x,y,z Vector3
 */

import {EntityType} from './entity-type.mjs';
import {Faction} from './faction.mjs';

const Entity2D = {};

/**
 * Validates the provided Entity2D.
 */
function validate(entity) {
  // @todo implement validation
}

/**
 * Compares the source's level with the target.
 */
function compareLevel(source, target) {
  // @todo implement
}

/**
 * Returns the level of provided Entity2D.
 */
function getLevel() {
  // @todo implement
}

/**
 * When only entity is provided, trigger a natural level up.
 *
 * @param {Entity2D} entity Object to set level to.
 * @param {number} level Leave at zero to start a natural level up.
 */
function setLevel(entity, level = 0) {
  if (level > 0) {
    entity.level = level;
  } else {
    // @todo implement natural level up.
  }
}

/**
 *
 *
 * @param {EntityType} type The type of the entity.
 * @param {Faction} faction The factions the entity is friendly or
 *                          hostile towards.
 */
function createEntity(type, faction) {
  // @todo implement
}

export {createEntity, setLevel, getLevel, compareLevel, validate};
