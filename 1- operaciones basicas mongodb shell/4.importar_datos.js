// importar datos de un json a una coleccion
// se realiza desde fuera de mongo
mongoimport --db users --collection contacts --file contacts.json

mongoimport --db constructora --collection proveedores --type json 
 --file ~/Desktop/project/proveedores.json  --jsonArray