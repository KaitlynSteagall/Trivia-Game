var number = 61;
var intervalId;
var numCorrect = 0;
var numIncorrect = 0;
var unanswered = 0;

//function for the timer
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
//  The decrement function.
function decrement() {
  //  Decrease number by one.
  number--;
  //  Show the number in the #countdown tag.
  $("#countdown").html(number);
  //  Once number hits zero relocate html to results page
  if (number === 0) {
    addAnswers();
    window.location.href = "result.html"
    // $(window).unload(window.location.href = "index.html"); //attempt at when reload happens to redirect to the index.html
  }
}

function addAnswers() {
  //QUESTION 1
  //on click event for each question to determine which radio was selected
  $(".12hrs, .48hrs1, .1yr, .3yrs").on("click", function () {
    //if the correct radio is checked...
    if ($('.3yrs').is(':checked')) {
      //add to the numCorrect var
      numCorrect++ //this will add everytime it's clicked how to avoid this?
      //display score to #numCorrect
      $("#numCorrect").html(numCorrect); // this will only work if #numCorrect is in quiz.html. It doesn't transfer to the results.html. How do I accomplish?
    }
    //else if the incorrect radio is checked..
    else if (($('.12hrs').is(':checked')) || ($('.48hrs1').is(':checked')) || ($('.1yr').is(':checked'))) {
      //add to the numIncorrect var
      numIncorrect++; //this will add everytime it's clicked how to avoid this?
      //display score to #numIncorrect
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  })
  //QUESTION 2
  $(".true1, .false1").on("click", function () {
    if ($('.true1').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if ($('.false1').is(':checked')) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  })
  //QUESTION 3
  $(".dent, .ker, .coll, .elast").on("click", function () {
    if ($('.ker').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if (($('.dent').is(':checked')) || ($('.coll').is(':checked')) || ($('.elast').is(':checked'))) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  });
  //QUESTION 4
  $(".48hrs2, .1wk, .2wks, .3wks").on("click", function () {
    if ($('.2wks').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if (($('.48hrs2').is(':checked')) || ($('.1wk').is(':checked')) || ($('.3wks').is(':checked'))) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  });
  //QUESTION 5
  $(".true2, .false2").on("click", function () {
    if ($('.false2').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if ($('.true2').is(':checked')) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  });
  //QUESTION 6
  $(".slowLor, .cham, .owl, .ostrich").on("click", function () {
    if ($('.ostrich').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if (($('.slowLor').is(':checked')) || ($('.cham').is(':checked')) || ($('.owl').is(':checked'))) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  });
  //QUESTION 7
  $(".true3, .false3").on("click", function () {
    if ($('.false3').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if ($('.true3').is(':checked')) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  });
  //QUESTION 8
  $(".true4, .false4").on("click", function () {
    if ($('.true4').is(':checked')) {
      numCorrect++
      $("#numCorrect").html(numCorrect);
    }
    else if ($('.false4').is(':checked')) {
      numIncorrect++;
      $("#numIncorrect").html(numIncorrect);
    }
    
    else {
      unanswered++
      $("#unanswered").html(unanswered);
    }
  })
};

//need a function to take screen back to start page and reset scores on reload 
// function reload(){
// if ($(window).unload(function() {
//   window.location.href = "index.html"
// }));
// }  **second attempt to make page redirect to index.html on refresh


run();
addAnswers();
// reload();
