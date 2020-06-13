$(document).ready(function(){
  $(".gramar-header").click(function(){
    if($(".gramar-body")[0].style.display == "none"){
      $(".gramar-body").show();
    }else{
      $(".gramar-body").hide();
    }
  });
});