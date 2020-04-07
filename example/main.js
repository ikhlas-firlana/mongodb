const mongoose = require('mongoose');
const Product = require("./model/product");

mongoose.connect(process.env.MONGODB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

async function main () {
    try {
        // try block connection
        await new Promise((resolve, reject) => {
            db.on('error',() => {
                console.error.bind(console, 'connection error:');
                reject();
            });
            db.once('open', function callback () {
                console.log("open");
                resolve();
            });
        });

        // do operation
        await Product.collection.insertOne({
            name: "test 1",
            description: "ok",
            price: 0.1
        })
            
    } catch (error) {
        console.log(error);
    }
}

main();
