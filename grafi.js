document.addEventListener('DOMContentLoaded', function () {
    //!init chart
    var temperature = document.getElementById('temperature').getContext('2d');         //! must be x2
    var pressure = document.getElementById('pressure').getContext('2d');               //! must be x3
    var o2 = document.getElementById('o2').getContext('2d');                           //! must be x1
    var methane = document.getElementById('methane').getContext('2d');                 //! must be x1
    var voc = document.getElementById('voc').getContext('2d');                         //! must be x1
    //var gyro = document.getElementById('gyro').getContext('2d');                       //! must be x,y,x
    //var acceleration = document.getElementById('acceleration').getContext('2d');       //! must be x,y,z
    //var magnet = document.getElementById('magnet').getContext('2d');                   //!TODO must be x1 //x,y,z
    //var height = document.getElementById('height').getContext('2d');                   //! must be x4
    //!TODO ce bo cajt
    //var loraAcl = document.getElementById('loraAcl').getContext('2d');  
    //!sample data
    var temperature1 = [];
    var temperature2 = [];
    var pressure1 = [];
    var pressure2 = [];
    var pressure3 = [];
    var o21 = [];


    //!temparatura
    var temperatureChart = new Chart(temperature, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                //! spremen da bo vredu za senzor
                {
                    label: 'Temperature1',
                    borderColor: 'rgb(0, 255, 255 )',
                    data: temperature1,
                    fill: false
                },
                //! spremen da bo vredu za senzor
                {
                    label: 'Temperature2',
                    borderColor: 'rgb(255, 0, 255)',
                    data: temperature2,
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
            }
        }
    });

    //!tlak
    var pressureChart = new Chart(pressure, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                //! spremen da bo vredu za senzor
                {
                    label: 'pressure1',
                    borderColor: 'rgb(0, 255, 255 )',
                    data: pressure1,
                    fill: false
                },
                //! spremen da bo vredu za senzor
                {
                    label: 'pressure2',
                    borderColor: 'rgb(255, 0, 255)',
                    data: pressure2,
                    fill: false
                },
                //! spremen da bo vredu za senzor
                {
                    label: 'pressure3',
                    borderColor: 'rgb(255, 255, 0)',
                    data: pressure3,
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
            }
        }
    });

    //! o2 level
    var o2Chart = new Chart(o2, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                //! spremen da bo vredu za senzor
                {
                    label: 'o2',
                    borderColor: 'rgb(0, 255, 255 )',
                    data: o21,
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
            }
        }
    });

    //!methane
    var methaneChar = new Chart(methane, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                //! spremen da bo vredu za senzor
                {
                    label: 'o2',
                    borderColor: 'rgb(0, 255, 255 )',
                    data: o21,
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
            }
        }
    });




});





function getJsonObject() {
    return fetch('./dat.json') // Replace 'dat.json' with the path to your JSON file
        .then(response => response.json())
        .catch(error => {
            console.error('Error reading JSON file:', error);
            throw error; // Propagate the error
        });
}
