var name = window.prompt("Hello! Please enter your name");
var greeting = document.getElementById("greeting");
greeting.innerHTML += ", " + name;
var enterDays = document.getElementById("enterDays");
enterDays.onclick = calculateDays;
function calculateDays() {
  var daysInput = document.getElementById("days");
  var days = daysInput.value;
  if(days < 4){
         daysMessage.innerHTML = "Short trips are always worth it!";
     }
     else if(days < 7){
         daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
     }
     else{
         daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
     }
  var hours = days * 24;
  var minutes = hours * 60;
  var seconds = minutes * 60;
  var hoursMessage = document.getElementById("hoursMessage");
  var minutesMessage = document.getElementById("minutesMessage");
  var secondsMessage = document.getElementById("secondsMessage");
  hoursMessage.innerHTML = "That means you will be traveling for " + 
    hours + " hours.";
  minutesMessage.innerHTML = "That means you will be traveling for " + 
    minutes + " minutes.";
  secondsMessage.innerHTML = "That means you will be traveling for " + 
    seconds + " seconds.";
  var timingNext = document.getElementById("timingNext");
  timingNext.removeAttribute("hidden");
  timingNext.onclick = function() {
    document.getElementById("budgetSection").removeAttribute("hidden");
  }
  var exchangeRate = 1.45;
  var exchange = document.getElementById("exchangeRate");
  exchange.innerHTML = "Exchange rate: 1 USD = " + exchangeRate + " NZD";
  var enterBudget = document.getElementById("enterBudget");
  enterBudget.onclick = calculateBudget;
  function calculateBudget() {
    var tripBudgetInput = document.getElementById("tripBudget");
    var budget = tripBudgetInput.value;
    var budgetNZD = budget * exchangeRate;
    var tripMsg = document.getElementById("tripExchangeMsg");
    tripMsg.innerHTML = "That means you will need " + budgetNZD +
      " NZD for your trip.";
    var dailyBudgetNZD = budgetNZD / days;
    var dailyMsg = document.getElementById("dailyExchangeMsg");
    dailyMsg.innerHTML = "That means you can spend " + dailyBudgetNZD +
      " NZD for your trip.";
    var dollar10 = 10;
    var budget10 = dollar10 * exchangeRate;
    var ex10Msg = document.getElementById("exchange10Msg");
    ex10Msg.innerHTML = "You'll need " + budget10 +
      " NZD for an item that would cost you " + dollar10 + " USD.";
    var dollar500 = 500;
    var budget500 = dollar500 * exchangeRate;
    var ex500Msg = document.getElementById("exchange500Msg");
    ex500Msg.innerHTML = "You'll need " + budget500 +
      " NZD for an item that would cost you " + dollar500 + " USD.";
    var budgetNext = document.getElementById("budgetNext");
    budgetNext.removeAttribute("hidden");
	budgetNext.onclick = function() {
      var images = ["images/image1", "images/image2", "images/image3", "images/image4" ];
      var currentImage = 0;
      setInterval(changeImage, 3000);
      function changeImage(){
        currentImage++;
        if(currentImage > images.length - 1){
          currentImage = 0;
         }
         document.body.style.backgroundImage = "url(" + 
           images[currentImage] + ".jpg" + ")";
       }
    }
  }
}