

class Quad {

    constructor(top_left,bot_right)
    {
        this.vertices = [
            Vec2.mean(bot_right, top_left),
            top_left,
            new Vec2( this.center.x ,top_left.y ),
            new Vec2(bot_right.x,top_left.y),
            new Vec2( bot_right.x, this.center.y ),
            bot_right,
            new Vec2( this.center.x ,bot_right.y ),
            new Vec2(top_left.x,bot_right.y),
            new Vec2( top_left.x, this.center.y )
        ]

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

    contain(p)
    {
        if(p.x > this.top_left.x && p.x < this.bot_right.x){
            if(p.y > this.top_left.y && p.y < this.bot_right.y)
            {
                return true;
            }
        }
        return false;
    }

}