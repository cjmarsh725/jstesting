require("dotenv").config();
const axios = require("axios");
const MongoClient = require("mongodb").MongoClient;
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("gw2-theorycrafter").collection("items");
  axios.get("https://api.guildwars2.com/v2/items?page=0&page_size=200").then(response => {
    const totalPages = response.headers["x-page-total"];
    const requestUrls = [];
    for (let i = 0; i < totalPages; i++) {
      requestUrls.push(axios.get(`https://api.guildwars2.com/v2/items?page=${i}&page_size=200`));
    }
    axios.all(requestUrls).then(responses => {
      let bulkWriteOps = [];
      responses.forEach(response => {
        response.data.forEach(item => {
          bulkWriteOps.push({ 
            updateOne: {
              filter: { id: item.id },
              update: { $set: { item } },
              upsert: true
            }
          });
        });
      });
      collection.bulkWrite(bulkWriteOps)
                .then(response => console.log("Bulk write complete"))
                .catch(error => console.error(error));
    }).catch(error => console.error(error));
  }).catch(error => console.error(error));
});