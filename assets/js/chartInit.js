const chartData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "WPPOOL",
        data: [0, 50, 20, 30, 40, 10],
        borderColor: '#FC714D',
        backgroundColor: '#FC714D',
      },
      {
        label: "Google",
        data: [0, 10, 30, 10, 40, 50],
        borderColor: '#615DE3',
        backgroundColor: '#615DE3',
      },
      {
        label: "Microsoft",
        data: [20, 10, 20, 50, 30, 20],
        borderColor: '#AFCD80',
        backgroundColor: '#AFCD80',
      },
      {
        label: "Twitter",
        data: [10, 60, 30, 20, 10, 0],
        borderColor: '#6F34A1',
        backgroundColor: '#6F34A1',
      },
      {
        label: "",
        data: [-10, 100],
        borderWidth: 0,
        backgroundColor: '#00000000',
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRation: false,
    elements: {
      line: {
        tension: .2,
        borderWidth: 2,
      }
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 10,
          display: true,
          color: '#191618',
          font: {
            size: 12,
            family: 'Messina Sans',
            weight: 400
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        type: 'linear',
        autoSkip: false,
        ticks: {
          stepSize: 10,
          display: true,
          color: '#191618',
          callback: function (value, index, ticks) {
            return value + "%";
          },
          font: {
            size: 12,
            family: 'Messina Sans',
            weight: 400
          }
        },
      },
    },
  };
  
  function initializeChart(context) {
    new Chart(context, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });
  }
  
  $(document).ready(function() {
    const ctx1 = $('#wpp__chart')[0].getContext('2d');
    const ctx2 = $('#wpp__chart2')[0].getContext('2d');
    const ctx3 = $('#wpp__chart3')[0].getContext('2d');
    const ctx4 = $('#wpp__chart4')[0].getContext('2d');
    const ctx5 = $('#wpp__chart5')[0].getContext('2d');
  
    initializeChart(ctx1);
    initializeChart(ctx2);
    initializeChart(ctx3);
    initializeChart(ctx4);
    initializeChart(ctx5);
  });
  