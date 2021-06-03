

class Render {

    constructor(canvas)
    {
        this.canvas = document.getElementById(canvas);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
    }

    draw(quad)
    {
        for (let i = 0; i < quad.vertices.length; i++) {
            if(quad.enabled[i])
            {
                this.vertex(quad.vertices[i]);
            }
        }
    }

    vertex(v)
    {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#8b0000";
        this.ctx.arc(v.x, v.y, 3, 0, 2 * Math.PI);
        this.ctx.fill();
    }

}