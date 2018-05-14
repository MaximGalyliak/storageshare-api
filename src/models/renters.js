const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
	var Renters = sequelize.define(
		'Renters',
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
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			paypal_id: {
				type: DataTypes.STRING,
				validation: {
					len: [4, 30],
				},
				allowNull: false,
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

	Renters.prototype.validPassword = function(plainTextPassword){
		return bcrypt.compareSync(plainTextPassword, this.password);
	}

	Renters.associate = function(models) {
		Renters.hasMany(models.Boxes, {
			onDelete: 'cascade',
		});
	};

	return Renters;
};
