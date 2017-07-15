/*
alert("hello JS in javaScripe");
*/

function showMsg(msg1, msg2) {
    alert(msg1 + msg2);

}

var showMsg2 = function (msg1, msg2) {
    /*alert(msg1 + msg2);*/
    var msg = msg1 + "+" + msg2;
    return msg;
}

var randNumber = function randNumber(n1, n2) {
    /*print出結果在 console*/
    console.log(n1, n2);
    return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
}
