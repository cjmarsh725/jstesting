const moment = require('moment');

console.log(moment().startOf('year').add(10, 'M').format('M/D/YY'));