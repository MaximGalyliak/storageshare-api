module.exports = function(sequelize, DataTypes) {
	var Messages = sequelize.define(
		'Messages',
		{
			message: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			isAccepted: {
				type: DataTypes.BOOLEAN,
				defaultValue: null, //will set to true or false when lenders takes an action
			},
			readByRenter: {
				type: DataTypes.BOOLEAN,
				defaultValue: true, //will set to false when lender takes an action
			},
		},
		{
			freezeTableName: true,
		}
	);

	// Not needed- You can get LenderId from LocationId
	// Messages.associate = function(models) {
	// 	Messages.belongsTo(models.Lenders, {
	// 		foreignKey: {
	// 			allowNull: false,
	// 		},
	// 	});
	// };

	// Not needed- You can get RenterId from BoxId
	// Messages.associate = function(models) {
	// 	Messages.belongsTo(models.Renters, {
	// 		foreignKey: {
	// 			allowNull: false,
	// 		},
	// 	});
	// };

	Messages.associate = function(models) {
		Messages.belongsTo(models.Locations, {
			foreignKey: {
				allowNull: true,
			},
		});
		Messages.belongsTo(models.Boxes, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Messages;
};
