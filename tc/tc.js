const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const damage = (ws, p, sc, a) => (ws * p * sc) / a;
// Damage = (weapon strength * power * skill coefficient) / armor

const rifleTesting = () => {
console.log("\n***************** Resilient Krytan Rifle (205-250) - Hip Shot *****************");
// 205-250 weapon strength, 1000 power, 0.65 skill dmg coefficient, unknown armor
let skillUse = [
  53,59,61,55,62,54,62,57,53,54,56,61,54,55,57,61,60,62,57,52,55,51,57,59,61,
  57,55,54,54,59,56,56,55,61,54,52,59,55,53,62,58,54,51,60,58,58,58,55,60,57,
  52,61,60,58,55,53,61,58,62,56,60,56,55,54,61,58,61,53,59,61,58,55,54,61,57,
  55,55,59,57,51,59,55,61,60,58,51,59,62,61,57,60,52,62,57,57,52,58,55,55,55
]
// Observed - Min: 51 | Average: 57.01 | Max: 62
// Expected(2623.106) - Min: 50.799 | Average: 56.374 | Max: 61.949
// Expected(2600) - Min: 51.25 | Average: 56.875 | Max: 62.5
// Expected(2597) - Min: 51.309 | Average: 56.941 | Max: 62.572
console.log(`Observed - Min: ${Math.min(...skillUse)} | Average: ${average(skillUse)} | Max: ${Math.max(...skillUse)}`);
let high = damage(250, 1000, 0.65, 2623.106);
let low = damage(205, 1000, 0.65, 2623.106);
console.log(`Expected(2623.106) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(250, 1000, 0.65, 2600);
low = damage(205, 1000, 0.65, 2600);
console.log(`Expected(2600) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(250, 1000, 0.65, 2597);
low = damage(205, 1000, 0.65, 2597);
console.log(`Expected(2597) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);


console.log("\n***************** Dire Orrian Rifle (751-918) - Hip Shot *****************");
// 751-918 weapon strength, 1000 power, 0.65 skill dmg coefficient, unknown armor
skillUse = [
  193,224,192,191,198,211,196,189,210,217,224,216,229,203,214,189,191,188,223,190,
  223,203,215,211,191,203,213,206,207,209,200,206,208,209,203,197,226,208,189,222,
  222,192,218,193,222,188,190,227,213,204,229,211,218,201,203,227,192,196,225,205,
  213,222,199,203,189,189,220,207,202,192,190,227,214,207,227,196,224,204,190,228,
  191,201,210,217,220,206,226,199,226,192,207,222,226,213,191,200,189,228,222,228
]
// Observed - Min: 188 | Average: 207.7 | Max: 229
// Expected(2623.106) - Min: 186.096 | Average: 206.787 | Max: 227.478
// Expected(2600) - Min: 187.5 | Average: 208.625 | Max: 229.5
// Expected(2597) - Min: 187.967 | Average: 208.866 | Max: 229.765
console.log(`Observed - Min: ${Math.min(...skillUse)} | Average: ${average(skillUse)} | Max: ${Math.max(...skillUse)}`);
high = damage(918, 1000, 0.65, 2623.106);
low = damage(751, 1000, 0.65, 2623.106);
console.log(`Expected(2623.106) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(918, 1000, 0.65, 2600);
low = damage(751, 1000, 0.65, 2600);
console.log(`Expected(2600) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(918, 1000, 0.65, 2597);
low = damage(751, 1000, 0.65, 2597);
console.log(`Expected(2597) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);


console.log("\n***************** Azure Railgun (986-1205) - 2039 power - Hip Shot *****************");
// 986-1205 weapon strength, 2039 power, 0.65 skill dmg coefficient, unknown armor
skillUse = [
  546,520,579,574,580,609,598,581,599,543,612,537,533,522,528,545,590,565,543,609,
  612,530,528,512,561,536,583,520,572,599,563,517,537,554,606,524,600,519,545,515,
  511,548,514,553,609,508,551,566,581,558,543,546,583,595,505,532,516,506,589,603,
  526,523,540,509,541,598,562,558,553,515,550,525,506,548,614,525,514,572,504,563,
  590,528,570,512,593,547,603,504,559,521,588,570,606,547,583,601,565,575,576,514
]
// Observed - Min: 504 | Average: 554.61 | Max: 614
// Expected(2623.106) - Min: 498.186 | Average: 553.512 | Max: 608.838
// Expected(2600) - Min: 502.614 | Average: 558.431 | Max: 614.249
// Expected(2597) - Min: 503.194 | Average: 559.076 | Max: 614.958
console.log(`Observed - Min: ${Math.min(...skillUse)} | Average: ${average(skillUse)} | Max: ${Math.max(...skillUse)}`);
high = damage(1205, 2039, 0.65, 2623.106);
low = damage(986, 2039, 0.65, 2623.106);
console.log(`Expected(2623.106) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(1205, 2039, 0.65, 2600);
low = damage(986, 2039, 0.65, 2600);
console.log(`Expected(2600) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`);
high = damage(1205, 2039, 0.65, 2597);
low = damage(986, 2039, 0.65, 2597);
console.log(`Expected(2597) - Min: ${low} | Average: ${low + (high-low) / 2} | Max: ${high}`); 
}

console.log(`2597 - Min: ${damage(986, 1971, 0.65, 2597)} | Max: ${damage(1205, 1971, 0.65, 2597)}`);
console.log(`2600 - Min: ${damage(986, 1971, 0.65, 2600)} | Max: ${damage(1205, 1971, 0.65, 2600)}`);
// Testing inconclusive between 2597 and 2600 due to size of margin of error, assuming 2600