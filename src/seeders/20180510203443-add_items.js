'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Items',
			[
				{
					id: 1,
					name: 'Wooden spatula',
					description: 'Kitchen item',
					BoxId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					name: 'Knife set',
					description: 'Cutko',
					BoxId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					name: 'Leather sofa',
					description: 'dark gray',
					BoxId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					name: 'Leather love seat',
					description: 'dark gray',
					BoxId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 5,
					name: 'Leather recliner',
					description: 'dark gray',
					BoxId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 6,
					name: 'Soccer ball',
					description: 'adidas',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 7,
					name: 'Cricket Bat',
					description: 'Nike',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 8,
					name: 'Cricket helmet',
					description: 'Nike',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 9,
					name: 'Bike saddle',
					description: 'carbon fiber black',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Items', null, {});
	},
};
