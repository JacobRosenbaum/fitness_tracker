// variables

var contWork = $("#continue-btn");
var newWork = $("#new-btn");
var homepage = $("#homepage");
var dashboardButton = $("#dashboardButton");
//functions

function goToExercise() {
    window.location.replace("/exercise")
    console.log("exercise")
}

function goToHomepage() {
    window.location.replace("/")
    console.log("homepage")
}

function goToDashboard() {
    window.location.replace("/stats")
    console.log("stats")
}
//event handlers

newWork.on("click", goToExercise);
contWork.on("click", goToExercise);
homepage.on("click", goToHomepage);
dashboardButton.on("click", goToDashboard);