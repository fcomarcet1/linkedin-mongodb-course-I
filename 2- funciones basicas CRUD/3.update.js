//actualizar 1 documento que coincida con el filtro especificado
db.collection.updateOne();
db.users.updateOne(
    { money: { $eq: 18800 } }, // update filter
    { $set: { status: "accept" } } // update action
);

//actualiza TODOS los documentos que coincidan con el filtro especificado
db.collection.updateMany();
db.users.updateMany( 
    {age: {$lt: 18}}, // update filter
    {$set: {status: "reject entrance"}} // update action
);

db.collection.update()


const alicia = {
    name: "alicia",
    age: 24
};
db.collection.replaceOne(
    { name: {$eq: "Manolo" }}, // filter
    alicia // replacement
);

db.inventory.replaceOne(
    { item: "paper" },
    { item: "paper", instock: [{ warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 }] }
)