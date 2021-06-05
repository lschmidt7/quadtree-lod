

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

		this.quadrants = [];			// CHILDS    0 - TL, 1 - TR, 2 - BL, 3 - BR

		this.neighbors = [
			null,						// 0 - TOP LEFT
			null,						// 1 - TOP
			null,						// 2 - TOP RIGHT
			null,						// 3 - LEFT
			null,						// 4 - RIGHT
			null,						// 5 - BOTTOM LEFT
			null,						// 6 - BOTTOM
			null,						// 7 - BOTTOM RIGHT
		];

		this.size = size;

		this.type = type;

		this.parent = parent;

		this.setNeighbors();

	}

	setNeighbors()
	{	
		// NEIGHBORS
		// 0 - TOP LEFT
		// 1 - TOP
		// 2 - TOP RIGHT
		// 3 - LEFT
		// 4 - RIGHT
		// 5 - BOTTOM LEFT
		// 6 - BOTTOM
		// 7 - BOTTOM RIGHT
		// QUADRANTS    
		// 0 - TL, 1 - TR, 2 - BL, 3 - BR
		if(this.parent != null)
		{
			if(this.type == 'tr')
			{
				this.neighbors[0] = this.parent.neighbors[1].quadrants[2];
				this.neighbors[1] = this.parent.neighbors[1].quadrants[3];
				this.neighbors[2] = this.parent.neighbors[2].quadrants[5];

				this.neighbors[3] = this.parent.quadrants[0];
				this.neighbors[4] = this.parent.neighbors[4].quadrants[0];

				this.neighbors[5] = 
				this.neighbors[6] = 
				this.neighbors[7] = 
			}
			if(this.type == 'tl')
			{
				this.neighbors[0] = this.parent.neighbors[0].quadrants[3];
				this.neighbors[1] = this.parent.neighbors[1].quadrants[2];
				this.neighbors[2] = this.parent.neighbors[1].quadrants[3];

				this.neighbors[3] = this.parent.neighbors[3].quadrants[1];
				this.neighbors[4] = this.parent.quadrants[1];

				this.neighbors[5] = this.parent.neighbors[3].quadrants[3];
				this.neighbors[6] = this.parent.quadrants[2];
				this.neighbors[7] = this.parent.quadrants[3];
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
		if(this.neighbors[0] != null)
			this.neighbors[0].enabled[6] = true;
		if(this.neighbors[1] != null)
			this.neighbors[1].enabled[2] = true;	
		if(this.neighbors[2] != null)
			this.neighbors[2].enabled[4] = true;
		if(this.neighbors[3] != null)
			this.neighbors[3].enabled[8] = true;
		this.quadrants.push( new Quad(this.vertices[1], this.vertices[0], this.size/2, 'tl', this) );
		this.quadrants.push( new Quad(this.vertices[2], this.vertices[4], this.size/2, 'tr', this) );
		this.quadrants.push( new Quad(this.vertices[8], this.vertices[6], this.size/2, 'bl', this) );
		this.quadrants.push( new Quad(this.vertices[0], this.vertices[5], this.size/2, 'br', this) );
	}



}