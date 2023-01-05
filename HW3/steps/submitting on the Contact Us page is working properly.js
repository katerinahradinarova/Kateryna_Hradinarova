const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we do not filled in any of the required fields', () => undefined);

Then('the form is not sent and it asks us to filled in the fields properly', () => undefined);