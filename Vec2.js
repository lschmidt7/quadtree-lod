


class Vec2 {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	static mean(v1, v2) {
		return new Vec2((v1.x + v2.x) / 2, (v1.y + v2.y) / 2);
	}

	static distance(p1,p2) {
		return Math.sqrt( Math.pow(p1.x - p2.x,2) + Math.pow(p1.y - p2.y,2) );
	}
}