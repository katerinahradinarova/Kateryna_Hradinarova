const { Given, When, Then } = require('@cucumber/cucumber');

Given('we have browser installed and stable internet connection', () => undefined);

When('we go to {string}', (url) => url);

Then('site is loaded without an error', () => null);