module.exports = function(sequelize, DataTypes) {
	var Sizes = sequelize.define(
		'Sizes',
		{
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
		},
		{
			freezeTableName: true,
		}
	);

	Sizes.associate = function(models) {
		Sizes.hasMany(models.Locations);
	};

	Sizes.associate = function(models) {
		Sizes.hasMany(models.Boxes);
	};

	return Sizes;
};
