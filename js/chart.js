function displayLineChart() {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Ink",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [0, 2, 0, 0, 0, 1, 3, 1, 2, 0, 1, 2]
            },
            {
                label: "Charcoal",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 2]
            },
            {
                label: "Watercolor Paintings",
                fillColor: "rgba(240,177,240,0.2)",
                strokeColor: "rgba(240,177,240,1)",
                pointColor: "rgba(240,177,240,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(240,177,240,1)",
                data: [0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 1, 1]
            },
            {
                label: "Acrylic Paintings",
                fillColor: "rgba(177,220,240,0.2)",
                strokeColor: "rgba(177,220,240,1)",
                pointColor: "rgba(177,220,240,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(177,220,240,1)",
                data: [0, 0, 0, 0, 0, 1, 2, 3, 2, 1, 0, 2]
            },
            {
                label: "Oil Paintings",
                fillColor: "rgba(172,251,166,0.2)",
                strokeColor: "rgba(172,251,166,1)",
                pointColor: "rgba(172,251,166,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(172,251,166,1)",
                data: [1, 2, 0, 1, 0, 1, 0, 3, 0, 0, 1, 1]
            },
            {
                label: "Chalk Pastels",
                fillColor: "rgba(171,175,241,0.2)",
                strokeColor: "rgba(171,175,241,1)",
                pointColor: "rgba(171,175,241,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(171,175,241,1)",
                data: [1, 1, 1, 2, 2, 3, 3, 2, 2, 1, 1, 1]
            },
            {
                label: "Oil Pastels",
                fillColor: "rgba(235,167,167,0.2)",
                strokeColor: "rgba(235,167,167,1)",
                pointColor: "rgba(235,167,167,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(1235,167,167,1)",
                data: [0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1]
            },
            {
                label: "Graphite Pencils",
                fillColor: "rgba(219,218,188,0.2)",
                strokeColor: "rgba(219,218,188,1)",
                pointColor: "rgba(219,218,188,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(219,218,188,1)",
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            },
            {
                label: "Colored Pencils",
                fillColor: "rgba(165,248,252,0.2)",
                strokeColor: "rgba(165,248,252,1)",
                pointColor: "rgba(165,248,252,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(165,248,252,1)",
                data: [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
            },
            {
                label: "Watercolor Pencils",
                fillColor: "rgba(215,171,251,0.2)",
                strokeColor: "rgba(215,171,251,1)",
                pointColor: "rgba(215,171,251,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(215,171,251,1)",
                data: [0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 2]
            },
        ]
    };
    var ctx = document.getElementById("lineChart").getContext("2d");
    var options = { };
    var lineChart = new Chart(ctx).Line(data, options);
  }