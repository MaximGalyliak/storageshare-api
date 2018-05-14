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
				validate: {
					isEmail: true,
					isUnqie: 
						function(value, next) {
							Renters.find({where: {email: value}})
								.then((renter) => {
									if(renter)
										return next('Email already in use');
									next();
								})
								.catch(error => {
									if(error)
										return next(error);
								})
						}
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

	Renters.beforeCreate(function(renter, options) {
		return cryptPassword(renter.password)
			.then(success => {
				renter.password = success;
			})
			.catch(err => {
				if(err) { console.log(err); }
			});
	});

	function cryptPassword(password) {
		return new Promise(function(resolve, reject) {
			bcrypt.genSalt(10, function(err, salt) {
				if(err) { return reject(err); }
				bcrypt.hash(password, salt, function(err, hash) {
					if(err) return reject(err);
					return resolve(hash);
				})
			})
		})
	}

	Renters.associate = function(models) {
		Renters.hasMany(models.Boxes, {
			onDelete: 'cascade',
		});
	};

	return Renters;
};
