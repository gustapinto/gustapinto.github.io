FROM node:19-alpine

WORKDIR /githubio

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
