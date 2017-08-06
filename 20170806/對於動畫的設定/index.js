function bind(arr) {
    var selection = d3.select("svg").selectAll("rect#bar").data(arr);
    // 初始化設定
    selection.enter().append("rect").attr({
        id: "bar",
        x: 20,
        y: function (d, i) {
            return 20 + i * 35;
        },
        height: 30,
        width: 30,
        fill: "rgb(255,0,0)"
    });
    selection.exit().remove();
}

function render() {


    //不需要動畫的設定
    d3.select("svg").selectAll("rect#bar").on("click", render);


    //需要動畫的設定   選擇bar圖 設定初始狀態x:10 動畫設定 歷時1秒  延遲(i*1000)秒  時間函數:elasticln   以及結束後的狀態
    d3.selectAll("rect#bar")
        .attr({
            x: 10
        }).transition().duration(1000).delay(function (d, i) {
            return i * 1000;
        })
        .ease("elasticln")
        .attr({
            x: 300,
            fill: "gold"
        });
}
