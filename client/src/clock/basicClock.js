


var startClock = function() {
var now = new Date();
var H = now.getHours();
var M = now.getMinutes();
var S = now.getSeconds();

var M = addZero(M)
var S = addZero(S)

var timer = H + ":" + M + ":" + S;
var displayedTime = H + ":" + M;

console.log(displayedTime);
};

var addZero = function(i) {
	if (i < 0) 
	{i = "0" + i};
	return i;
}

startClock();

module.exports = startClock;