'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Items',
			[
				{
					name: 'Wooden spatula',
					description: 'Kitchen item',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Knife set',
					description: 'Cutko',
					BoxId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Leather sofa',
					description: 'dark gray',
					BoxId: 22,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Leather love seat',
					description: 'dark gray',
					BoxId: 22,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Leather recliner',
					description: 'dark gray',
					BoxId: 22,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Soccer ball',
					description: 'adidas',
					BoxId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cricket Bat',
					description: 'Nike',
					BoxId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Cricket helmet',
					description: 'Nike',
					BoxId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Bike saddle',
					description: 'carbon fiber black',
					BoxId: 12,
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
