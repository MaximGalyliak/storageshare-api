'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Boxes',
			[
				{
					description: 'Kitchen 1',
					weight: 50,
					fragile: true,
					status: 'created',
					RenterId: 2,
					SizeId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Sporting goods',
					weight: 25,
					fragile: false,
					status: 'housed',
					LocationId: 62,
					RenterId: 12,
					SizeId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Furniture',
					weight: 250,
					fragile: false,
					status: 'enroute',
					RenterId: 12,
					SizeId: 12,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Kinky 1',
					weight: 250,
					fragile: false,
					status: 'created',
					RenterId: 12,
					SizeId: 22,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					description: 'Kinky 2',
					weight: 250,
					fragile: false,
					status: 'created',
					RenterId: 12,
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
