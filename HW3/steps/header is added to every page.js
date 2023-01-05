const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we scroll to the top of page', () => undefined);

Then('header is present', () => undefined);