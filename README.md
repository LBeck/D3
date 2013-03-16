These donut charts are constructed from a CSV file storing the populations of various age groups in different states. (As a practical note, a [normalized stacked area chart](../3886394) facilitates easier comparison of values.) The chart employs a number of D3 features:

* [d3.csv](https://github.com/mbostock/d3/wiki/CSV) - load and parse data
* [d3.scale.ordinal](https://github.com/mbostock/d3/wiki/Ordinal-Scales) - color encoding
* d3.keys - compute column names
* [d3.svg.arc](https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-arc) - display arcs
* [d3.layout.pie](https://github.com/mbostock/d3/wiki/Pie-Layout) - compute arc angles from data