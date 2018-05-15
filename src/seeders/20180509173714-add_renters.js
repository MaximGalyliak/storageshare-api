'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		var bcrypt = require('bcrypt');
		
		return queryInterface.bulkInsert(
			'Renters',
			[
				{
					name: 'John Doe',
					email: 'demo@demo.com',
					paypal_id: 'johndoepaypal',
					address: '4424 Freeport Blvd Suite 1, Sacramento, CA 95822',
					phone: '210-555-5555',
					password: bcrypt.hashSync('test', bcrypt.genSaltSync()),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Mike Doe',
					email: 'mike@demo.com',
					paypal_id: 'johndoepaypal',
					address: '4424 Freeport Blvd Suite 1, Sacramento, CA 95822',
					phone: '210-555-5555',
					password: bcrypt.hashSync('pass', bcrypt.genSaltSync()),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jane Doe',
					email: 'jane@demo.com',
					paypal_id: 'johndoepaypal',
					address: '2805 Marconi Ave Suite 3, Sacramento, CA 95821',
					phone: '210-555-5555',
					password: bcrypt.hashSync('password', bcrypt.genSaltSync()),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Jack Doe',
					email: 'jax@demo.com',
					paypal_id: 'johndoepaypal',
					address: '2445 Fair Oaks Blvd, Sacramento, CA 95825',
					phone: '210-555-5555',
					password: bcrypt.hashSync('testpass', bcrypt.genSaltSync()),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Charlie Doe',
					email: 'rose@demo.com',
					paypal_id: 'johndoepaypal',
					address: '7465 Rush River Dr Suite 420, Sacramento, CA 95831',
					phone: '210-555-5555',
					password: bcrypt.hashSync('123456789', bcrypt.genSaltSync()),
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
