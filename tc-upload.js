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
      let items = []
      responses.forEach(response => items.concat(response.data));
      // {"item.type": {$in: ["UpgradeComponent", "Armor", "Weapon", "Back", "Trinket"]}, "item.rarity": {$in: ["Exotic", "Ascended"]}}
      // {"item.type": "Consumable", "item.level": 80, "item.details.type": {$in: ["Food", "Utility"]}}
      console.log("Unfiltered: " + items.length);
      console.log("Armor/Weapon: " + items.filter(item => item.type === "Armor" || item.type === "Weapon").length);
      console.log("Upgrades: " + items.filter(item => item.type === "UpgradeComponent" && (item.rarity === "Exotic" || item.rarity === "Ascended")).length);

      // items.forEach(item => {
      //   bulkWriteOps.push({ 
      //     updateOne: {
      //       filter: { id: item.id },
      //       update: { $set: { item } },
      //       upsert: true
      //     }
      //   });
      // });
      // collection.bulkWrite(bulkWriteOps)
      //           .then(response => console.log("Bulk write complete"))
      //           .catch(error => console.error(error));

    }).catch(error => console.error(error));
  }).catch(error => console.error(error));
});