document.addEventListener("DOMContentLoaded", function() {
    new Chart(document.getElementById("myChart"), {
        type: "line",
        data: {

            labels: [56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],
            datasets: [
                {
                    label: "Red Wings",
                    data: [62, 64, 66, 66, 66, 66, 66, 66, 66,68,70,70,70,70,72,72,72,74],
                    borderColor: "red",
                    fill: false
                },
                {
                    label: "Senators",
                    data: [62, 62, 62, 64, 65, 67, 69, 71,73,75,77,77,77,79,79,81,83,84],
                    borderColor: "white",
                    fill: false
                },
                {
                    label: "Habs",
                    data: [57, 57, 57, 59, 61, 63, 65, 66,68,69,71,73,74,75,75,75,75,77],
                    borderColor: "pink",
                    fill: false
                },
                {
                    label: "Blue Jackets",
                    data: [60, 62, 64, 66, 68, 68, 68, 70,70,70,70,70,71,71,73,75,75],
                    borderColor: "purple",
                    fill: false
                },
                {
                    label: "Bruins",
                    data: [58, 60, 61, 62, 62, 64, 64, 64, 66, 66,68,68,68,68,68,68,69,69,69],
                    borderColor: "yellow",
                    fill: false
                },
                {
                    label: "Rangers",
                    data: [58, 60, 62, 62, 64, 66, 67, 68, 68,68,70,72,72,72,72,74,74,75,77],
                    borderColor: "blue",
                    fill: false
                },
                {
                    label: "Islanders",
                    data: [57, 57, 59, 61, 61, 63, 65, 63,65,66,68,70,72,72,74,74,74,74,74],
                    borderColor: "orange",
                    fill: false
                },
                {
                    type: "scatter",
                    label: "Final Game Prediction",
                    data: [
                        { x: 82, y: 87, label: "Red Wings" },
                        { x: 82, y: 94, label: "Senators" },
                        { x: 82, y: 89, label: "Habs" },
                        { x: 82, y: 87, label: "Blue Jackets" },
                        { x: 82, y: 84, label: "Bruins" },
                        { x: 82, y: 88, label: "Rangers" },
                        { x: 82, y: 83, label: "Islanders" }
                    ],
                    backgroundColor: ["red", "white", "pink", "purple", "yellow", "blue", "orange"],
                    borderColor: "black",
                    borderWidth: 4,
                    pointRadius: 6
                }

            ]
        },
        options: {
            title: {
                display: true,
                text: "East Wild Card Race",
                fontSize: 18
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: true,
                callbacks: {
                    label: function(tooltipItem, data) {
                        let dataset = data.datasets[tooltipItem.datasetIndex];
                        let point = dataset.data[tooltipItem.index];

                        // Check if the dataset is the scatter points
                        if (dataset.type === "scatter") {
                            return point.label; // Show only team name
                        } else {
                            return dataset.label + ": " + point; // Show "Team: Points" for line graph
                        }
                    }
                }
            },

            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    min: 56,
                    max: 83,
                    title: { display: true, text: "Games Played" }
                },
                y: {
                    min: 57,
                    max: 90,
                    title: { display: true, text: "Points" }
                }
            }
        }
    });
});

new Chart(document.getElementById("theChart"), {
    type: "line",
    data: {

        labels: [56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],
        datasets: [
            {
                label: "Grizzlies",
                data: [.649,.655,.644,.633,.623,.613,.619,.625,.631,.636,.627,.632,.623,.614,.606,.611,.603,.595],
                borderColor: "red",
                fill: false
            },
            {
                label: "Nuggets",
                data: [.649,.655,.644,.650,.639,.645,.651,.641,.646,.636,.642,.632,.638,.629,.620,.625,.616,.622,.627],
                borderColor: "white",
                fill: false
            },
            {
                label: "Lakers",
                data: [.632,.638,.644,.650,.656,.645,.635,.625,.615,.621,.627,.632,.623,.614,.606,.611,.603,.608],
                borderColor: "pink",
                fill: false
            },
            {
                label: "Rockets",
                data: [.655,.661,.649,.655,.645,.651,.641,.646,.636,.621,.627,.632,.638,.643,.648,.639,.644,.649,.653],
                borderColor: "purple",
                fill: false
            },
            {
                label: "Warriors",
                data: [.526,.534,.542,.533,.541,.548,.556,.563,.569,.576,.582,.574,.580,.586,.577,.569,.575,.581],
                borderColor: "yellow",
                fill: false
            },
            {
                label: "Timberwolves",
                data: [.526,.534,.542,.533,.541,.548,.556,.563,.567,.567,.574,.580,.571,.563,.569,.562,.568,.573],
                borderColor: "blue",
                fill: false
            },
            {
                label: "Clippers",
                data: [.544,.552,.542,.533,.525,.532,.540,.547,.538,.545,.552,.559,.565,.571,.563,.569,.575,.568],
                borderColor: "orange",
                fill: false
            },{
                label: "Mavericks",
                data: [.534,.525,.533,.525,.516,.508,.500,.492,.500,.493,.485,.478,.471,.479,.486,.479,.486,.493],
                borderColor: "green",
                fill: false
            },{
                label: "Suns",
                data: [.474,.466,.458,.467,.459,.468,.460,.469,.462,.455,.463,.456,.464,.471,.479,.486,.479,.473,.467],
                borderColor: "aquamarine",
                fill: false
            },{
                label: "Kings",
                data: [.509,.517,.525,.533,.525,.532,.524,.516,.500,.507,.515,.507,.500,.493,.486,.493,.486],
                borderColor: "magenta",
                fill: false
            },                {
                type: "scatter",
                label: "Final Game Prediction",
                data: [
                    { x: 82, y:.654, label: "Grizzlies" },
                    { x: 82, y: .621, label: "Nuggets" },
                    { x: 82, y: .654, label: "Lakers" },
                    { x: 82, y: .644, label: "Rockets" },
                    { x: 82, y: .615, label: "Warriors" },
                    { x: 82, y: .580, label: "Timberwolves" },
                    { x: 82, y: .489, label: "Sums" },
                    { x: 82, y: .577, label: "Clippers" },
                    { x: 82, y: .490, label: "Mavericks" },
                    { x: 82, y: .500, label: "Kings" }
                ],
                backgroundColor: ["red", "white", "pink", "purple", "yellow", "blue", "orange","green","aquamarine","magenta"],
                borderColor: "black",
                borderWidth: 4,
                pointRadius: 6
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "East Wild Card Race",
            fontSize: 18
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: true,
            callbacks: {
                label: function(tooltipItem, data) {
                    let dataset = data.datasets[tooltipItem.datasetIndex];
                    let value = dataset.data[tooltipItem.index];
                    return dataset.label + ": " + value;
                }
            }
        },
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                min: 56,
                max: 83,
                title: { display: true, text: "Games Played" }
            },
            y: {
                min: .450,
                max: .675,
                title: { display: true, text: "Win %" }
            }
        }
    }
});


document.addEventListener("DOMContentLoaded", function(){
    const nhl = document.getElementById("nhl");
    const nba = document.getElementById("nba");
    const nbaplayoff = document.getElementById("nbaplayoff");
    const nhlplayoff = document.getElementById("playoff");

    nbaplayoff.style.display ="none";
    nhlplayoff.style.display ="none";

//     Event listener for button
    nbaplayoff.addEventListener("click", function(){
        nbaplayoff.style.display ="block";
        nhlplayoff.style.display ="none";
    });

    //     Event listener for button
    nhlplayoff.addEventListener("click", function(){
        nhlplayoff.style.display ="block";
        nbaplayoff.style.display ="none";
    });

    nhl.addEventListener("click", showNHL);
    nba.addEventListener("click", showNBA)


})

function showNHL()
{
    document.getElementById("playoff").style.display = "block"
    document.getElementById("nbaplayoff").style.display = "none"
}

function showNBA()
{
    document.getElementById("nbaplayoff").style.display = "block";
    document.getElementById("playoff").style.display = "none";
}

