const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we enter invalid phonenumber', () => undefined);

Then('phonenumber validation error appears', () => undefined);