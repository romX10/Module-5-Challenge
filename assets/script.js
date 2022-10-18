today = moment().format("ddd, MMM Do YYYY LTS");
document.getElementById("currentDay").textContent = today;
function getTime(){ 
    today = moment().format("ddd, MMM Do YYYY LTS");
    document.getElementById("currentDay").textContent = today;
};
setInterval(getTime, 1000);

localStorage.getItem("9 AM");
localStorage.getItem("10 AM");
localStorage.getItem("11 AM");
localStorage.getItem("12 PM");
localStorage.getItem("1 PM");
localStorage.getItem("2 PM");
localStorage.getItem("3 PM");
localStorage.getItem("4 PM");
localStorage.getItem("5 PM");

var nineAMbtn = document.getElementById("9AM-btn");
var nineAM = document.getElementById("9AM");
var tenAMbtn = document.getElementById("10AM-btn");
var tenAM = document.getElementById("10AM");
var elevenAMbtn = document.getElementById("11AM-btn");
var elevenAM = document.getElementById("11AM");
var twelvePMbtn = document.getElementById("12PM-btn");
var twelvePM = document.getElementById("12PM");
var onePMbtn = document.getElementById("1PM-btn");
var onePM = document.getElementById("1PM");
var twoPMbtn = document.getElementById("2PM-btn");
var twoPM = document.getElementById("2PM");
var threePMbtn = document.getElementById("3PM-btn");
var threePM = document.getElementById("3PM");
var fourPMbtn = document.getElementById("4PM-btn");
var fourPM = document.getElementById("4PM");
var fivePMbtn = document.getElementById("5PM-btn");
var fivePM = document.getElementById("5PM");

nineAMbtn.addEventListener("click", function(){
    var storeNineAM = nineAM.value
    localStorage.setItem("9 AM", storeNineAM);
    //document.getElementById("9AM").setAttribute("class", "form-control bg-success");
})
tenAMbtn.addEventListener("click", function(){
    var storeTenAM = tenAM.value
    localStorage.setItem("10 AM", storeTenAM);
})
elevenAMbtn.addEventListener("click", function(){
    var storeElevenAM = elevenAM.value
    localStorage.setItem("11 AM", storeElevenAM);
})
twelvePMbtn.addEventListener("click", function(){
    var storeTwelvePM = twelvePM.value
    localStorage.setItem("12 PM", storeTwelvePM);
})
onePMbtn.addEventListener("click", function(){
    var storeOnePM = onePM.value
    localStorage.setItem("1 PM", storeOnePM);
})
twoPMbtn.addEventListener("click", function(){
    var storeTwoPM = twoPM.value
    localStorage.setItem("2 PM", storeTwoPM);
})
threePMbtn.addEventListener("click", function(){
    var storeThreePM = threePM.value
    localStorage.setItem("3 PM", storeThreePM);
})
fourPMbtn.addEventListener("click", function(){
    var storeFourPM = fourPM.value
    localStorage.setItem("4 PM", storeFourPM);
})
fivePMbtn.addEventListener("click", function(){
    var storeFivePM = fivePM.value
    localStorage.setItem("5 PM", storeFivePM);
})
