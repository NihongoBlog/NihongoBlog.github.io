const question = [
  {
    question : 1,
    correctAnswer : 4
  }
]

$(document).ready(function(){
  $(".btn-submit").click(function(){
    var index;

    // fill color correct answer
    question.forEach(element => {
      var classRadio;
      var classText;
      var userAnswer;
      for(index = 1; index <= 4; index++){
        classRadio = "#check" + element.question + index;
        if($(classRadio).prop("checked")){
          userAnswer = index;
          classText = ".text" + element.question + index;
          break;
        }
      }
      if(userAnswer != element.correctAnswer){
        $(classText).css("color","red");
        $(classText).css("font-weight","bold");
      }
      classText = ".text" + element.question + element.correctAnswer;
      $(classText).css("color", "green");
      $(classText).css("font-weight","bold");

    });
    
  });
});