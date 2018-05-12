'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Messages', [
			{
				message: 'I would like to store my boxes at your location please.',
				isAccepted: false,
				RenterId: 1,
				LenderId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Messages', null, {});
  }
};
