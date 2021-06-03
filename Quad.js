

class Quad {

	constructor(top_left, bot_right,size) {
		let center = Vec2.mean(bot_right, top_left);
		this.vertices = [
			center,								// 0 - CENTER
			top_left,							// 1 - TOP LEFT
			new Vec2(center.x, top_left.y),		// 2 - TOP
			new Vec2(bot_right.x, top_left.y),	// 3 - TOP RIGHT
			new Vec2(bot_right.x, center.y),	// 4 - RIGHT
			bot_right,							// 5 - BOTTOM RIGHT
			new Vec2(center.x, bot_right.y),	// 6 - BOTTOM
			new Vec2(top_left.x, bot_right.y),	// 7 - BOTTOM LEFT
			new Vec2(top_left.x, center.y)		// 8 - LEFT
		];

		this.enabled = [true, true, false, true, false, true, false, true, false];

		this.quadrants = [];

		this.size = size;

	}

	contain(p) {
		if (p.x >= this.vertices[1].x && p.x <= this.vertices[5].x) {
			if (p.y >= this.vertices[1].y && p.y <= this.vertices[5].y) {
				return true;
			}
		}
		return false;
	}

	subdivide()
	{
		this.quadrants.push( new Quad(this.vertices[1], this.vertices[0], this.size/2) );
		this.quadrants.push( new Quad(this.vertices[2], this.vertices[4], this.size/2) );
		this.quadrants.push( new Quad(this.vertices[8], this.vertices[6], this.size/2) );
		this.quadrants.push( new Quad(this.vertices[0], this.vertices[5], this.size/2) );
	}



}