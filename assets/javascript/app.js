var numCorrect = 0;
// var numIncorrect = 0;
// var unanswered = 0;
// var question1 = $('input[name=question1]').val();
// var question1 = document.quiz.question1.value;
// var question2 = document.quiz.question2.value;
// var question3 = document.quiz.question3.value;
// var question4 = document.quiz.question4.value;
// var question5 = document.quiz.question5.value;
// var question6 = document.quiz.question6.value;
// var question7 = document.quiz.question7.value;
// var question8 = document.quiz.question8.value;

$(".12hrs, .48hrs1, .1yr, .3yrs").on("click", function() {
if ($('.3yrs').is(':checked')) {
  alert("correct");
  // numCorrect ++
  // $("#correct").html(numCorrect);
}
else if ($('.12hrs, .48hrs1, .1yr').is(':checked')) {
  alert("incorrect");
}

else {
  alert("unanswered");
}
})

// if (question2 === "True") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question3 === "Keratin") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question4 === "2 weeks") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question5 === "False") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question6 === "Ostrich") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question7 === "False") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }

// if (question8 === "True") {
//   alert("correct");
// }
// else {
//   alert("incorrect");
// }
