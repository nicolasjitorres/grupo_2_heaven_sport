module.exports = (sequelize, DataTypes) =>{

    let alias = 'Carrito';
    
    let columns = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario:{
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'usuarios',
                    key: 'id'
                }
            }
        },
        precio_total:{
            type: DataTypes.BIGINT,
        }
    }

    let config = {
        tableName: 'carritos',
        timestamps: false
    }

    let Carrito = sequelize.define(alias, columns, config);


    Carrito.associate = function(models){

        Carrito.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey:'id_usuario'
        });

        Carrito.belongsToMany(models.ProductoTalle, {
            as: 'productosTalles',
            through: 'CarritoProductoTalle',
            foreignKey: 'id_carrito',
            otherKey: 'id_producto_talle',
            timestamps: false
        });

    }

    return Carrito;
}   