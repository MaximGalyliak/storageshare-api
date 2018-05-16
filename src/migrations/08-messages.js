'use strict';
module.exports = {
	up: (queryInterface, DataTypes) => {
		return queryInterface.createTable('Messages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			isAccepted: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			BoxId: {
				type: DataTypes.INTEGER,
				reference: {
					model: 'Boxes',
					key: 'id',
				},
			},
			RenterId: {
				type: DataTypes.INTEGER,
				reference: {
					model: 'Renters',
					key: 'id',
				},
			},
			LocationId: {
				type: DataTypes.INTEGER,
				reference: {
					model: 'Locations',
					key: 'id',
				},
			},
			LenderId: {
				type: DataTypes.INTEGER,
				reference: {
					model: 'Lenders',
					key: 'id',
				},
			},
		});
	},
	down: (queryInterface) => {
		return queryInterface.dropTable('Messages');
	},
};
