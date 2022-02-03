const ChartCB = (function() {
  const tokenChart = () => {
    const tokenChart = document.getElementById('tokenChart').getContext('2d'),
      growingChart1 = document.getElementById('growingChart1').getContext('2d'),
      growingChart2 = document.getElementById('growingChart2').getContext('2d');

    const dataToken = {
      labels: ['Team', 'Advisors', 'Token Sale', 'Marketing', 'Product Development', 'Liquidity Pool', 'Reserve Pool'],
      datasets: [
        {
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
    const dataGrowingBar = {
      labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'ICO',
          data: [100,100,100,100,45,75,25],
          borderColor: '#00babb',
          backgroundColor: '#00babb',
          pointStyle: 'circle',
          pointRadius: 7,
          tension: 0.3,
        },
        {
          label: 'IDO',
          data: [0,0,0,0,5,10,65],
          borderColor: '#04436f',
          backgroundColor: '#04436f',
          pointStyle: 'circle',
          pointRadius: 7,
          tension: 0.3,
        },
        {
          label: 'IEO',
          data: [0,0,0,0,50,15,10],
          borderColor: '#00f968',
          backgroundColor: '#00f968',
          pointStyle: 'circle',
          pointRadius: 7,
          tension: 0.3,
        },
      ]
    };
    const dataGrowingPie = {
      labels: ['ICO', 'IDO', 'IEO',],
      datasets: [
        {
          label: 'Dataset 1',
          data: ['256439550','917806990','43456760',],
          borderColor: ['#00babb','#04436f','#00f968',],
          backgroundColor: ['#00babb','#04436f','#00f968',],
          pointStyle: 'circle',
          pointRadius: 7,
          tension: 0.3,
        }
      ]
    };

    const configToken = {
      type: 'pie',
      data: dataToken,
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
    const configGrowingBar = {
      type: 'bar',
      data: dataGrowingBar,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 20,
              boxHeight: 20,
              color: '#ffffff',
              usePointStyle: true,
              padding: 10,
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'",
              },
            }
          },
          title: {
            display: false,
            align: 'start',
            color: 'white',
            font: {
              size: 26,
              weight: 'bold',
              family: "'Raleway', 'sans-serif'",
            },
            padding: {
              top: 0,
              bottom: 10
            },
            text: 'EVOLUTION OF INITIAL OFFERING TYPES'
          }
        },
        scales: {
          x: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              color: 'white',
              font: {
                size: 17,
                weight: 'bold',
                family: "'Raleway', 'sans-serif'",
              },
              padding: 10,
            }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
              min: 0,
              max: 100,
              color: 'white',
              font: {
                size: 17,
                weight: 'normal',
                family: "'Raleway', 'sans-serif'",
              },
              padding: 10,
              callback: function (value) {
                return (value / this.max * 100).toFixed(0) + '%';
              },
            }
          }
        }
      },
    };
    const configGrowingPie = {
      type: 'pie',
      data: dataGrowingPie,
      showAllTooltips: true,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
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
            align: 'start',
            color: 'white',
            font: {
              size: 26,
              weight: 'bold',
              family: "'Raleway', 'sans-serif'",
            },
            padding: {
              top: 0,
              bottom: 10
            },
            text: 'TOTAL RAISED IN JAN-NOV 2021'
          }
        }
      },
    };

    new Chart(tokenChart, configToken);
    new Chart(growingChart1, configGrowingBar);
    new Chart(growingChart2, configGrowingPie);
  };

  const init = function() {
    tokenChart();
  };
  return {
    init: init
  };

})();

export default ChartCB;
