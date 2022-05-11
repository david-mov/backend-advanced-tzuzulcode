FROM node:16-alpine

ENV PROJECT_DIR=/app

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR

RUN npm install

COPY . $PROJECT_DIR

ENV APP_PORT=3000

EXPOSE $APP_PORT

HEALTHCHECK CMD curl --fail http://localhost:$APP_PORT || exit

CMD ["npm", "start"]