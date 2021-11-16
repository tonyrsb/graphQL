# GraphQL API Testing Framework

> GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

> Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases

> Chai is a assertion library for Node and the browser and can be used with any testing framework (like Mocha)

### Prerequisites:

- Install Node.js and npm, we will use npm to install Mocha and Chai
- POSTMAN for making fast HTTP requests to the API

### How to Getting Started:

```sh
$ npm install
$ cp env.sample .env

```

### Directory Sturcture

- api
  - helpers
  - data
  - page
  - test
- node_modules
- reports
- .env
- .esltint.json
- package.json

### Here is the description of directories under `api`

| Directory   | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| helper      | Common code, for general needed such as endpoint, response_code, token, etc |                                  |
| data        | Appropriate query performed by the consumer                                 |
| test        | Several test cases based on specific query                                  |

### Style

1. Filename using `snake_case`
2. Variable name using `camelCase`

## Run the test

You can specify the command that you want to run from package.json file.

###### Here are our default commands:

#

```sh
$ npm run test-graphql | to run all tests
$ npm run test-graphql -- --grep @tag | to run test with specific tag
$ npm run test-graphql -- --grep @skip --invert | to exclude @skip tag

```

# Let's make TRUSTED and IMPACTFUL tests!
