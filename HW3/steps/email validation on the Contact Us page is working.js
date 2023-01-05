const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we enter invalid email', () => undefined);

Then('email validation error appears', () => undefined);