const { Given, When, Then } = require('@cucumber/cucumber');

Given('we are at {string} and see the header with navigation in it', (url) => url);

When('we press CAREERS button', ()=> undefined);

Then('the button redirect us to {string}', (url) => url);