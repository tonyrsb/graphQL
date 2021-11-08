const gender = 'Female';
const status = 'alive';
const count = {query: `{
  characters(page: 2, filter: { gender: "${gender}", status: "${status}" }) {
    info {
      count
    }
    results {
      name,
      id,
      status,
      species,
      gender
    }
  }
}`};
const invalidGender = {query: `{
  characters(page: 2, filter: { gender: "females", status: "${status}" }) {
    info {
      count
    }
    results {
      name,
      id,
      status,
      species,
      gender
    }
  }
}`};
module.exports = {
	count,
	invalidGender
};