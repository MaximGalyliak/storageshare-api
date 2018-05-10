module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'Sizes',
		{
			description: {
				type: DataTypes.STRING,
				validation: { max: 50 },
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL(6, 2),
				defaultValue : 0.00,
				allowNull: false,
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

};
