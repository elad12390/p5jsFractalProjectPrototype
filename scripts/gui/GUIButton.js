import GUIElement from "./GUIElement.js";

export default class GUIButton extends GUIElement {
    iconString;
    icon;

    constructor(x, y, width, height, iconString) {
        super(x, y, width, height);
        this.iconString = iconString;
    }

    setup() {
        this.icon = window.loadImage(this.iconString, () => console.log("success"), () => console.log("fail"));
        console.log(this);
    }

    draw(xOffset = 0, yOffset = 0) {
        window.image(this.icon, this.x + xOffset, this.y + yOffset, this.width, this.height);
    }
}