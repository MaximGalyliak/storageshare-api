'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Renters',
			[
				{
					name: 'John Doe',
					email: 'demo@demo.com',
					paypal_id: 'johndoepaypal',
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mike Doe',
					email: 'mike@demo.com',
					paypal_id: 'johndoepaypal',
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jane Doe',
					email: 'jane@demo.com',
					paypal_id: 'johndoepaypal',
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jack Doe',
					email: 'jax@demo.com',
					paypal_id: 'johndoepaypal',
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Charlie Doe',
					email: 'rose@demo.com',
					paypal_id: 'johndoepaypal',
					address: '911 XYZ St, XYZ, XZ 11111',
					phone: '210-555-5555',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Renters', null, {});
	},
};
