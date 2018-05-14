'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Boxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
				type: DataTypes.STRING,
				validation: { max: 50 },
				allowNull: false,
			},
			weight: {
				type: DataTypes.INTEGER,
				validate: { isInt: true },
				allowNull: false,
			},
			fragile: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: 'created', //enroute, stored, ..
      },
      LocationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Locations',
          key: 'id'
        },
      },
      SizeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sizes',
          key: 'id'
        },
      },
      RenterId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Renters',
          key: 'id'
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable('Boxes');
  },
};
