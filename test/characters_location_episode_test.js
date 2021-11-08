/* eslint-disable no-console */
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));
require ('dotenv').config();

const query = require('../data/characters_location_episode_query.js');
const code = require('../helpers/status_code.json');
const { graphql } = require('../page/graphql_page');

const testCase = {
	describe: 'Question Test3 Point 1 | Count Female Characters with Alive Status',
	describePositive: 'Positive Test Case',
	describeNegative: 'Negative Test Case',
	positive: 'As an user, I can make sure that Characters Shmlangela Shmlobinson-Shmlower listed on Location and Episode Query'
};

describe(`@post @charLocEpisode ${testCase.describe}`, () => {
	describe(testCase.describePositive, () => {
		it(testCase.positive, async () => {
			const resChar = await graphql(query.characters);
			assert(resChar.status).to.equal(code.successOK.codeNumber, resChar.body.message);
			const resLoc = await graphql(query.location);
			assert(resLoc.status).to.equal(code.successOK.codeNumber, resLoc.body.message);
			const resEpisode = await graphql(query.episode);
			assert(resEpisode.status).to.equal(code.successOK.codeNumber, resEpisode.body.message);
			assert(resChar.body.data.characters.results[0].location.id).to.equal(resLoc.body.data.location.id);
			assert(resChar.body.data.characters.results[0].location.name).to.equal(resLoc.body.data.location.name);
			assert(resChar.body.data.characters.results[0].location.type).to.equal(resLoc.body.data.location.type);
			assert(resChar.body.data.characters.results[0].location.dimension).to.equal(resLoc.body.data.location.dimension);
			assert(resChar.body.data.characters.results[0].episode[0].id).to.equal(resEpisode.body.data.episode.id);

			const selectedCharacter = resEpisode.body.data.episode.characters.find(function(item) {
				return item.name === 'Shmlangela Shmlobinson-Shmlower';
			});

			assert(resChar.body.data.characters.results[0].name).to.equal(selectedCharacter.name);
            
            
		});
	});
	
});