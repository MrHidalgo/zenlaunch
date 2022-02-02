const ChartCB = (function() {
  const tokenChart = () => {
    const tokenChart = document.getElementById('tokenChart').getContext('2d');

    const data = {
      labels: ['Team', 'Advisors', 'Token Sale', 'Marketing', 'Product Development', 'Liquidity Pool', 'Reserve Pool'],
      datasets: [{
          label: 'Dataset 1',
          data: [12,3,20,15,10,15,25],
          borderColor: ['#00d992','#00f968','#009e42','#007208','#00babb','#04436f','#003357'],
          backgroundColor: ['#00d992','#00f968','#009e42','#007208','#00babb','#04436f','#003357'],
          pointStyle: 'circle',
          pointRadius: 7,
          tension: 0.3,
        }
      ]
    };

    const config = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              color: '#ffffff',
              usePointStyle: true,
              padding: 25,
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'",
              },
            }
          },
          title: {
            display: false,
            text: ''
          }
        }
      },
    };

    new Chart(tokenChart, config);
  };

  const init = function() {
    tokenChart();
  };
  return {
    init: init
  };

})();

export default ChartCB;
