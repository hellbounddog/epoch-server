JS = $(shell find ./src -name "*.js")
DATA = $(shell find ./data -name "*.yaml")

all: attributes-data creature-data spell-data itemtypes-data item-data player-data data tsc doc sass

.PHONY: sass
sass:
	@sass sass/main.sass > static/epoch.css

.PHONY: tsc
tsc:
	@tsc

.PHONY: doc
doc:
	@rm -rf ./doc
	@jsdoc $(JS) -d doc

.PHONY: data
data: $(DATA)
	@echo $(DATA)
	@#TODO

.PHONY: attributes-data
attributes-data:
	@yaml2json < data/attributes.yaml > data/json/attributes.min.json
	@jsonpp < data/json/attributes.min.json > data/json/attributes.json

.PHONY: itemtypes-data
itemtypes-data:
	@yaml2json < data/itemtypes.yaml > data/json/itemtypes.min.json
	@jsonpp < data/json/itemtypes.min.json > data/json/itemtypes.json

.PHONY: item-data
item-data:
	@yaml2json < data/items.yaml > data/json/items.min.json
	@jsonpp < data/json/items.min.json > data/json/items.json

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

