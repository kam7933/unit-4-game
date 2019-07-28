let wins = 0;
let losses = 0;

let addition = 0;

let total = Math.floor((Math.random()* 100) + 19);

let huey = Math.floor((Math.random()* 12) + 1);
let riley = Math.floor((Math.random()* 12) + 1);
let grand = Math.floor((Math.random()* 12) + 1);
let pimp = Math.floor((Math.random()* 12) + 1);
let audio = new Audio('https://files.slack.com/files-pri/T0J8XK2Q3-F0NHG3FDZ/download/raven.mp3');


let updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

let restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
   
    updateAddition();
}
let logic = function (){
	if (addition == total) {
		wins = wins + 1;
		
		audio.play();
		restart();
	}else if(addition > total){
		losses = losses + 1;
		
		audio.play();
		restart();
	}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);


$(document).ready(function(){
	$('#huey').click(function(){
		addition = addition + red;
		logic();
	})
	$('#riley').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#grand').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#pimp').click(function(){
		addition = addition + green;
		logic();
	})
});







