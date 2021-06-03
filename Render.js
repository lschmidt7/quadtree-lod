

class Render {

	constructor(canvas) {
		this.canvas = document.getElementById(canvas);
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ctx = this.canvas.getContext('2d');
	}

	draw(quad) {
		let vertices = []
		// DRAW VERTICES
		for (let i = 0; i < quad.vertices.length; i++) {
			if (quad.enabled[i]) {
				this.vertex(quad.vertices[i]);
				vertices.push(quad.vertices[i])
			}
		}
		// DRAW TRIANGLES
		for (let i = 1; i < vertices.length; i++) {
			let prox = i+1
			if(prox>vertices.length-1){
				prox = 1;
			}
			this.edge(vertices[0],vertices[i]);
			this.edge(vertices[i],vertices[prox]);
			this.edge(vertices[prox],vertices[0]);
		}
	}

	edge(p1,p2)
	{
		this.ctx.beginPath();
		this.ctx.fillStyle = "#FF7F50";
		this.ctx.moveTo(p1.x,p1.y);
		this.ctx.lineTo(p2.x,p2.y);
		this.ctx.stroke();
	}

	vertex(v) {
		this.ctx.beginPath();
		this.ctx.fillStyle = "#8b0000";
		this.ctx.arc(v.x, v.y, 3, 0, 2 * Math.PI);
		this.ctx.fill();
	}

}