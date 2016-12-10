var data = [4, 23, 15, 16, 23, 42];

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

var height = 200;
var width = 300;

var ratio = height / d3.max(data); 
var deltaX = width / data.length;

var svg = d3.select("#verticalSvgBarChart")
.attr("height",height);

var g = svg.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i){return "translate("+i*deltaX + ","+ratio*(d3.max(data)-d)+")";});

g.append("rect")
.attr("width", deltaX -1)
.attr("height", function(d){return ratio*d;});

g.append("text");
 
// Donut

var vis = d3.select("#donutChart");

var arc = d3.svg.arc()
.innerRadius(50)
.outerRadius(100)
.startAngle(0)
.endAngle(1.5*Math.PI);

vis.append("path")
.attr("d", arc)
.attr("transform", "translate(30,20)");


var radiusRatio = 2*math.PI / d3.max(data);
