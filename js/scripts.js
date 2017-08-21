//Business logic



//user interface logic
$(document).ready(function(){
  $('form#place').submit(function(event){
    event.preventDefault();

    var place = $("input#place-name").val();
    var location = $("input#location").val();
    var landmarks = $("input#landmarks").val();
    var date = $('input#date').val();
    var notes = $("input#notes").val();
    


  });
});
