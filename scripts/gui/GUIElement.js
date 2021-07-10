export default class GUIElement {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get isColliding() {
        return this.colliding(window.mouseX, window.mouseY);
    }

    get center() {
        return { x: this.x + (this.width / 2), y: this.y + (this.height / 2) }
    }

    colliding(mouseX, mouseY) {
        if (!mouseX || !mouseY) { return; }

        return this.x <= mouseX && this.x + this.width >= mouseX &&
            this.y <= mouseY && this.y + this.height >= mouseY;
    }
}