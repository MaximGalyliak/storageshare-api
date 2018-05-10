module.exports = function(sequelize, DataTypes) {
	var Boxes = sequelize.define(
		'Boxes',
		{
			description: {
				type: DataTypes.STRING,
				validation: { max: 50 },
				allowNull: false,
			},
			items: {
				type: DataTypes.STRING,
				validation: { max: 255 },
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
		},
		{
			freezeTableName: true,
		}
	);

	Boxes.associate = function(models) {
		
		Boxes.belongsTo(models.Locations, {
			foreignKey: {
				allowNull: true,
			},
		});
	};

	Boxes.associate = function(models) {
		Boxes.belongsTo(models.Sizes, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	Boxes.associate = function(models) {
		Boxes.belongsTo(models.Renters, {
			foreignKey: {
				allowNull: false,
			},
		});
	};

	return Boxes;
};
