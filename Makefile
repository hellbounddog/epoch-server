all: creature-data spell-data player-data doc

.PHONY: doc
doc:
	jsdoc index.js entity.js -d doc

.PHONY: creature-data
creature-data:
	yaml2json < creatures.yaml > data/creatures.min.json
	jsonpp < data/creatures.min.json > data/creatures.json

.PHONY: spell-data
spell-data:
	yaml2json < spells.yaml > data/spells.min.json
	jsonpp < data/spells.min.json > data/spells.json

.PHONY: player-data
player-data:
	yaml2json < player.yaml > data/player.min.json
	jsonpp < data/player.min.json > data/player.json

