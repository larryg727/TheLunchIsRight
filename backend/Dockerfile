FROM node:14.15 as app_build

WORKDIR /app
ENV NODE_ENV=production

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . /app

EXPOSE 5000

CMD ["npm", "start"]