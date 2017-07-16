var lastRan;
var ran;

var randomNum = function randomNum(n1, n2) {
    //    var n1 = 1911;
    //    var n2 = 2016;
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
};

var launch = function launch() {
    lastRan = ran;
    ran = randomNum(1911, 2016);
    d3.select('table div').text(lastRan);
    d3.select('table p').text(ran);
}
