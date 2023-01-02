var xValues = ["applicazioni", "siti web", "programmi"];
var yValues = [2, 4, 1,];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
   
    }
  }
});
