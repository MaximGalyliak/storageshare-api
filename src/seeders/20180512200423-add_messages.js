'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Messages', [
			{
				message: 'I would like to store my boxes at your location please.',
				BoxId: 3,
				LocationId: 2,
				readByRenter: true,
				isAccepted: null,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'I would like to store my boxes at your location please.',
				BoxId: 2,
				LocationId: 1,
				readByRenter: true,
				isAccepted: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'Need space for Kincky stuff.. you can use them as well',
				BoxId: 4,
				LocationId: 3,
				readByRenter: false,
				isAccepted: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				message: 'Kincky stuff.. store them & use them',
				BoxId: 5,
				LocationId: 3,
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
