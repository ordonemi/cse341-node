const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Mongo DB collection named contacts that holds contact information.'
  },
  host: ['localhost:8080', 'cse341-node-dj67.onrender.com']
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc);