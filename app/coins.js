"use strict";

const btc = require("./coins/btc.js");
const zeev = require("./coins/zeev.js");

module.exports = {
	"BTC": btc,
	"ZEEV": zeev,
	"coins":["BTC", "ZEEV"]
};