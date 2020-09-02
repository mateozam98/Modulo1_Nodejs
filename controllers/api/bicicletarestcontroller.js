var Bicicleta = require('../../models/bicicletamodel');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
        data: Bicicleta.data,
        total: Bicicleta.data.length
    });
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res){

    const { id, color, modelo, ciudad, lat, lng } = req.body;

    let objetobicicleta = new Bicicleta(id, color, modelo, ciudad);
    bici.ubicacion = [lat, lng];
    Bicicleta.add(objetobicicleta);

    res.status(200).json({
        data: Bicicleta.data,
        total: Bicicleta.data.length
    });
}


exports.bicicleta_delete = function(req, res) {

    const { id } = req.body;

    Bicicleta.removeById(id);

    res.status(204).send();
}