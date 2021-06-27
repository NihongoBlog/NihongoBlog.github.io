
const que = [
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"今、おかねを　いくら　もっていますか。","AnswerJP1":"全","AnswerJP2":"宝","AnswerJP3":"金","AnswerJP4":"定","CorrectAnswer":"金","UnderlineText":"かね"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"てんきが　よく　なりましたね。","AnswerJP1":"天汽","AnswerJP2":"天気","AnswerJP3":"失気","AnswerJP4":"失汽","CorrectAnswer":"天気","UnderlineText":"てんき"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"食べながら　はなさないほうが　いいですよ。","AnswerJP1":"記さない","AnswerJP2":"話さない","AnswerJP3":"計さない","AnswerJP4":"読さない","CorrectAnswer":"話さない","UnderlineText":"はなさない"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"あのかどを　みぎに　まがって　まっすぐ行ってください。","AnswerJP1":"右","AnswerJP2":"石","AnswerJP3":"左","AnswerJP4":"佐","CorrectAnswer":"右","UnderlineText":"みぎ"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"\n「どうぞ　はいってください」\n「しつれいします」","AnswerJP1":"大って","AnswerJP2":"八って","AnswerJP3":"人って","AnswerJP4":"入って","CorrectAnswer":"入って","UnderlineText":"はいって"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"あさは　いそがしくて　しんぶんを　よむことができません。","AnswerJP1":"読む","AnswerJP2":"話む","AnswerJP3":"説む","AnswerJP4":"訳む","CorrectAnswer":"読む","UnderlineText":"よむ"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"ここに来るとき　でんしゃの中で　田中さんに　あいました。","AnswerJP1":"電事","AnswerJP2":"震事","AnswerJP3":"電車","AnswerJP4":"震車","CorrectAnswer":"電車","UnderlineText":"でんしゃ"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"母は　あまり　あめが　すきではありません。","AnswerJP1":"雨","AnswerJP2":"両","AnswerJP3":"雲","AnswerJP4":"雪","CorrectAnswer":"雨","UnderlineText":"あめ"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"\n「ともだちは　おおぜい　来ましたか」\n「いいえ、５人しか　来ませんでした」","AnswerJP1":"友だち","AnswerJP2":"万だち","AnswerJP3":"方だち","AnswerJP4":"文だち","CorrectAnswer":"友だち","UnderlineText":"ともだち"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"土ようびは　やすみなので、げつようびに　しませんか。","AnswerJP1":"日ようび","AnswerJP2":"同ようび","AnswerJP3":"自ようび","AnswerJP4":"月ようび","CorrectAnswer":"月ようび","UnderlineText":"げつようび"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"\n「レポートは？」\n「すみません。まだ　かいていません」","AnswerJP1":"事いて","AnswerJP2":"筆いて","AnswerJP3":"読いて","AnswerJP4":"書いて","CorrectAnswer":"書いて","UnderlineText":"かいて"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"まいとし　12月は　とても　いそがしいです。","AnswerJP1":"写年","AnswerJP2":"母年","AnswerJP3":"海年","AnswerJP4":"毎年","CorrectAnswer":"毎年","UnderlineText":"まいとし"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"このパソコンは　たかかったです。","AnswerJP1":"高かった","AnswerJP2":"亭かった","AnswerJP3":"京かった","AnswerJP4":"言かった","CorrectAnswer":"高かった","UnderlineText":"たかかった"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"今日は　どこにも　いきたくないです。","AnswerJP1":"行きたくない","AnswerJP2":"住きたくない","AnswerJP3":"来きたくない","AnswerJP4":"走きたくない","CorrectAnswer":"行きたくない","UnderlineText":"いきたくない"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"きのうは　本を読んだあとで　しゅくだいを　しました。","AnswerJP1":"役で","AnswerJP2":"後で","AnswerJP3":"彼で","AnswerJP4":"往で","CorrectAnswer":"後で","UnderlineText":"あとで"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"毎朝、7時に　いえを　でます。","AnswerJP1":"主ます","AnswerJP2":"米ます","AnswerJP3":"出ます","AnswerJP4":"来ます","CorrectAnswer":"出ます","UnderlineText":"でます"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"きのうは　９じかんぐらい　ねました。","AnswerJP1":"時門","AnswerJP2":"時聞","AnswerJP3":"時間","AnswerJP4":"時問","CorrectAnswer":"時間","UnderlineText":"じかん"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"きょうは　一日じゅう　しごとを　して、とても　つかれました。","AnswerJP1":"上","AnswerJP2":"下","AnswerJP3":"十","AnswerJP4":"中","CorrectAnswer":"中","UnderlineText":"じゅう"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"おくには　どちらですか。","AnswerJP1":"国","AnswerJP2":"同","AnswerJP3":"因","AnswerJP4":"用","CorrectAnswer":"国","UnderlineText":"くに"},
  {"Description":"N5","TopicKindTitle":"Hán tự","TopicTitle":"Đề 1","JapaneseContent":"あのカフェで　すこし　やすみましょう。","AnswerJP1":"件みましょう","AnswerJP2":"体みましょう","AnswerJP3":"仕みましょう","AnswerJP4":"休みましょう","CorrectAnswer":"休みましょう","UnderlineText":"やすみましょう"}]
changedQue =[];
changedRadio = [];


$(document).ready(function(){
  
  $(".btn-submit").click(function(){
    var index;
    var numOFCrrectAns = 0;
    // fill color correct answer
    que.forEach((element,count) => {
      var classRadio;
      var classText;
      var userAnswer = [];
      var ansCorrect = [];
      for(index = 1; index <= 4; index++){
        classRadio = "#check" + (count+1) + index;
        if($(classRadio).prop("checked")){
          changedRadio[count] = classRadio;
          classText = ".text" + (count+1) + index;
          var tmpUserAnswer = $(classText).html();
          userAnswer = tmpUserAnswer.split(" ");
          break;
        }
      }
      if(userAnswer.length > 0){
        if(userAnswer[userAnswer.length - 1] != element.CorrectAnswer){
          $(classText).css("color","red");
          $(classText).css("font-weight","bold");
          changedQue.push(classText);
        }
        for (let index = 1; index <= 4; index++) {
          classText = ".text" + (count+1) + index;
          let tmpAns = $(classText).html();
          ansCorrect = tmpAns.split(" ");
          if(ansCorrect[ansCorrect.length-1] === element.CorrectAnswer){
            break;
          }
        }
        $(classText).css("color", "green");
        $(classText).css("font-weight","bold");
        if(userAnswer[userAnswer.length - 1] != element.CorrectAnswer){
          changedQue.push(classText);
        }else{
          changedQue.push(classText);
          numOFCrrectAns = numOFCrrectAns + 1;
        }
      } 
    });
    $(window).scrollTop(0);
    if(changedRadio.length != 0){
      $(".result").text("Kết quả:");
      $(".result").append(numOFCrrectAns+"/"+que.length);
    }
  });
  //==================================================
  $(".btn-reset").click(function(){
    var index;
    // reset radio button and color
    if((changedQue.length == 0) && (changedRadio.length == 0)){
      que.forEach((element,count) => {
        var classRadio;
        for(index = 1; index <= 4; index++){
          classRadio = "#check" + (count+1) + index;
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
  });
  //==================================================
  $(".btn-start").click(function(){
    $(".btn-start").remove();
    for (var i = 0; i < que.length; i++){
      var question = $("<h5></h5>").text(que[i].JapaneseContent);
      $(".body-kanji").append(question);
      $("<div>").addClass('card my-4' + ' queskanji' + i).appendTo(".body-kanji");
      $("<h5>").html(que[i].UnderlineText).addClass('card-header style-kanji').appendTo(".queskanji" +i);
      $("<div>").addClass('card-body' + ' anskanji'+i).appendTo(".queskanji" +i);
      //==============1================
      var name = "optradio" + (i + 1);
      var id1 = "check" + (i + 1) + "1";
      var label1 = "text" +(i + 1) + "1";
      $("<div>").addClass('form-check ans'+ i + 1).appendTo(".anskanji" +i);
      $(".ans"+i + 1).append("<input type='radio' class='form-check-input' name='name' id='1'></input>");
      $("#1").attr("name",name);
      $("#1").attr("id",id1);
      $("<label>").html("1 " + que[i].AnswerJP1).addClass('form-check-label '+ label1).appendTo(".ans"+i + 1);
      //==============2================
      var id2 = "check" + (i + 1) + "2";
      var label2 = "text" +(i + 1) + "2";
      $("<div>").addClass('form-check ans'+i + 2).appendTo(".anskanji" +i);
      $(".ans"+i + 2).append("<input type='radio' class='form-check-input' name='name' id='2'></input>");
      $("#2").attr("name",name);
      $("#2").attr("id",id2);
      $("<label>").html("2 " + que[i].AnswerJP2).addClass('form-check-label '+ label2).appendTo(".ans"+i + 2);
      //==============3================
      var id3 = "check" + (i + 1) + "3";
      var label3 = "text" +(i + 1) + "3";
      $("<div>").addClass('form-check ans'+i + 3).appendTo(".anskanji" +i);
      $(".ans"+i + 3).append("<input type='radio' class='form-check-input' name='name' id='3'></input>");
      $("#3").attr("name",name);
      $("#3").attr("id",id3);
      $("<label>").html("3 " + que[i].AnswerJP3).addClass('form-check-label '+ label3).appendTo(".ans"+i + 3);
      //==============4================
      var id4 = "check" + (i + 1) + "4";
      var label4 = "text" +(i + 1) + "4";
      $("<div>").addClass('form-check ans'+i + 4).appendTo(".anskanji" +i);
      $(".ans"+i + 4).append("<input type='radio' class='form-check-input' name='name' id='4'></input>");
      $("#4").attr("name",name);
      $("#4").attr("id",id4);
      $("<label>").html("4 " + que[i].AnswerJP4).addClass('form-check-label '+ label4).appendTo(".ans"+i + 4);      
    }
    // $(".body-kanji").append('<button type="button" class="btn btn-info btn-submit">Kết quả</button>');
    // $(".body-kanji").append('<button type="button" class="btn btn-info btn-reset">Làm lại</button>');
    $(".btn-submit").attr("disabled", false);
    $(".btn-reset").attr("disabled", false);
  })
});
