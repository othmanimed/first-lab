FROM node:latest
RUN  mkdir -p /first-lab
WORKDIR /first-lab
COPY package.json /first-lab
RUN npm install
COPY . /first-lab
EXPOSE 3000
CMD [ “npm”, “start” ]
