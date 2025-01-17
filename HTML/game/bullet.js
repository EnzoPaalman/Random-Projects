export default class Bullet{
    constructor(canvas, x, y, velocity, bulletColor)
    {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;

        this.width = 5;
        this.height = 20;
    }
    
    draw(ctx){
        this.y -= this.velocity;
        ctx.fillstyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
    }

}