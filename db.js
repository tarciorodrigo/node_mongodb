async function connect() {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient("mongodb://admin:admin123@localhost:27017");
  await client.connect();
  global.connection = client.db("aula2");
  console.log("Connected to MongoDB");
}

connect();

// function findCustomers(callback) {
//   return global.connection
//     .collection("customers")
//     .find({})
//     .toArray((error, docs) => {
//       callback(error, docs);
//     });
// }

function findCustomers() {
  return global.connection.collection("customers").find({}).toArray();
}

module.exports = {
  findCustomers,
};
