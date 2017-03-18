function main(stage){
	//===================================
	//STAGE 1
	//===================================
	if(stage == 1){
		setscreen(200, 200);

		drawfillbox(100, 100, 200, 200, red);

		mouseevent(function(){
			//Requirements of the mouse to go to stage 2
			if (mouse.down && mouse.x >= 100 && mouse.y >= 100 && mouse.x <= 200 && mouse.y <= 200){
				return true;
			}
			else{
				return false;
			}
		});
	}

	//===================================
	//STAGE 2
	//===================================
	else if(stage == 2){
		cls();
		drawoval(50, 50, 50, 50, blue);//    Draw

		mouseevent(function(){
			//Requirements of the mouse to go to stage 3
			if (Math.sqrt(Math.pow(mouse.x - 50, 2) + Math.pow(mouse.x - 50 , 2)) <= 50 && mouse.down){
				//Pythagorean theorem to check if the mouse coordinates are within the radius of the circle
				return true;
			}
			else{
				return false;
			}
		});
	}

	//===================================
	//STAGE 3
	//===================================
	else if(stage == 3){
		//          Filename   x  y  width  height
		setscreen(200, 200);
		drawimage("game.jpg", 0, 0, 100, 100);
		drawimage("game.jpg", 50, 50, 150, 150);
		drawimage("game.jpg", 100, 100, 200, 200);
	}
}
