// function display(elementImg){
//     var image = elementImg.alt;
//     var bodyModal = document.getElementsByClassName("modal-body");
//     var createImg = document.createElement("IMG");
//     if(image.localeCompare("a") == 0){
//         createImg.setAttribute("src", "images/a.png");
//         bodyModal.appendChild(createImg);   
//     }
// }

$(document).ready(function() {
    $('.img-responsive').click(function(){
          $('.modal-body').empty();
          var title = $(this).attr("alt");
          var createImg;
          var createAudio;
          if(title.localeCompare("a") == 0){
            $('.btn-back').attr("disabled",true);
          }else{
            $('.btn-back').attr("disabled",false);
          }
          switch(title){
            case 'a':
              createImg = "<img alt = \"a\" src = \"images/hiragana/a.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/a.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
            case 'i':
              createImg = "<img alt = \"i\" src = \"images/hiragana/i.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
            case 'u':
              createImg = "<img  alt = \"u\" src = \"images/hiragana/u.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
            case 'e':
              createImg = "<img alt = \"e\" src = \"images/hiragana/e.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/e.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
            case 'i':
              createImg = "<img alt = \"o\" src = \"images/hiragana/o.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/o.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
            case 'u':
              createImg = "<img  alt = \"ka\" src = \"images/hiragana/ka.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
              createAudio = "<audio id=\"myAudio\"><source src=\"audio/ka.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
              break;
          }
          $(createImg).appendTo('.modal-body');
          $(createAudio).appendTo('.modal-body');

    });
});

$(document).ready(function(){
    $('.play-audio').click(function(){
        var x = document.getElementById("myAudio");
        x.play();
    });
});
// Handle button next
$(document).ready(function(){
  $('.btn-next').click(function(){
    var idImg, createImg, createAudio;
    idImg = $('.modal-body')[0].firstChild.alt;
    $('.btn-back').attr("disabled",false);
    $('.modal-body').empty();
    switch(idImg){
      case 'a':
        createImg = "<img alt = \"i\" src = \"images/hiragana/i.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
        createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
        break;
      case 'i':
        createImg = "<img alt = \"u\" src = \"images/hiragana/u.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
        createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
        break;
      case 'u':
        createImg = "<img alt = \"e\" src = \"images/hiragana/e.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
        createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
        break;
      
    }
    $(createImg).appendTo('.modal-body');
    $(createAudio).appendTo('.modal-body');
  });
});

// Handle button back
$(document).ready(function(){
  $('.btn-back').click(function(){
    var idImg, createImg, createAudio;
    idImg = $('.modal-body')[0].firstChild.alt;
    $('.modal-body').empty();
    switch(idImg){
      case 'i':
        createImg = "<img alt = \"a\" src = \"images/hiragana/a.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
        createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
        $('.btn-back').attr("disabled",true);
        break;
      case 'u':
        createImg = "<img alt = \"i\" src = \"images/hiragana/i.png\" width = \"50%\" style = \"margin-left : 25%\"></img>";
        createAudio = "<audio id=\"myAudio\"><source src=\"audio/i.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>"
        break;
    }
    $(createImg).appendTo('.modal-body');
    $(createAudio).appendTo('.modal-body');
  });
});