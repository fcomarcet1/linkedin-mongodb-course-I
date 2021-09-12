// crear db
db = db.getSiblingDB("contructora_db");

// crear coleccion y documentos
cliente = db.nameCollection.insertMany(
    [
        {
            "nombre": "lerere1",
            "email": "lerele1@mail.es@"
        },
        {
            "nombre": "lerere2",
            "email": "lerele2@mail.es@"
        },
        {
            "nombre": "lerere3",
            "email": "lerele3@mail.es@"
        },
        {
            "nombre": "lerere4",
            "email": "lerel4@mail.es@"
        }
    ]
);

// añadir unico documento
cliente = db.nameCollection.insertOne(
    [
        {
            "nombre": "lerere5",
            "email": "lerele5@mail.es@"
        }
    ]
);

// recorrer documento y mostrar un campo nombre
db.nameCollection.find().forEach(client => print("Nombre: " + client.nombre));

// obtener documentos de una coleccion
db.nameCollection.find();

