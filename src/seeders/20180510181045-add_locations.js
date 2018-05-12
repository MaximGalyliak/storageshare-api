'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Locations',
			[
				{
					address: '911 XYZ St, XYZ, XZ 11111',
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
					address: '111 ABC St, ABC, AB 11111',
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
					address: '500 Yuma St, Yuma, AZ 11111',
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
					address: '1500 Park Ave, NY, NY 11111',
					inspected: true,
					space_total: 200,
					space_rented: 0,
					min_box_size: 0,
					max_box_size: 0,
					LenderId: 3,
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
