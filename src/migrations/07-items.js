'use strict';
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
				type: DataTypes.STRING,
				validation: { max: 50 },
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				validation: { max: 255 },
      },
      BoxId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Boxes",
          key: "id",
        }
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
    return queryInterface.dropTable('Items');
  },
};
