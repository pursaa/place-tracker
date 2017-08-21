//Business logic
function Place(place, location, landmarks, date, notes){
  this.place = place;
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

//user interface logic
$(document).ready(function(){
  $('form#place').submit(function(event){
    event.preventDefault();

    var place = $("input#place-name").val();
    var location = $("input#location").val();
    var landmarks = $("input#landmarks").val();
    var date = $('input#date').val();
    var notes = $("input#notes").val();

    var newPlace = new Place(place, location, landmarks, date, notes);

    $("ul.visited").append("<li><span class='visit'>" + newPlace.place + "</span></li>");

    $("input#place-name").val("");
    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#date").val("");
    $("input#notes").val("");

    $(".visit").last().click(function() {
      $(".display h3").text(newPlace.place + ", " + newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".date").text(newPlace.date);
      $(".notes").text(newPlace.notes);
      $(".display").show();
    });
  });
});
