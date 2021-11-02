FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN CI=true npm test

ENV REACT_APP_BACKEND_URL=//localhost:3001

CMD ["npm", "start"]
