var minutes = 24;
var breakMins = 5;
var isWorkTime = true;
var audio = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/41203/beep.mp3");

  $(document).ready(function () {
       $('#btn').click(function(){
        timerGo();
       });
       $('#breakMinus').click(function(){
       	if (breakMins > 1){
       		breakMins-=1;
          $('#breakMins').html(breakMins);
        }
       });
        $('#breakPlus').click(function(){
       		breakMins+=1;
          $('#breakMins').html(breakMins);
       });
        $('#workMinus').click(function(){
        	if (minutes > 1){
            minutes-=1;
            $('#workMins').html(minutes);
            $('#time').html(minutes + ":00");
          }
       		
       });
       $('#workPlus').click(function(){
       		minutes+=1;
          $('#workMins').html(minutes);
          $('#time').html(minutes + ":00");
       });
    });

function timerGo(){
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
	        audio.play();
        	if (isWorkTime == true){
              timer = 60*breakMins;
              isWorkTime == false;
              $('.background').removeClass('background-work').addClass('background-break');
            }
          else{
            timer = 60*workMins;
            isWorkTimer == true;
            $('.background').addClass('background-work').removeClass('background-break');
          }  
        }
    }, 1000);
}
jQuery(function ($) {
    var fiveMinutes = 60 * minutes,
        display = $('#time');
    startTimer(fiveMinutes, display);
});
};

