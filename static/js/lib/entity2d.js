"use strict";
/**
 * Entities are generated objects.
 *
 * @todo coords: All entities must have an x,y or x,y,z Vector for coords.
 * @todo rotation: All entities must have an x,y,z Vector3
 */
const Entity2D = function () {
    /**
     * .
     */
    /**
     *
     */
    function compareLevel() {
        // @todo
    }
    /**
     *
     */
    function getLevel() {
        // @todo
    }
    /**
     * When only entity is provided, trigger a natural level up.
     *
     * @param {Entity} entity Object to set level to.
     * @param {number} level Leave at zero to start a natural level up.
     */
    function setLevel(entity, level = NULL) {
        if (level) {
            entity.level = level;
        }
        else {
            //
        }
    }
    ;
    /**
     *
     *
     * @param {EntityType} type The type of the entity.
     * @param {Faction} faction The factions the entity is friendly or
     *                          hostile towards.
     */
    function createEntity(type, faction) {
        //
    }
    ;
};
//# sourceMappingURL=entity2d.js.map