FROM node:18

RUN mkdir -p /app

COPY package.json /app

WORKDIR /app

RUN npm install

COPY . /app

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["npm"]

CMD ["run", "dev"]
