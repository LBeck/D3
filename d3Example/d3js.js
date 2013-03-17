 $(document).ready(function() {

 	// var circleRadii = [40, 20, 10];

 	// var svgContainer = d3.select("body").append("svg")
 	// 									.attr("width", 200)
 	// 									.attr("height", 200);

 	// var circles = svgContainer.selectAll("circle")
 	// 						  .data(circleRadii)
 	// 						  .enter()
 	// 						  .append("circle");

 	// var circleAttributes = circles
 	// 					.attr("cx",50)
 	// 					.attr("cy",50)
 	// 					.attr("r", function(d){return d;})
 	// 					.style("fill", function(d){
 	// 						var returnColor;
 	// 						if (d === 40) { returnColor = "green";
 	// 						} else if (d === 20) { returnColor = "purple";
 	// 						} else if (d === 10) { returnColor = "red"; }
 	// 						return returnColor;
		// 					});

 //  var jsonCircles = [
 // 	{ 	"x_axis": 30, 	"y_axis": 30,  	"radius": 20,  	"color" : "green" }, 
 // 	{ 	"x_axis": 70, 	"y_axis": 70, 	"radius": 20, 	"color" : "purple" }, 
 // 	{ 	"x_axis": 110, 	"y_axis": 100, 	"radius": 20,  	"color" : "red" }];

 // var svgContainer = d3.select("body").append("svg")
 // 									 .attr("width", 200)
 // 									 .attr("height", 200);

 // var circles = svgContainer.selectAll("circle")
 // 							.data(jsonCircles)
 // 							.enter()
 // 							.append("circle");


 //  var circleAttributes = circles
 //  						.attr("cx", function (d){return d.x_axis;})
 //  						.attr("cy", function (d) {return d.y_axis;})
 //  						.attr("r", function (d) {return d.radius;})
 //  						.style("fill", function(d) { return d.color; });

var jsonRectangles = [
	{ "x_axis": 10, "y_axis":10, "height": 20, "width":20, "color" : "green" },
	{ "x_axis": 160, "y_axis": 40, "height": 20, "width":20, "color": "purple" },
	{ "x_axis": 70, "y_axis": 70, "height": 20, "width":20, "color": "red"}];

var max_x = 0;
var max_y = 0;

for (var i = 0; i< jsonRectangles.length; i++) {
	var temp_x, temp_y;
	var temp_x = jsonRectangles[i].x_axis + jsonRectangles[i].width;
	var temp_y = jsonRectangles[i].y_axis + jsonRectangles[i].height;

	if (temp_x > max_x) {	max_x = temp_x;	}

	if (temp_y > max_y) {	max_y = temp_y;	}
}

var svgContainer = d3.select("body").append("svg")
									.attr("width", max_x)
									.attr("height", max_y);

var rectangles = svgContainer.selectAll("rect")
							  .data(jsonRectangles)
							  .enter()
							  .append("rect");

var rectanglesAttributes = rectangles
							.attr("x", function (d) { return d.x_axis; })
							.attr("y", function (d) {return d.y_axis; })
							.attr("height", function (d) {return d.height; })
							.attr("width", function (d) {return d.width; })
							.style("fill", function (d) {return d.color; });

});
 							
