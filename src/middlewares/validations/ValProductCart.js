const { body } = require('express-validator');

const path = require('path');

let ValProductCart = [
    body('id_talle')
        .notEmpty().withMessage('Se debe escoger un talle del listado.'),
    body('cantidad_producto')
        .notEmpty(),

]

module.exports = ValProductCart;