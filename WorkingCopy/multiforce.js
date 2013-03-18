$(document).ready(function() {

var nodes = [];

var w = 960,
    h = 500,
    fill = d3.scale.category10();
   // nodes = d3.range(100).map(Object);

d3.csv("data.csv", function(data) {
      nodes = data

var vis = d3.select("body").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .size([w, h])
    .charge([-200])
    .start();


var node = vis.selectAll("rect.node")
    .data(nodes)
  .enter().append("svg:image")
    .attr("class", "node")
    .attr("xlink:href", function(d) {return d.State;})
    //"http://www.smiley-faces.org/wallpaper/smiley-face-wallpaper-widescreen-001.jpg")
    // .attr("x", function(d) { return d.x; })
    // .attr("y", function(d) { return d.y; })
    .attr("height", 80)
    .attr("width",80)
   // .style("fill", function(d, i) { return fill(i & 3); })
    //.style("stroke", function(d, i) { return d3.rgb(fill(i & 3)).darker(2); })
    //.style("stroke-width", 1.5)
    .call(force.drag);

vis.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);

force.on("tick", function(e) {

  // Push different nodes in different directions for clustering.
  var k = 10 * e.alpha;
  // nodes.forEach(function(o, i) {

      // means "if i & 1 is true, do k; otherwise, do -k"
  //   o.y += i & 1 ? k : -k;
  //   o.y += i & 1 ? k : -k;
  //   o.x += i & 2 ? k : -k;

  // });

  node.attr("x", function(d) { return d.x; })
   .attr("y", function(d) { return d.y; });
});

// tooltip
function highlight( data, i, element ) {
        d3.select( element ).attr( "stroke", "black" );

        var description = data.description.split("|"),
            // content = '<span class=\"title\"><a href=\"' + data.url + '\">' + data.title + '</a></span><br/>' +
            //            description[0] + "<br/>" +
            //           '<a href=\"http://news.ycombinator.com/item?id='+ data.item_id +'\">' + description[1] + '</a>';
            content = '<span> "hello" </span>';

        tooltip.showTooltip(content, d3.event);
    }
 
 var tooltip = CustomTooltip( "posts_tooltip", 240 );


d3.select("body").on("click", function() {
  nodes.forEach(function(o, i) {
    o.x += (Math.random() - .5) * 20;
    o.y += (Math.random() - .5) * 20;
  });
  force.resume();
});
     });
});

    