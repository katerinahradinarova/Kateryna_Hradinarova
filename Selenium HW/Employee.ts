"use strict";

import { Builder, By } from 'selenium-webdriver';

export class Employee {
	username: string;
	password: string;

	constructor(username: string, password: string) {
		this.username = username;
		this.password = password;
	}

	static employeeName = 'Odis  Adalwin';
	static driver = new Builder().forBrowser('chrome').build();

	static async login() {
		await Employee.driver.get("https://opensource-demo.orangehrmlive.com/");
		await Employee.driver.manage().setTimeouts({ implicit: 100000 });

		const accessData = await Employee.driver.findElements(By.css('.oxd-sheet .oxd-text--p'));
		const username = (await accessData[0].getText()).split(' ').pop() || "";
		const password = (await accessData[1].getText()).split(' ').pop() || "";

		await Employee.driver.findElement(By.css('[placeholder="Username"]')).sendKeys(username);
		await Employee.driver.findElement(By.css('[placeholder="Password"]')).sendKeys(password);

		await Employee.driver.findElement(By.css('button[type="submit"]')).click();

		return 'success';
	}

	async addEmployee() {

		if (!Employee.driver) {
			return;
		}

		await Employee.driver.findElement(By.xpath('//a[@class="oxd-main-menu-item" and .//span[text()="Admin"]]')).click();
		await Employee.driver.findElement(By.xpath('//button[contains(., "Add")]')).click();

		const display = await Employee.driver.findElement(By.css('.orangehrm-full-width-grid')).getCssValue('display');

		if (display === "grid") {
			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="User Role"]]//div[contains(@class, "oxd-select-text")]')).click();
			await Employee.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="ESS"]]')).click();

			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Status"]]//div[contains(@class, "oxd-select-text")]')).click();
			await Employee.driver.findElement(By.xpath('//div[@role="option" and .//span[text()="Enabled"]]')).click();

			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Employee Name"]]//input')).sendKeys(Employee.employeeName);

			await Employee.driver.findElement(By.xpath(`//div[@role="option" and .//span[text()="${Employee.employeeName}"]]`)).click();

			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Username"]]//input')).sendKeys(this.username);
			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Password"]]//input')).sendKeys(this.password);
			await Employee.driver.findElement(By.xpath('//div[contains(@class, "oxd-grid-item") and .//label[text()="Confirm Password"]]//input')).sendKeys(this.password);

			await Employee.driver.sleep(500);
			await Employee.driver.findElement(By.xpath('//button[contains(., "Save")]')).click();
			await Employee.driver.sleep(1000)

			return 'success';
		}
	}


	async deleteEmployee() {
		const employeeInfo = await Employee.driver.findElement(By.xpath(`//div[contains(@class, "oxd-table-card ") and .//div[text()="${this.username}"] and .//div[text()="ESS"]]`));
		const removeBtn = await employeeInfo.findElement(By.xpath('.//*[contains(@class, "oxd-icon-button") and .//*[contains(@class, "bi-trash")]]'));
		await removeBtn.click();
		const confirmBtn = await employeeInfo.findElement(By.xpath('//button[contains(., "Yes")]'));
		await confirmBtn.click();

		return 'success';
	}
}