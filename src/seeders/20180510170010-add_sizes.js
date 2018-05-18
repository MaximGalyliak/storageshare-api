'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Sizes',
			[
				{
					id: 1,
					description: 'small box',
					price: 50.0,
					height: 18,
					width: 18,
					depth: 18,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					description: 'one room',
					price: 100.0,
					height: 72,
					width: 72,
					depth: 72,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 3,
					description: 'half room',
					price: 75.0,
					height: 36,
					width: 36,
					depth: 36,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 4,
					description: 'two room',
					price: 125.0,
					height: 108,
					width: 108,
					depth: 108,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Sizes', null, {});
	},
};
