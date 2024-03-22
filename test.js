document.addEventListener('DOMContentLoaded', function () {
    var chartData = [];

    // Get the canvas element
    var ctx = document.getElementById('temperatura').getContext('2d');

    // Create the line chart
    var realTimeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Real-time Data',
                borderColor: 'rgb(75, 192, 192)',
                data: chartData,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    beginAtZero: true
                }
            } // matlab
        }
    });

    // Function to add a new data point and update the chart
    function updateChart() {
        // Generate a random data point (replace this with your data source)
        var newDataPoint = Math.random() * 100;

        // Add the new data point to the chart data
        chartData.push(newDataPoint);

        // Limit the number of data points to display (optional)
        if (chartData.length > 100) {
            chartData.shift();
        }

        // Update the chart labels (optional)
        realTimeChart.data.labels = chartData.map((_, index) => index + 1);

        // Update the chart data and re-render
        realTimeChart.update();

        // Schedule the next update after a delay (e.g., 1000 milliseconds)
        setTimeout(updateChart, 1000);
    }

    // Start the continuous update
    updateChart();
});