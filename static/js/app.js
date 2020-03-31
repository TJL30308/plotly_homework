// get data from json and confirm
d3.json("../samples.json").then(data => 
    console.log(data));

// create function for plotting
function plot(id) {

    // get data from json
    d3.json("../samples.json").then(data => 
        console.log(data));
    
    var samples = data.samples.filter(sample => sample.id === id)[0];

    console.log(samples);

    var sampleValues = samples.sample_values.slice(0, 10).reverse();

    console.log(sampleValues);

    var otuTopIds = samples.otu_ids.slice(0 ,10).reverse();

    console.log(otuTopIds);

    otuId = otuTopIds.map(d => "OTU " + d);
    
    console.log(otuId);

    var labels = samples.otu_lables.slice(0 ,10);

    var trace1 = {
        x: sampleValues,
        y: otuId,
        text: labels,
        marker: {
            color: 'rgb()'},
        type: "bar",
        orientation: "h"
        };
    
    var data = [trace1];

    Plotly.newPlot("bar", data, layout);
}

function optionChanged(id) {
    plot(id);
}

function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("../samples.json").then(data => {
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        plot(data.names[0]);
    });
}
