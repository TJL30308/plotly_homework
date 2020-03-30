// load data from json and console log to verify
d3.json("../samples.json").then(function(data) {
    console.log(data);
  });

// create horizontal bar chart

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

var y = Object.values(data.samples);
var labels = Object.keys(data.otu_ids);

function init() {
    data = [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16], 
        type: 'bar' 
    }];
  
    Plotly.newPlot("bar", data);
    }
  
// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);
  
// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    var x = 
    var y = 
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar", "labels", [labels]);
    Plotly.restyle("bar", "y", [y]);
  }
  
  init();