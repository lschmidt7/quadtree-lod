


class Quadtree {

    constructor(render)
    {
        this.root = new Quad(new Vec2(0,0), new Vec2(600,600),600,'tr',null);
        this.render = render;
    }

    search(quad) {
        let p = Handler.mousePos;
        if(quad.size <= 20 || !quad.inRange(p))
        {
            return;
        }
        else
        {
            for (let i = 0; i < quad.neighbors.length; i++) {
                if(quad.neighbors[i]!=null){
                    quad.neighbors[i].subdivide();
                }
            }

            quad.subdivide();

            this.search(quad.quadrants[0]);
            this.search(quad.quadrants[1]);
            this.search(quad.quadrants[2]);
            this.search(quad.quadrants[3]);
        }
    }

    detail(quad){
        if(quad.leaf)
        {
            quad.setNeighbors();
            quad.toSew();
        }
        else
        {
            this.detail(quad.quadrants[0]);
            this.detail(quad.quadrants[1]);
            this.detail(quad.quadrants[2]);
            this.detail(quad.quadrants[3]);
        }
    }

}