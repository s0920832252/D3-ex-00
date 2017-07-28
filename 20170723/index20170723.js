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


var bind = function bind(dataSet) {
    var selection = d3.select("body").selectAll("div").data(dataSet);
    selection.enter().append("div");
    selection.exit().remove();

}

var render = function render() {
    var selection = d3.selectAll("div");
    selection.text(function (d, i) {
            return (i + 1) + " : " + d;
        })
        .style({
            color: function (d) {
                if (d < 70) {
                    return "red";
                } else {
                    return "black";
                }
            }
        });

}



var bind2 = function bind2(dataSet) {
    var selection = d3.select("body>svg").selectAll("rect").data(dataSet);
    selection.enter().append("rect");
    selection.exit().remove();

}

var render2 = function render2() {
    var selection = d3.selectAll("rect");
    selection.attr({
        x: function (d, i) {
            return p + 42 * i;
        },
        y: function (d) {
            return h - p - d;
        },
        width: 40,
        height: function (d, i) {
            return d;
        },
        fill: function (d) {
            if (d < 70) {
                return "red";
            } else {
                return "lightgreen";
            }
        },
    });
}


var bind3 = function bind3(dataSet) {
    var selection = d3.select("body>svg").selectAll("g.bar1").data(dataSet);
    selection.enter().append("g").attr("class", "bar1");
    selection.exit().remove();
}

var render3 = function render3() {
    var selection = d3.selectAll("g.bar1").append("rect");
    selection.attr({
        x: function (d, i) {
            return p + 42 * i;
        },
        y: function (d) {
            return h - p - d;
        },
        width: 40,
        height: function (d, i) {
            return d;
        },
        fill: function (d) {
            if (d < 70) {
                return "red";
            } else {
                return "lightgreen";
            }
        },
    });

    d3.selectAll("g.bar1").append("text").attr({
        x: function (d, i) {
            return p + 42 * i + 20;
        },
        y: function (d) {
            return h - p + 16;
        },
        "text-anchor": "middle"


    }).text(function (d) {
        return d;
    });
};


function update(arr) {
    var num = random(10, 100);
    //    console.log(num);
    arr.push(num);
    bind3(arr);
    render3();
};

function random(N, M) {
    return Math.floor(Math.random() * (M - N + 1) + N);
};
