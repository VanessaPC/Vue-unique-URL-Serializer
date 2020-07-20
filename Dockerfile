# base image
FROM node:12.2.0-alpine

# set working directory 
WORKDIR /app

# add `app/node_modules/.bin to $PATH 
ENV path /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@4.4.0 -g

# bundle app source 
COPY . .

# start app 
CMD ["npm", "run", "build"]
