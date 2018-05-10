module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'Locations',
		{
			address: {
				type: DataTypes.STRING,
				validation: {
					len: [10, 255],
				},
				allowNull: false,
			},
			space_total: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			space_rented: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				allowNull: false,
			},
			space_available: {
				type: DataTypes.VIRTUAL,
				get: function() {
					return this.get('space_total') - this.get('space_rented');
				},
				defaultValue: 0,
			},
			inspected: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
		},
		{
			freezeTableName: true,
		}
	);

	Locations.associate = function(models) {
		Locations.belongsTo(models.Lenders, {
			foreignKey: {
				allowNull: false,
			},
		});
	};
};
