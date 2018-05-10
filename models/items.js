module.exports = function(sequelize, DataTypes) {
	var Items = sequelize.define(
		'Items',
		{
			name: {
				type: DataTypes.STRING,
				validation: { max: 50 },
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				validation: { max: 255 },
			},
		},
		{
			freezeTableName: true,
		}
	);

	Items.associate = function(models) {
		Items.belongsTo(models.Boxes);
	};

	return Items;
};
