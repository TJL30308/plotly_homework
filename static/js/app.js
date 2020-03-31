// get data from json and confirm
// d3.json("../samples.json").then(data => 
//     console.log(data));

// create function for plotting
function plot(id) {

    // get data from json
    d3.json("../../data/samples.json").then(data => {
    
    // check data 
    console.log(data);
    
    // filter samples by id
    var samples = data.samples.filter(sample => sample.id === id)[0];

    // check filtered samples
    console.log(samples);

    // select top 10 sample vaules for plotting
    var sampleValues = samples.sample_values.slice(0, 10).reverse();

    // check top 10 values
    console.log(sampleValues);

    // select top 10 OTU ids
    var otuTopIds = (samples.otu_ids.slice(0, 10)).reverse();

    // check top 10 OTU IDs
    console.log(otuTopIds);
    
    // OTU ids to form needed for plotting
    otuId = otuTopIds.map(d => "OTU " + d);
    
    // check values
    console.log(otuId);

    // otu_labels for hover text
    // var labels = samples.otu_lables;
    
    // check labels
    // console.log(labels)

    // create trace for bar chart
    var trace1 = {
        x: sampleValues,
        y: otuId,
        // text: labels,
        marker: {
            color: 'rgb((142,124,195)'},
        type: "bar",
        orientation: "h"
        };
    
    var data = [trace1];
    
    // layout for bar chart
    var layout = {
        title: "Top 10 OTU",
        yaxis:{
            tickmode:"linear",
        },
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 30
        }
    };

    // plot bar chart
    Plotly.newPlot("bar", data, layout);
    
    // creat trace for bubble chart
    var trace2 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers",
        marker: {
            size: samples.sample_values,
            color: samples.otu_ids
        },
        // text: labels
        };
    
    var data2 = [trace2];

    var layout2 = {
        xaxis:{title: "OTU ID"},
        height: 600,
        width: 1000
        };

    Plotly.newPlot("bubble", data2, layout2)

    });
}

// functin to update metaData table
function metaData(id) {
    d3.json("../../data/samples.json").then(data => {

        // get metadata needed for info table
        var metaData = data.metadata;

        // check data
        console.log(metaData);

        // filter metadata by id
        var result = metaData.filter(meta => meta.id == id)[0];

        // select panel body from HTML DOM
        var panelBody = d3.select("#sample-metadata");
        
        // clear any content in table
        panelBody.html("");

        // append needed info to table body
        Object.entries(result).forEach((key) => {   
            panelBody.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
}

// function for optionChanged
function optionChanged(id) {
    plot(id);
    metaData(id)
}

// funtion to initialize rendering of plots
function init() {
    var dropdown = d3.select("#selDataset");

    d3.json("../../data/samples.json").then(data => {
        data.names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        });

        plot(data.names[0]);
        metaData(data.names[0]);
    });
}

// run init function
init();