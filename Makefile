include .env
export
run:
	node ./example/main.js

build:
	docker build -t mongo-local .

docker:
	docker run -d --name mongo-local -p 27017:27017 -v ${PATH_REPOSITORY}/VOLUME:/data/db mongo-local

