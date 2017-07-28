var bind = function bind(dataSet) {
    var selection = d3.select(".secondQuestion>#svg2").selectAll("g").data(dataSet);
    selection.enter().append("g").attr("class", "se");
    selection.exit().remove();

}

var render = function render() {
    var selection = d3.selectAll(".se").append("text").attr({
        "font-size": "15 px",
        x: 50,
        y: function (d, i) {
            return 50 * (i + 1);
        },
    }).text(function (d, i) {
        return (i + 1) + " : " + d;
    });
};

var bindByP = function bindByP(dataSet) {
    var selection = d3.select(".secondQuestion").selectAll("p").data(dataSet);
    selection.enter().append("p").attr("class", "se");
    selection.exit().remove();

}

var renderByP = function renderByP() {
    var selection = d3.selectAll("p .se")
        .text(function (d, i) {
            return (i + 1) + " : " + d;
        });
};

var bindForGraph = function bindForGraph(dataSet) {
    /*step1*/
    var selection = d3.select(".thirdQuestion>#svg3").selectAll("g").data(dataSet);

    /*step2*/
    var warp = selection.enter().append('g').attr("class", "graph");
    warp.append("rect");
    warp.append("text");
    /*step3*/
    selection.exit().remove();

}

var renderForGraph = function renderForGraph() {
    var p = 20,
        h = 280;
    d3.selectAll('g>rect')
        .attr({
            x: function (d, i) {
                return p + 42 * i;
            },
            y: function (d) {
                return h - p - d;
            },
            width: 40,
            height: function (d) {
                return d;
            },
            fill: function (d) {
                if (d < 70) {
                    return "red";
                } else {
                    return "lightgreen";
                }
            }
        })

    d3.selectAll("g>text").attr({
        x: function (d, i) {
            console.log(i);
            return (i - 12) * 42 + p + 15;
        },
        y: function (d) {
            return h - p + 16;
        },
        "text-anchor": "middle",
        "font-size": "15px",


    }).text(function (d) {
        return d;
    });
};

function update(arr) {
    //    d3.select("body").selectAll("div").remove();
    var num = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    //    console.log(num);
    arr.push(num);
    bindForGraph(arr);
    renderForGraph();
};
