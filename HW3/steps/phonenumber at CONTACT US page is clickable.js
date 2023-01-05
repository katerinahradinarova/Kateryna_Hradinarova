const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string}', (url) => url);

When('we click on the phonenumber', () => undefined);

Then('browser popup window is shown and asks us to make a call on the following number', () => undefined);