const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we press SEARCH button and enter sth in the search field', () => undefined);

Then('it loads every matching result to our entered sentence', () => undefined);