

class Quad {

    constructor(top_left,bot_right)
    {
        let center = Vec2.mean(bot_right, top_left);
        this.vertices = [
            center,                                 // CENTER
            top_left,                               // TOP LEFT
            new Vec2( center.x ,top_left.y ),       // TOP
            new Vec2(bot_right.x,top_left.y),       // TOP RIGHT
            new Vec2( bot_right.x, center.y ),      // RIGHT
            bot_right,                              // BOTTOM RIGHT
            new Vec2( center.x ,bot_right.y ),      // BOTTOM
            new Vec2(top_left.x,bot_right.y),       // BOTTOM LEFT
            new Vec2( top_left.x, center.y )        // LEFT
        ];

        this.enabled = [true,true,false,true,false,true,false,true,false];

        this.quadrants = [];

        // this.top_left = top_left;
        // this.bot_right = bot_right;
        // this.bot_left = new Vec2(top_left.x,bot_right.y);
        // this.top_right = new Vec2(bot_right.x,top_left.y);
        // this.center = Vec2.mean(bot_right, top_left);

        // this.top = new Vec2( this.center.x ,top_left.y );
        // this.bot = new Vec2( this.center.x ,bot_right.y );
        // this.left = new Vec2( top_left.x, this.center.y );
        // this.right = new Vec2( bot_right.x, this.center.y );
    }

    size()
    {
        return this.bot_right.sub(this.top_left).x;
    }

    contain()
    {
        let p = Handler.mousePos;
        if(p.x > this.vertices[1].x && p.x < this.vertices[5].x){
            if(p.y > this.vertices[1].y && p.y < this.vertices[5].y)
            {
                return true;
            }
        }
        return false;
    }

}