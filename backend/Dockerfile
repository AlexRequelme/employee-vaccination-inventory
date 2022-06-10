FROM node

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]