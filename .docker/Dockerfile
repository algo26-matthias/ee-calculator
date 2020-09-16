FROM node:13

RUN npm install -g http-server jasmine

WORKDIR /home/node/app
COPY --chown=node:node ./package.json /home/node/app
RUN npm install --silent

EXPOSE 8199

CMD cd /home/node/app/public && http-server -p 8199
