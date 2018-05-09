module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'Lenders',
		{
			name: {
				type: DataTypes.STRING,
				validation: { len: [1, 50] },
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				validation: {
					isEmail: true,
				},
				allowNull: false,
			},
			background_checked: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			phone: {
				type: DataTypes.STRING,
				validation: {
					isPhone(phone) {
						if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
							throw new Error('Phone # must be in "111-111-1111" form');
						}
					},
				},
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				validation: {
					len: [10, 255],
				},
				allowNull: false,
			},
		},
		{
			freezeTableName: true,
		}
	);

	Lenders.associate = function(models) {
		Lenders.hasMany(models.Locations, {
			onDelete: 'cascade',
		});
	};
};
