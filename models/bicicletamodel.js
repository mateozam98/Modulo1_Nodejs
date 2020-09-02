/**
 * Constructor
 * @param {*} id 
 * @param {*} color 
 * @param {*} modelo 
 * @param {*} ciudad 
 * @param {*} ubicacion 
 */
var Bicicletamodel = function(id, color, modelo, ciudad, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ciudad = ciudad;
    this.ubicacion = ubicacion;
}

Bicicletamodel.prototype.toString = function() {
    return 'id: ' + this.id + " | color: " + this.color;
}

/**
 * Almacena todos los registros
 * Stores all records
 */
Bicicletamodel.data = [];

/**
 * Agrega un objeto de tipo bicicleta al arreglo
 * Add a bicycle type object to the array
 * @param {*} bicicleta 
 */
Bicicletamodel.add = function(bicicleta) {
Bicicletamodel.data.push(bicicleta);
}

/**
 * Obtiene una bicicleta deacuerdo al id enviado.
 * Get a bike according to the ID sent.
 * @param {*} idbicicleta 
 */
Bicicletamodel.findById = function(idbicicleta){
    for (var i = 0; i < Bicicletamodel.data.length; i++){
        if (Bicicletamodel.data[i].id == idbicicleta){
            return Bicicletamodel.data[i];
        }
    }
    return {}
}


/**
 * Elimina la bicicleta deacuerdo al identificador que recibe
 * Delete the bike according to the identifier it receives
 * @param {*} idbicicleta 
 */
Bicicletamodel.removeById = function(idbicicleta){
for (var i = 0; i < Bicicletamodel.data.length; i++){
    if (Bicicletamodel.data[i].id == idbicicleta){
        Bicicletamodel.data.splice(i, 1);
        break;
    }
}
}

/**
 * Se agrega informacion de bicicletas
 * Bicycle information is added
 */
var recordone = new Bicicletamodel(1, 'amarillo', 'ecuatoriana', "santarosa", [-3.4572757, -79.9554167]);
var recordtwo = new Bicicletamodel(2, 'azul', 'ecuatoriana', "santarosa", [-3.4572088, -79.9553764]);
var recordthree = new Bicicletamodel(3, 'rojo', 'ecuatoriana', "santarosa", [-3.4572088, -79.9553764]);
var recordfour = new Bicicletamodel(4, 'celeste', 'ecuatoriana', "santarosa", [-3.4572088, -79.9553764]);

Bicicletamodel.add(recordone);
Bicicletamodel.add(recordtwo);
Bicicletamodel.add(recordthree);
Bicicletamodel.add(recordfour);

/**
 * Exporta el modelo para ser utilizado desde otro archivo
 * Export the model to be used from another file
 */
module.exports = Bicicletamodel;
