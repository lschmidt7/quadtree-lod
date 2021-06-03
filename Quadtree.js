


class Quadtree {

    constructor(quad,render)
    {
        this.root = quad;
        this.render = render;
    }

    search(quad) {
        let p = Handler.mousePos;
        console.log(quad.size());
        if(quad.size() <= 20 || !quad.contain(p))
        {
            this.render.draw(quad);
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