const faker = require('faker/locale/en_US');

module.exports = () => {
  // generate fake data on every request
  return [...new Array(10).keys()].reduce((acc) => {
    return acc.users.push(faker.helpers.createCard()) && acc;
  }, { users: [] });
};
