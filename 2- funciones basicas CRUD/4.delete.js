// Delete All Documents from a collection
try {
    db.collection.deleteMany({}) // empty filter for delete all
} catch (e) {
    print(e);
}

try {
    db.orders.deleteMany({ 
        "stock": "Brent Crude Futures", 
        "limit": { $gt: 48.88 } 
    });
} catch (e) {
    print(e);
}

// Delete on documents
try {
    db.inventory.deleteOne({ status: "D" })
} catch (e) {
    print(e);
}

try {
    db.inventory.deleteOne({ country: {$eq: "Brazil"} })
} catch (e) {
    print(e);
}

try {
    db.orders.deleteOne({
         "_id": ObjectId("563237a41a4d68582c2509da") 
        });
} catch (e) {
    print(e);
}
