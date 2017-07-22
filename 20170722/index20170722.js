var D3Csv = function D3Csv(dataSet) {

    var body = d3.select("body");
    console.log(dataSet);


    for (var i = 0; i < dataSet.length; i++) {
        if (dataSet[i]["number"] > 10000000) {
            body.append("div").text(dataSet[i]["industry"] + " " + dataSet[i]["number"]);
        }
    }
};




var D3CsvFilter = function D3CsvFilter(dataSet) {

    var body = d3.select("body");
    console.log(dataSet);

    var fDataSet = dataSet.filter(function (data) {
        return data["number"] > 1000000;
    });

    for (var i = 0; i < fDataSet.length; i++) {
        body.append("div").text(dataSet[i]["industry"] + " " + dataSet[i]["number"]);
    }
};


var D3Json = function D3Json(dataSet) {

    var body = d3.select("body");
    //    console.log(dataSet);

    var fDataSet = dataSet.filter(function (d) {
        return d.date === "2016/8/1" && d.cid === "A" && d.amount > 1000000000;
    });

    console.log(fDataSet);

    for (var i = 0; i < fDataSet.length; i++) {
        body.append("div").text(fDataSet[i].industry + " " + fDataSet[i].number + " " + fDataSet[i].date);
    };
    //    for (var i = 0; i < dataSet.length; i++) {
    //        body.append("div").text(dataSet[i].industry + " " + dataSet[i].number);
    //    };
};


var mid = function mid(d) {
    d["number"] = +d["number"];
    d["amount"] = +d["amount"];
    return d;
};
