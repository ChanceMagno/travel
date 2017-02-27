// Business Logic
function Destination(location, landmark, season, notes) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

// User Interface Logic
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedSeason = $("input#new-season").val();
    var inputtedNotes = $("input#new-notes").val();

    var newDestination = new Destination(inputtedLocation, inputtedLandmark, inputtedSeason, inputtedNotes);

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.location + "</span></li>");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.location);
      $(".location").text(newDestination.location);
      $(".landmark").text(newDestination.landmark);
      $(".season").text(newDestination.season);
      $(".notes").text(newDestination.notes);
    });

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-season").val("");
    $("input#new-notes").val("");
  });
});
