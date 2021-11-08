const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.API_GRAPHQL);

const graphql = (query) => api
	.post('/graphql')
	.send(query);


module.exports = {
	graphql
};
