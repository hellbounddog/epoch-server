JS = $(shell find ./src -name "*.js")
MJS = $(shell find ./src -name "*.mjs")
DATA = $(shell find ./data -name "*.yaml")

all: sentient-types-data attributes-data creatures-data spells-data items-data player-data data tsc doc sass generate-linux-shell

.PHONY: generate-linux-shell
generate-linux-shell:
	@$(shell for i in `echo node_modules/*/bin`; do echo -n export PATH=\"\$PATH:`pwd`/$i | sed "s/bin\//bin/" && echo '";'; done)

.PHONY: sass
sass:
	@sass sass/main.sass > public/epoch.css

.PHONY: tsc
tsc:
	@#tsc

.PHONY: doc
doc:
	@rm -rf ./doc
	@#jsdoc $(JS) $(MJS) -d doc

.PHONY: data
data: $(DATA)
	@echo $(DATA)
	@#TODO

.PHONY: sentient-types-data
sentient-types-data:
	@yaml2json < data/sentient-types.yaml > data/json/sentient-types.min.json
	@jsonpp < data/json/sentient-types.min.json > data/json/sentient-types.json

.PHONY: attributes-data
attributes-data:
	@yaml2json < data/attributes.yaml > data/json/attributes.min.json
	@jsonpp < data/json/attributes.min.json > data/json/attributes.json

.PHONY: items-data
items-data:
	@yaml2json < data/items.yaml > data/json/items.min.json
	@jsonpp < data/json/items.min.json > data/json/items.json

.PHONY: creatures-data
creatures-data:
	@yaml2json < data/creatures.yaml > data/json/creatures.min.json
	@jsonpp < data/json/creatures.min.json > data/json/creatures.json

.PHONY: spells-data
spells-data:
	@yaml2json < data/spells.yaml > data/json/spells.min.json
	@jsonpp < data/json/spells.min.json > data/json/spells.json

.PHONY: player-data
player-data:
	@yaml2json < data/player.yaml > data/json/player.min.json
	@jsonpp < data/json/player.min.json > data/json/player.json

