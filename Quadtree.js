


class Quadtree {

    constructor(render)
    {
        this.root = new Quad(new Vec2(0,0), new Vec2(500,500),500,'tr',null);
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
            return;
        }
        else
        {
            this.detail(quad.quadrants[0]);
            this.detail(quad.quadrants[1]);
            this.detail(quad.quadrants[2]);
            this.detail(quad.quadrants[3]);
        }
    }
    
    info(quad){
        let p = Handler.mousePos;
        if(quad.leaf)
        {
            if(quad.contain(p)){
                var st = ""
                for (let i = 0; i < quad.neighbors.length; i++) {
                    if(quad.neighbors[i]!=null)
                        this.render.drawColor(quad.neighbors[i]);
                }
                return;
            }
            return;
        }
        else
        {
            this.info(quad.quadrants[0]);
            this.info(quad.quadrants[1]);
            this.info(quad.quadrants[2]);
            this.info(quad.quadrants[3]);
        }
    }

    

}