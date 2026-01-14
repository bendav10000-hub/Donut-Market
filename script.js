const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3'],
    datasets: [{
      label: 'Test Price',
      data: [400, 420, 410]
    }]
  }
});


