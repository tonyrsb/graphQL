/* eslint-disable no-console */
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));
require ('dotenv').config();

const query = require('../data/count_female_alive_query.js');
const code = require('../helpers/status_code.json');
const schema = require('../data/count_female_alive_schema.json');
const { graphql } = require('../page/graphql_page');

const testCase = {
	describe: 'Question Test3 Point 1 | Count Female Characters with Alive Status',
	describePositive: 'Positive Test Case',
	describeNegative: 'Negative Test Case',
	positive: {
		showCharacters: 'As an user, I can show and count list of Female Characters with Alive status'
	},
	negative: {
		invalidGender: 'As an user, I can not show and count list of Female Characters with Alive status using invalid gender'
	}
};

describe(`@post @countFemaleCharacters ${testCase.describe}`, () => {
	describe(testCase.describePositive, () => {
		it(`${testCase.positive.showCharacters}`, async () => {
			const response = await graphql(query.count);
			assert(response.status).to.equal(code.successOK.codeNumber, response.body.message);
			assert(response.body.data.characters.info.count).to.be.exist;
			assert(response.body.data.characters.results[0].name).to.be.exist;
			assert(response.body.data.characters.results[0].id).to.be.exist;
			assert(response.body.data.characters.results[0].status).to.be.exist;
			assert(response.body.data.characters.results[0].species).to.be.exist;
			assert(response.body.data.characters.results[0].gender).to.be.exist;
			assert(response.body).to.be.jsonSchema(schema);
		});
	});
	describe(testCase.describeNegative, () => {
		it(`${testCase.negative.invalidGender}`, async () => {
			const response = await graphql(query.invalidGender);
			assert(response.status).to.equal(code.notFound.codeNumber, response.body.message);
			assert(response.body.errors[0].message).to.equal(code.notFound.message);
			assert(response.body.data.characters).to.equal(null);
		});
	});
});