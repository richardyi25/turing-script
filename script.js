function main(stage){
	//===================================
	//STAGE 1
	//===================================
	if(stage == 1){
		setscreen(200, 200);

		drawfillbox(100, 100, 200, 200, red);

		mouseevent(function(){
			//Requirements of the mouse to go to stage 2
			return (mouse.down && mouse.x >= 100 && mouse.y >= 100 && mouse.x <= 200 && mouse.y <= 200);
		});
	}

	//===================================
	//STAGE 2
	//===================================
	else if(stage == 2){
		drawfillbox(100, 100, 200, 200, white);// Erase
		drawfillbox(0, 0, 100, 100, blue);//    Draw

		mouseevent(function(){
			//Requirements of the mouse to go to stage 3
			return (mouse.down && mouse.x >= 0 && mouse.y >= 0 && mouse.x <= 100 && mouse.y <= 100);
		});
	}

	//===================================
	//STAGE 3
	//===================================
	else if(stage == 3){
		//          Filename   x  y  width  height
		playvideo("video.mp4", 0, 0, 200, 200);
	}

	//===================================
	//STAGE 4
	//===================================
	else if(stage == 4){
		drawfillbox(0, 0, 200, 200, white);
		drawfillbox(50, 50, 150, 150, green);
	}
}
