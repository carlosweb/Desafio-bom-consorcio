var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul", "Ago","Set","Out", "Nov","Dez"],
        datasets:[{
            label: "Resultado",
            data: [5,10,5,14,20,15,6,14,8,12,15,5,10],
            borderWidth: 2,
            borderColor: '#4e68fb',
            backgroundColor:'transparent'
        },
        {
            label: "Média",
            data: [1,15,10,14,20,15,6,7,8,10,10,15,15],
            borderWidth: 2,
            borderColor: '#57c8b3',
            backgroundColor:'transparent'
        },
        {
            label: "Projetado",
            data: [0,3,6,9,12,15,18,21,24,27,30,33,36],
            borderWidth: 2,
            borderColor: '#a26bfc',
            backgroundColor:'transparent'
        },
    ]
    },

    // Configuration options go here
    options: {
        responsive: true
    }
});