const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
	var Lenders = sequelize.define(
		'Lenders',
		{
			name: {
				type: DataTypes.STRING,
				validation: { len: [1, 50] },
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					isEmail: true,
					isUnqie: function(value, next) {
						Lenders.find({ where: { email: value } })
							.then((lender) => {
								if (lender) return next('Email already in use');
								next();
							})
							.catch((error) => {
								if (error) return next(error);
							});
					},
				},
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			background_checked: {
				type: DataTypes.BOOLEAN,
				allowNull: true,
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

	Lenders.prototype.validPassword = function(plainTextPassword) {
		return bcrypt.compareSync(plainTextPassword, this.password);
	};

	Lenders.beforeCreate(function(lender, options) {
		return cryptPassword(lender.password)
			.then((success) => {
				lender.password = success;
			})
			.catch((err) => {
				if (err) {
					console.log(err);
				}
			});
	});

	function cryptPassword(password) {
		return new Promise(function(resolve, reject) {
			bcrypt.genSalt(10, function(err, salt) {
				if (err) {
					return reject(err);
				}
				bcrypt.hash(password, salt, function(err, hash) {
					if (err) return reject(err);
					return resolve(hash);
				});
			});
		});
	}

	Lenders.associate = function(models) {
		Lenders.hasMany(models.Locations, {
			onDelete: 'cascade',
		});
	};

	return Lenders;
};
