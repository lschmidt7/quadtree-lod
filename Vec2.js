


class Vec2 {

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(v) {
		return new Vec2(v.x + this.x, v.y + this.y);
	}

	sub(v) {
		return new Vec2(this.x - v.x, this.y - v.y);
	}

	abs() {
		return new Vec2(Math.abs(this.x), Math.abs(this.y));
	}

	div_scalar() {
		return new Vec2(this.x / 2, this.y / 2);
	}

	static mean(v1, v2) {
		return new Vec2((v1.x + v2.x) / 2, (v1.y + v2.y) / 2);
	}

	static distance(v1, v2) {

	}

}