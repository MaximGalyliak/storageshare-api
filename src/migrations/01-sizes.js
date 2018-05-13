'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Sizes', {
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
			price: {
				type: DataTypes.DECIMAL(6, 2),
				defaultValue: 0.0,
			},
			height: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				isNumeric: true,
			},
			width: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				isNumeric: true,
			},
			depth: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				isNumeric: true,
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
    return queryInterface.dropTable('Sizes');
  },
};
