


class Quadtree {

    constructor(render)
    {
        this.root = new Quad(new Vec2(50,50), new Vec2(500,500),450,'tl',null);;
        this.render = render;
    }

    search(quad) {
        let p = Handler.mousePos;
        if(quad.size <= 20 || !quad.contain(p))
        {
            return;
        }
        else
        {
            quad.subdivide();
            this.search(quad.quadrants[0]);
            this.search(quad.quadrants[1]);
            this.search(quad.quadrants[2]);
            this.search(quad.quadrants[3]);
        }
    }

}