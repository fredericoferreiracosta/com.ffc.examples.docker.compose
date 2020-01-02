FROM node:12 AS STAGE1
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:2.4 AS STAGE2
COPY --from=STAGE1 /usr/src/app/dist/ui /usr/local/apache2/htdocs/
EXPOSE 80
