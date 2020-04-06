const mongoose = require('mongoose');

async function main () {
    try {
        const db = await mongoose.connect(process.env.MONGODB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
            
    } catch (error) {
        console.log(error);
    }
}

main();
