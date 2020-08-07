const question = [
  {
    question : 1,
    correctAnswer : 4
  },
  {
    question : 2,
    correctAnswer : 2
  },
  {
    question : 3,
    correctAnswer : 1
  },
  {
    question : 4,
    correctAnswer : 2
  },
  {
    question : 5,
    correctAnswer : 2
  },
  {
    question : 6,
    correctAnswer : 4
  },
  {
    question : 7,
    correctAnswer : 4
  }
  ,
  {
    question : 8,
    correctAnswer : 3
  },
  {
    question : 9,
    correctAnswer : 1
  },
  {
    question : 10,
    correctAnswer : 3
  }

]
changedQue =[];
changedRadio = [];
$(document).ready(function(){
  $(".btn-submit").click(function(){
    var index;
    var numOFCrrectAns = 0;
    // fill color correct answer
    question.forEach((element,count) => {
      var classRadio;
      var classText;
      var userAnswer;
      for(index = 1; index <= 4; index++){
        classRadio = "#check" + element.question + index;
        if($(classRadio).prop("checked")){
          changedRadio[count] = classRadio;
          userAnswer = index;
          classText = ".text" + element.question + index;
          break;
        }
      }
      if(userAnswer != element.correctAnswer){
        $(classText).css("color","red");
        $(classText).css("font-weight","bold");
        changedQue.push(classText);
      }
      classText = ".text" + element.question + element.correctAnswer;
      $(classText).css("color", "green");
      $(classText).css("font-weight","bold");
      if(userAnswer != element.correctAnswer){
        changedQue.push(classText);
      }else{
        changedQue.push(classText);
        numOFCrrectAns = numOFCrrectAns + 1;
      } 
    });
    $(window).scrollTop(0);
    if(changedRadio.length != 0){
      $(".result").append(numOFCrrectAns+"/10");
    }
    
  });
  $(".btn-reset").click(function(){
    var index;
    // reset radio button and color
    if((changedQue.length == 0) && (changedRadio.length == 0)){
      question.forEach((element,count) => {
        var classRadio;
        for(index = 1; index <= 4; index++){
          classRadio = "#check" + element.question + index;
          if($(classRadio).prop("checked")){
            $(classRadio).prop("checked",false);
            break;
          }
        }
      });
    }else{ 
      for (index = 0; index < changedQue.length; index++) {
        $(changedQue[index]).css("color", "black");
        $(changedQue[index]).css("font-weight","unset");
        
      }
      for (index = 0; index < changedRadio.length; index++) {
        $(changedRadio[index]).prop("checked",false);
      }
    }
    $(window).scrollTop(0);
    $(".result").text("Kết quả:");
  })
});
