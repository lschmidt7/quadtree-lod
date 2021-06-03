

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
        this.vertex(quad.top_left);
        this.vertex(quad.top_right);
        this.vertex(quad.bot_left);
        this.vertex(quad.bot_right);
        this.vertex(quad.center);
    }

    vertex(v)
    {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#8b0000";
        this.ctx.arc(v.x, v.y, 3, 0, 2 * Math.PI);
        this.ctx.fill();
    }

}