'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Messages', [
			{
				message: 'I would like to store my boxes at your location please.',
				BoxId: 22,
				LocationId: 12,
				readByRenter: true,
				isAccepted: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'I would like to store my boxes at your location please.',
				BoxId: 12,
				LocationId: 2,
				readByRenter: true,
				isAccepted: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'Need space for Kincky stuff.. you can use them as well',
				BoxId: 32,
				LocationId: 22,
				readByRenter: false,
				isAccepted: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'Kincky stuff.. store them & use them',
				BoxId: 42,
				LocationId: 22,
				readByRenter: false,
				isAccepted: false,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Messages', null, {});
	},
};
