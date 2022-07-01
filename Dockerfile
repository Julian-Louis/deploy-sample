FROM node:14

WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

COPY pnpm-lock.yaml ./
ADD . ./
RUN pnpm install -r --prod


EXPOSE 3000
CMD [ "node", "index.js" ]

