'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Boxes',
			[
				{
					description: 'Kitchen 1',
					items: 'Spatulas, Dishes, Cups',
					weight: 50,
					fragile: true,
					status: 'created',
					RenterId: 1,
					SizeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Sporting goods',
					items: 'balls, bats, shoes',
					weight: 25,
					fragile: false,
					status: 'housed',
					LocationId: 1,
					RenterId: 2,
					SizeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Furniture',
					items: 'sofa, table',
					weight: 250,
					fragile: false,
					status: 'enroute',
					RenterId: 2,
					SizeId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Boxes', null, {});
	},
};
