all: creature-data

.PHONY: creature-data

creature-data:
	yaml2json creatures.yaml
