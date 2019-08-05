const axios = require("axios");
axios.get("https://api.guildwars2.com/v2/professions").then(response => {
  const professionList = response.data;
  const requests = [];
  professionList.forEach(profession => {
    requests.push(axios.get(`https://api.guildwars2.com/v2/professions/${profession}`));
  });
  const professions = {};
  axios.all(requests).then(response => {
    professionList.forEach(profession => {
      professions[profession] = response.map(res => res.data).find(data => data.id === profession);
    });
    this.setState({ professionList, professions });
  }).catch(error => console.error("Individual professions endpoint: " + error));
}).catch(error => console.error("Profession list endpoint: " + error));
