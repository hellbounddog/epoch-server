/**
 * Entities are generated objects.
 *
 * @todo coords: All entities must have an x,y or x,y,z Vector for coords.
 * @todo rotation: All entities must have an x,y,z Vector3
 */
/**
 * When only entity is provided, trigger a natural level up.
 *
 * @param {Entity} entity Object to set level to.
 * @param {number} level Leave at zero to start a natural level up.
 */
declare function setLevel(entity: any, level?: number | undefined): void;
/**
 * Entities are generated objects.
 *
 * @todo coords: All entities must have an x,y or x,y,z Vector for coords.
 * @todo rotation: All entities must have an x,y,z Vector3
 */
/**
 * When only entity is provided, trigger a natural level up.
 *
 * @param {Entity} entity Object to set level to.
 * @param {number} level Leave at zero to start a natural level up.
 */
declare function setLevel(entity: any, level?: number): void;
declare function createEntity(type: any, faction: any): void;
/**
 *
 *
 * @param {EntityType} type The type of the entity.
 * @param {Faction} faction The factions the entity is friendly or
 *                          hostile towards.
 */
declare function createEntity(type: any, faction: any): void;
//# sourceMappingURL=entity.d.ts.map