'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		var bcrypt = require('bcrypt');

		return queryInterface.bulkInsert(
			'Lenders',
			[
				{
					name: 'John Doe',
					email: 'demo@demo.com',
					address: '911 XYZ St, XYZ, XZ 11111',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					background_checked: true,
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mike Doe',
					email: 'mike@demo.com',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jane Doe',
					email: 'jane@demo.com',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					address: '911 XYZ St, XYZ, XZ 11111',
					background_checked: true,
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jack Doe',
					email: 'jax@demo.com',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Charlie Doe',
					email: 'rose@demo.com',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					address: '911 XYZ St, XYZ, XZ 11111',
					background_checked: true,
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Lenders', null, {});
	},
};
