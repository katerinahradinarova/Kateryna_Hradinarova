import { Employee } from './Employee';

import 'jasmine';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe("Login/add/delete user test scenario", function () {
	describe("Testing for logging page", function () {
		it("Takes username and password for logging the user", async function () {
			expect(await Employee.login()).toBe('success');
		});
	});

	const user = new Employee("Mr.Test", "test12345678");

	describe("Adding user info", function () {
		it("Pushes ADD button, fills in the info and the employee info is added", async function () {
			expect(await user.addEmployee()).toBe('success');
		});
	});

	describe("Deleting user info", function () {
		it("Pushes DELETE button and the employee info is removed", async function () {
			expect(await user.deleteEmployee()).toBe('success');
		});
	});

});
