const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/gtstore', { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (error) {
        console.error('could not connect to mongo', error)
    }
}

connect();

