const options = {
  scales: { x: { display: false }, y: { display: false } },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      formatter: function (value, context) {
        return context.dataset.label;
      },
      color: 'white',

      font: {
        weight: 'bold',
      },
    },
  },
};

export default options;
