const moment = require("moment-timezone");

moment.tz.setDefault("Asia/Seoul");

const nowD = moment().format("DD");
const nowH = moment().format("HH");
const nowm = moment().format("mm");
const day = moment().format("E");

console.log(nowD, nowH, nowm, day);
