const axios = require("axios");

const analyzeEngineer = async () => {
  const profession = (await axios.get("https://api.guildwars2.com/v2/professions/Engineer")).data;
  const skills = (await axios.get("https://api.guildwars2.com/v2/skills?ids=all")).data;
  //const specializations = (await axios.get("https://api.guildwars2.com/v2/specializations?ids=all")).data;
  //const traits = (await axios.get("https://api.guildwars2.com/v2/traits?ids=all")).data;
  const char = {
    weapon: 952.5, //905-1000
    power: 2457,
    precision: 1911, //48.38%
    ferocity: 1240, //232.6%
    cond_dmg: 26,
  }
  const getMult = name => skills.find(skill => skill.name === name).facts.find(fact => fact.type === 'Damage').dmg_multiplier;
  const getDmg = name => ((char.weapon * char.power * getMult(name)) / 2597);
  const getBleeding = stacks => stacks * (0.06 * char.cond_dmg + 0.25 * 80 + 2);
  const getBurning = stacks => stacks * (0.155 * char.cond_dmg + 1.55 * 80 + 7);
  const getCondi = "TODO";
  console.log(skills.find(skill => skill.name === "Refraction Cutter"));
  const coreSkills = [ "Sun Edge", "Sun Ripper", "Gleam Saber", "Refraction Cutter", "Radiant Arc", "Blowtorch" ];
  coreSkills.forEach(skill => {
    //console.log(skill + ": " + getDmg(skill) + " damage");
  });
}

analyzeEngineer();