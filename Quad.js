

class Quad {

	constructor(tl, br, size, type, parent) {
		let center = Vec2.mean(br, tl);
		this.vertices = [
			center,						// 0 - CENTER
			tl,							// 1 - TOP LEFT
			new Vec2(center.x, tl.y),	// 2 - TOP
			new Vec2(br.x, tl.y),		// 3 - TOP RIGHT
			new Vec2(br.x, center.y),	// 4 - RIGHT
			br,							// 5 - BOTTOM RIGHT
			new Vec2(center.x, br.y),	// 6 - BOTTOM
			new Vec2(tl.x, br.y),		// 7 - BOTTOM LEFT
			new Vec2(tl.x, center.y)	// 8 - LEFT
		];

		this.enabled = [true, true, false, true, false, true, false, true, false];

		this.quadrants = [];					// CHILDS    TL, TR, BL, BR

		this.neighbors = [null,null,null,null];	// NEIGHBORS T, B, L, R

		this.setNeighbors();

		this.size = size;

		this.type = type;

		this.parent = parent;

	}

	setNeighbors()
	{
		if(this.parent != null)
		{
			if(this.type == 'br')
			{
				if(this.parent.neighbors[1]!=null)
				{
					this.neighbors[1] = this.parent.neighbors[1].quadrants[1];
					this.neighbors[3] = this.parent.neighbors[3].quadrants[2];
				}
				this.neighbors[0] = this.parent.quadrants[1];
				this.neighbors[2] = this.parent.quadrants[2];
			}
			if(this.type == 'bl')
			{
				if(this.parent.neighbors[1]!=null)
				{
					this.neighbors[1] = this.parent.neighbors[1].quadrants[0];
					this.neighbors[2] = this.parent.neighbors[2].quadrants[3];
				}
				this.neighbors[0] = this.parent.quadrants[0];
				this.neighbors[3] = this.parent.quadrants[3];
			}
			if(this.type == 'tr')
			{
				if(this.parent.neighbors[0]!=null)
				{
					this.neighbors[0] = this.parent.neighbors[0].quadrants[3];
					this.neighbors[3] = this.parent.neighbors[3].quadrants[0];
				}
				this.neighbors[1] = this.parent.quadrants[3];
				this.neighbors[2] = this.parent.quadrants[0];
			}
			if(this.type == 'tl')
			{
				if(this.parent.neighbors[0]!=null)
				{
					this.neighbors[0] = this.parent.neighbors[0].quadrants[2];
					this.neighbors[2] = this.parent.neighbors[2].quadrants[1];
				}
				this.neighbors[1] = this.parent.quadrants[2];
				this.neighbors[3] = this.parent.quadrants[1];
			}
		}
	}

	contain(p) 
	{
		if (p.x >= this.vertices[1].x && p.x <= this.vertices[5].x) {
			if (p.y >= this.vertices[1].y && p.y <= this.vertices[5].y) {
				return true;
			}
		}
		return false;
	}

	subdivide()
	{
		this.quadrants.push( new Quad(this.vertices[1], this.vertices[0], this.size/2, 'tl', this) );
		this.quadrants.push( new Quad(this.vertices[2], this.vertices[4], this.size/2, 'tr', this) );
		this.quadrants.push( new Quad(this.vertices[8], this.vertices[6], this.size/2, 'bl', this) );
		this.quadrants.push( new Quad(this.vertices[0], this.vertices[5], this.size/2, 'br', this) );
	}



}