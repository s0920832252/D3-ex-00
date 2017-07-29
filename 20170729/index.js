bind(dataSet);
render();

function bind(dataSet) {
    var selection = d3.select("svg")
        .selectAll("rect")
        .data(dataSet);
    selection.enter().append("rect");
    selection.exit().remove();

    var selection_text = d3.select("svg")
        .selectAll("text")
        .data(dataSet);
    selection_text.enter().append("text");
    selection_text.exit().remove();
}

function render() {

    var xScale = d3.scale.linear().
    domain([0, d3.max(dataSet, function (d) {
            return d.amount;
        })])
        .range([0, 300]);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottem")
        .ticks(10).tickFormat(function (d) {
            return d / 1000000000 + "G";
        });



    d3.selectAll("rect")
        .attr({
            x: 300,
            y: function (d, i) {
                return 10 + 20 * i;
            },
            width: function (d, i) {
                return xScale(d.amount);
            },
            height: 18,
            fill: "red"
        });
    d3.selectAll("text")
        .attr({
            x: 10,
            y: function (d, i) {
                return 25 + 20 * i;
            }
        }).text(function (d) {
            return d.industry;
        });

    d3.select("svg").append("g").attr("class", "axis")
        .attr("transform", "translate(290,250)").call(xAxis);

}
