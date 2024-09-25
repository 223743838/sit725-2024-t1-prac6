
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s223742152:QLhmLEFD2fFq728Y@cluster0.gcdv3.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;
