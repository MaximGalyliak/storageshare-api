'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Boxes',
			[
				{
					id: 1,
					description: 'Kitchen 1',
					weight: 50,
					fragile: true,
					status: 'created',
					RenterId: 1,
					SizeId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					description: 'Sporting goods',
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
					id: 3,
					description: 'Furniture',
					weight: 250,
					fragile: false,
					status: 'enroute',
					RenterId: 2,
					SizeId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					description: 'Kinky 1',
					weight: 250,
					fragile: false,
					status: 'created',
					RenterId: 2,
					SizeId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 5,
					description: 'Kinky 2',
					weight: 250,
					fragile: false,
					status: 'created',
					RenterId: 2,
					SizeId: 3,
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
