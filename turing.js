var canvas, ctx, c, maxx, maxy, video, videoX, videoY, videoW, videoH;
var black = '#000', white = '#FFF', red = '#F00', orange = '#F90', yellow = '#FF0', green = '#3C3', blue = '#03C', purple = '#C0C';
var current = 1;

var box = {
	x1: 0,
	x2: 0,
	y1: 0,
	y2: 0
}

var mouse = {
	x: 0,
	y: 0,
	down: false
}

$(document).ready(function(){
	canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d');

	setscreen(640, 400);

	$('#canvas').mousemove(function(evt){
		var rect = canvas.getBoundingClientRect();
		mouse.x = evt.clientX - rect.left;
		mouse.y = maxy - (evt.clientY - rect.top);
		mouse.down = evt.which;

		$('#main').text(mouse.x + " " + mouse.y + " " + mouse.down); //DEBUG
	});

	$('#canvas').mousedown(function(e){
		mouse.down = e.which;
		$('#main').text(mouse.x + " " + mouse.y + " " + mouse.down); //DEBUG
	});


	$('#canvas').mouseup(function(e){
		mouse.down = e.which;
		$('#main').text(mouse.x + " " + mouse.y + " " + mouse.down); //DEBUG
	});
});

function setscreen(x, y){
	canvas.width = x;
	canvas.height = y;
	maxx = x;
	maxy = y;
}

function drawfillbox(x1, y1, x2, y2, c){
	minX = Math.min(x1, x2);
	maxX = Math.max(x1, x2);
	minY = Math.min(y1, y2);
	maxY = Math.max(y1, y2);
	dx = Math.abs(x2 - x1);
	dy = Math.abs(y2 - y1);
	
	$('#canvas').drawRect({
		x: minX,
		y: maxy - minY - dy,
		width: dx,
		height: dy,
		fillStyle: c,
		fromCenter: false
	});
}

mouseevent = function(condition){
	if(condition())
		main(++current);
	else
		window.setTimeout(function(){
			mouseevent(condition);
		}, 50);
}

function loop() {
	if(video.ended){
		window.setTimeout(function(){
			main(++current);
			return;
		}, 0);
	}
	else{
		ctx.drawImage(video, videoX, videoY, videoW, videoH);
		setTimeout(loop, 1000 / 30);
	}
};

function playvideo(name, x, y, width, height){
	video = $('video[src="' + name + '"]')[0];
	video.play();
	videoX = x;
	videoY = maxy - y - height;
	videoW = width;
	videoH = height;
	loop();
}
