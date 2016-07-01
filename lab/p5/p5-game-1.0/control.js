/**
 * Created by rain on 2/3/2016.
 */

$("#restart").hide();

setInterval(function(){
  if(endGame){
    $("#restart").show();
  } else {
    $("#restart").hide();
  }
}, 1000);

$("#restart").click(function(){
  gameInit();
});
