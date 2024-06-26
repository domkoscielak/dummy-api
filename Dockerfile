FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build application
RUN npm run build

# The command to run  application
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
