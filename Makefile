BASE_PASTH=$(shell pwd)
FILE_NAME=$(shell date +%Y%m%d%H%M)

build-api: clean
	git clone https://github.com/Qsnh/meedu.git ./api
build-admin: clean
	rm -rf ./admin
	git clone https://github.com/Meedu/backend-v3.git ./source-backend
	echo 'VITE_APP_URL=/./' > ./source-backend/.env
	docker run -it --rm --name js-build -v "${BASE_PASTH}/source-backend":/home -w /home/ node:18.15.0-alpine3.17 sh -c "yarn config set registry https://registry.npm.taobao.org && yarn && yarn build"
	cp -r ./source-backend/dist/ ./admin/
build-site: clean
	rm -rf ./site
	git clone https://github.com/Meedu/frontend-v3.git ./source-frontend
	echo 'VITE_APP_URL=/./' > ./source-frontend/.env
	docker run -it --rm --name js-build -v "${BASE_PASTH}/source-frontend":/home -w /home/ node:18.15.0-alpine3.17 sh -c "yarn config set registry https://registry.npm.taobao.org && yarn && yarn build"
	cp -r ./source-frontend/dist/ ./site/
build-h5: clean
	rm -rf ./h5
	git clone https://github.com/Meedu/h5-v1.git ./source-h5
	echo 'VITE_APP_URL=/./' > ./source-h5/.env
	docker run -it --rm --name js-build -v "${BASE_PASTH}/source-h5":/home -w /home/ node:16.15.0-alpine sh -c "yarn config set registry https://registry.npm.taobao.org && yarn && yarn build"
	cp -r ./source-h5/dist/ ./h5/
publish: clean
	zip w7_meedu_${FILE_NAME}.zip ./Dockerfile ./admin ./api ./h5 ./nginx/default.conf ./site ./start.sh ./supervisor/meedu.ini
clean:
	rm -rf ./source-*
