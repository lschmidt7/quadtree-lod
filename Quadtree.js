


class Quadtree {

    constructor(quad)
    {
        this.root = quad;
    }

    search(quad) {
        let p = Handler.mousePos;
        if(quad.contain(p))
        {
            quad.subdivide(p);
            this.search(quad.quadrants[0]);
            this.search(quad.quadrants[1]);
            this.search(quad.quadrants[2]);
            this.search(quad.quadrants[3]);
        }
        
    }

}