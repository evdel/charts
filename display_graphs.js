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

var chartHeight = 200;
var chartWidth = 300;

var deltaX = chartWidth / data.length;

var x = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, chartHeight]);

var svg = d3.select("#verticalSvgBarChart")
.attr("height",chartHeight)
.attr("width", chartWidth);

var g = svg.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i){return "translate("+i*deltaX + ","+x(d3.max(data)-d)+")";});

g.append("rect")
.attr("width", deltaX -1)
.attr("height", function(d){return x(d);});

g.append("text");
 
// - Ajout axes


// Disque

d3.select("#disque")
	.attr("width","300")
	.attr("height", "200")
	.append("circle")
	.attr("cx", "40")
	.attr("cy", "40")
	.attr("r", "30")
	.attr("fill", "green");
