# step 1

FROM node:22.14.0 as baseImage

WORKDIR /app 

COPY package*.json ./

RUN npm install

# step 2

FROM node:22.14.0-slim

WORKDIR /app

COPY --from=baseImage /app/node_modules /app/node_modules

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]