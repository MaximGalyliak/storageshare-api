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
                defaultValue: false
            }
        },
        {
            freezeTableName: true,
        }
    );

    // Messages.associate = function(models) {
    //     Messages.hasOne(models.Renters, {
    //         foreignKey: {
    //             allowNull: false,
    //         }
    //     });
    // };

    // Messages.associate = function (models) {
    //     Messages.hasOne(models.Lenders, {
    //         foreignKey: {
    //             allowNull: false,
    //         }
    //     })    
    // };

    return Messages;

};