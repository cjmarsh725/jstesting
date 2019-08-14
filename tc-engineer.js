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
  const getMult = skill => skill.facts.find(fact => fact.type === 'Damage').dmg_multiplier;
  const getDmg = skill => ((char.weapon * char.power * getMult(skill)) / 2597);
  const getBleeding = (stacks, duration) => stacks * duration * (0.06 * char.cond_dmg + 0.25 * 80 + 2);
  const getBurning = (stacks, duration) => stacks * duration * (0.155 * char.cond_dmg + 1.55 * 80 + 7);
  const getCondi = skill => {
    let totalCondi = 0;
    let skillFact = skill.facts.find(fact => fact.status === "Bleeding");
    if (skillFact) totalCondi += getBleeding(skillFact.apply_count, skillFact.duration);
    skillFact = skill.facts.find(fact => fact.status === "Burning");
    if (skillFact) totalCondi += getBurning(skillFact.apply_count, skillFact.duration);
    return totalCondi;
  };
  const getDmgOutput = name => {
    const skill = skills.find(skill => skill.name === name);
    const dmg = getDmg(skill);
    const condi = getCondi(skill);
    return `Damage: ${dmg} | Condi: ${condi}`;
  };
  console.log(getDmgOutput("Blowtorch"));
  //console.log(skills.find(skill => skill.name === "Refraction Cutter"));
  const coreSkills = [ "Sun Edge", "Sun Ripper", "Gleam Saber", "Refraction Cutter", "Radiant Arc", "Blowtorch" ];
  coreSkills.forEach(skill => {
    //console.log(skill + ": " + getDmg(skill) + " damage");
  });
}

analyzeEngineer();