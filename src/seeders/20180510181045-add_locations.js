'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Locations',
			[
				{
					address: '2200 16th St, Sacramento, CA 95818',
					inspected: true,
					space_total: 500,
					space_rented: 200,
					min_box_size: 50,
					max_box_size: 500,
					LenderId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					address: '6619 Florin Rd, Sacramento, CA 95828',
					inspected: true,
					space_total: 1000,
					space_rented: 0,
					min_box_size: 0,
					max_box_size: 0,
					LenderId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					address: '604 W El Camino Ave, Sacramento, CA 95833',
					inspected: false,
					space_total: 1500,
					space_rented: 100,
					min_box_size: 0,
					max_box_size: 0,
					LenderId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					address: '2005 Town Center Plaza, West Sacramento, CA 95691',
					inspected: true,
					space_total: 200,
					space_rented: 0,
					min_box_size: 0,
					max_box_size: 0,
					LenderId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					address: '7141 Franklin Blvd, Sacramento, CA 95823',
					inspected: true,
					space_total: 500,
					space_rented: 0,
					min_box_size: 0,
					max_box_size: 0,
					LenderId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Locations', null, {});
	},
};
