FROM cypress/base:16.14.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install
# We verify cypress is installed
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"]

