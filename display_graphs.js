// Barres verticales

data = [4, 23, 15, 16, 42, 18];

// - paramétrage

var chartHeight = 400;
var chartWidth = 350;
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

var xAxis = d3.axisBottom(xBandScale);

d3.select("#verticalSvgBarChart")
	.append("g")
		.attr("class", "axis")
		.attr("width", innerChartWidth)
		.attr("height", xAxisThickness)
		.attr("transform", "translate(" + yAxisThickness + ", " + innerChartHeight + ")")
		.call(xAxis);

var yAxis = d3.axisLeft(invertedY);

d3.select("#verticalSvgBarChart").append("svg")
    .attr("class", "axis")
    .attr("width", yAxisThickness)
    .attr("height", chartHeight)
  .append("g")
    .attr("transform", "translate(30,0)")
    .call(yAxis);

// - Ajout carrés

var g = svg.append("svg")
	.attr("class", "innerChart")
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

g.append("text")
	.text(function(d){return d;})
	.attr("class", "barText")
	.attr("x", xBandScale.bandwidth()/2 + xBandScale.paddingInner())
	.attr("y", function(d){return y(d) - 2;})
	.attr("text-anchor", "middle");
 
// Disque

d3.select("#disque")
	.attr("width","300")
	.attr("height", "200")
	.append("circle")
	.attr("cx", "40")
	.attr("cy", "40")
	.attr("r", "30")
	.attr("fill", "green");
