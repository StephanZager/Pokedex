async function renderChart() {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pokemonStatsName,
            datasets: [{
                label: '# of Votes',
                data: pokemonBaseStat,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
    