all: creature-data

.PHONY: creature-data

creature-data:
	yaml2json < creatures.yaml > creatures.min.json
	jsonpp < creatures.min.json > creatures.json

