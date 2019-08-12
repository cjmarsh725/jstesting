const axios = require("axios");

const analyzeEngineer = async () => {
  const profession = (await axios.get("https://api.guildwars2.com/v2/professions/Engineer")).data;
  const skills = (await axios.get("https://api.guildwars2.com/v2/skills?ids=all")).data;
  //const specializations = (await axios.get("https://api.guildwars2.com/v2/specializations?ids=all")).data;
  //const traits = (await axios.get("https://api.guildwars2.com/v2/traits?ids=all")).data;
  const sunEdge = skills.find(skill => skill.id === 43476);
  const sunRipper = skills.find(skill => skill.id === 45581);
  const gleamSaber = skills.find(skill => skill.id === 45979);
  const getMult = name => skills.find(skill => skill.name === name).facts.find(fact => fact.type === 'Damage').dmg_multiplier;
  console.log("Gleam Saber (1.5 expected) - " + getMult("Gleam Saber"));
}

analyzeEngineer();