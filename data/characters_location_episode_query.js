const name = 'Shmlangela Shmlobinson-Shmlower';
const characters = {query: `{
  characters(filter: { name: "${name}" }) {
    results {
        name,
        id,
        status,
        species,
        gender,
        image,
        type,
        origin {
          id,
          name,
        },
        location {
          id,
          name,
          dimension,
          type,
        },
        episode {
          id,
          episode,
          name,
          air_date,
        },
    }
  }
}`};

const location = {query: `{
  location(id:"6") {
    id,
    name,
    type,
    dimension,
    residents{
      id
      name
    }
  }
}`};

const episode = {query: `{
  episode(id:"8") {
    id
    name
    characters{
      id
      name
      status
    }
  }
}`};

module.exports = {
	characters,
	location,
	episode
};