var Bicicleta = require('../models/bicicletamodel');

exports.bicicleta_list = function(req, res){
    res.render('bicicletas/index', {data: Bicicleta.data});
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create');
}

exports.bicicleta_create_post = function(req, res){

    const { id, color, modelo, ciudad, lat, lng } = req.body;

    let object_bicicleta = new Bicicleta(id, color, modelo, ciudad);
    object_bicicleta.ubicacion = [lat, lng];

    Bicicleta.add(object_bicicleta);

    res.redirect('/bicicletas');
}

exports.bicicleta_delete_post = function(req, res){

    const { id } = req.body;
    Bicicleta.removeById(id);

    res.redirect('/bicicletas');
}

exports.bicicleta_update_get = function(req, res){

    const { id } = req.params;

    let data = Bicicleta.findById(id);
    res.render('bicicletas/update', {data});
}

exports.bicicleta_update_post = function(req, res){

    const { id, color, modelo, ciudad, lat, lng } = req.body;

    let objetobicicleta = Bicicleta.findById(id);

    objetobicicleta.id = id;
    objetobicicleta.color = color;
    objetobicicleta.modelo = modelo;
    objetobicicleta.ciudad = ciudad;
    objetobicicleta.ubicacion = [lat, lng];
    
    res.redirect('/bicicletas');
}
