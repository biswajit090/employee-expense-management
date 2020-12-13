var empName = "Alex";
$(".name-head")[0].innerText = "Hello, " + empName;

var spendingList = [];
var totalSpent = 0;
var totalCatagorey = $(".fld").length;

for (var i = 0; i < totalCatagorey; i++){
  $(".fld")[i].value = 0;
  $(".fld")[i].innerText = 0;

}


$(".calc").on("click", function(event) {

  var totalCatagorey = $(".fld").length;
  for (var i = 0; i < totalCatagorey; i++){
    spendingList.push($(".fld")[i].value);
    //console.log($(".fld")[i].value);
    totalSpent = totalSpent + parseInt($(".fld")[i].value);


    var ctxD = document.getElementById("doughnutChart").getContext('2d');

    var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
    labels: ["Travel", "Electricity", "Broadband", "Insurance", "Food", "Gym", "Rent"],
    datasets: [{
    data: [spendingList[0], spendingList[1], spendingList[2], spendingList[3], spendingList[4], spendingList[5], spendingList[6]],
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#816774"],
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#916774"]
    }]
    },
    options: {
    responsive: true
    }
    });



  }

  $(".sum")[0].innerText = totalSpent;
});
