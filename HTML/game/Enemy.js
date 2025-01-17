export default class Enemy{
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.width = 45;
        this.height = 40;

        this.image = new Image();
        this.image.src = `img/enemy${imageNumber}.png`;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(xVelocity, yVelocity) {
        this.x += xVelocity;
        this.y += yVelocity;
    }
} 