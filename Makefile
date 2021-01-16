JS = $(shell find . -name "*.js" -not -path "./node_modules/*" -not -path "./doc/*")

all: creature-data spell-data player-data doc
	@tsc

.PHONY: doc
doc:
	@jsdoc $(JS) -d doc

.PHONY: creature-data
creature-data:
	@yaml2json < data/creatures.yaml > data/json/creatures.min.json
	@jsonpp < data/json/creatures.min.json > data/json/creatures.json

.PHONY: spell-data
spell-data:
	@yaml2json < data/spells.yaml > data/json/spells.min.json
	@jsonpp < data/json/spells.min.json > data/json/spells.json

.PHONY: player-data
player-data:
	@yaml2json < data/player.yaml > data/json/player.min.json
	@jsonpp < data/json/player.min.json > data/json/player.json

