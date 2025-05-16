async function connect() {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://localhost:27017");
  await client.connect();
  global.connection = client.db("aula2");
  console.log("Connected to MongoDB");
}

connect();

module.exports = {};
