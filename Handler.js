

class Handler {

	static mousePos;

	static init() {
		Handler.mousePos = new Vec2(0, 0);
	}

	// set mousePos each frame
	static setMousePos(event) {
		Handler.mousePos = new Vec2(event.clientX, event.clientY);
	}

}