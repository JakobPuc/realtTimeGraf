function updateChart() {
        // Generate a random data point (replace this with your data source)
        var newDataPoint = Math.random() * 100;
        pressure1.push(newDataPoint);
        if (pressure1.length > 100) {
            pressure1.shift();
        }
        newDataPoint = Math.random() * 100;
        pressure2.push(newDataPoint);
        if (pressure2.length > 100) {
            pressure2.shift();
        }
        newDataPoint = Math.random() * 100;
        pressure3.push(newDataPoint);
        if (pressure3.length > 100) {
            pressure3.shift();
        }

        // Update the chart labels (optional)
        pressureChart.data.labels = pressure1.map((_, index) => index + 1);
        pressureChart.data.labels = pressure2.map((_, index) => index + 1);
        pressureChart.data.labels = pressure3.map((_, index) => index + 1);


        // Update the chart data and re-render
        pressureChart.update();

        // Schedule the next update after a delay (e.g., 1000 milliseconds)
        setTimeout(updateChart, 1000);
    }

    // Start the continuous update
    updateChart();