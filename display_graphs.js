var data = [4, 23, 15, 16, 23, 42];

//

d3.select("#barChart")
.selectAll("div")
.data(data)
.enter().append("div")
.text(function(d){return d;})
.classed("bar", true)
.style("width","500px")
.style("width", function(d){return 7 * d + "px";});

chart = d3.select("#svgBarChart");
chart.attr("width","500px")
.attr("height", 30*data.length + "px");

var bar = chart.selectAll("g")
.data(data).enter().append("g")
.attr("transform", function(d, i){return "translate(0,"+i*20 + ")";});

bar.append("rect")
.attr("width", function(d){return 7*d;})
.attr("height","19");

bar.append("text")
.attr("x",function(d){return d-3;})
.attr("y","9,5")
.attr("dy", ".35em")
.text(function(d){return d;});


// Barres verticales

// - paramétrage

var chartHeight = 200;
var chartWidth = 400;
var yAxisThickness = 40;
var xAxisThickness = yAxisThickness;

// - variables utilitaires

var innerChartHeight = chartHeight - yAxisThickness;
var innerChartWidth = chartWidth - xAxisThickness;
var deltaX = innerChartWidth / data.length;

// - Echelles

var x = d3.scaleOrdinal(['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin'])
	.domain(data);

var xBandScale = d3.scaleBand()
	.domain(data)
	.range([0, innerChartWidth])
	.paddingInner(0.3)
	.paddingOuter(0.5);

var y = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, innerChartHeight]);

var invertedY = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([innerChartHeight, 0]);

var svg = d3.select("#verticalSvgBarChart")
	.attr("height",chartHeight)
	.attr("width", chartWidth);

// - Ajout axes

var yAxis = d3.axisLeft(invertedY);

d3.select("#verticalSvgBarChart").append("svg")
    .attr("class", "axis")
    .attr("width", yAxisThickness)
    .attr("height", innerChartHeight)
  .append("g")
    .attr("transform", "translate(30,0)")
    .call(yAxis);

// - Ajout carrés

var g = svg.append("svg")
	.attr("width", innerChartWidth)
	.attr("height", innerChartHeight)
	.attr("transform", "translate("+yAxisThickness+",0)")
	.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i){return "translate("+xBandScale(d) + ","+y(d3.max(data)-d)+")";});

g.append("rect")
.attr("width", xBandScale.bandwidth())
.attr("height", function(d){return y(d);});

g.append("text");
 
// Disque

d3.select("#disque")
	.attr("width","300")
	.attr("height", "200")
	.append("circle")
	.attr("cx", "40")
	.attr("cy", "40")
	.attr("r", "30")
	.attr("fill", "green");
