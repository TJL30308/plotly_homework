// load data from json and console log to verify
d3.json("../samples.json").then(function(data) {
    console.log(data);
  });


function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

var y = Object.values(data.samples);
var labels = Object.keys(data.otu_ids);

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);
  
// This function is called when a dropdown menu item is selected
function updatePlotly() {

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    // create horizontal bar chart
    var trace1 = {
        x: ,
        y: ,
        type: 'bar',
        text: ''
        };

    var data = [trace1]
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("bar", "labels", [labels]);
    Plotly.restyle("bar", "y", [y]);

    var trace1 = {
        x: ,
        y: ,
        mode: 'markers'
        };
    
    var data = [trace1]

    var layout = {
        title: 'Marker Size and Color',
        showlegend: false,
        height: 600,
        width: 600
      };
      
    Plotly.restyle('bubble', data, layout);

  }
  
  init();