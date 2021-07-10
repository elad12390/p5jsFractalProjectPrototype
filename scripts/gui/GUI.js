export default class GUI {
    elements = []
    constructor(elements) {
        this.elements = [...elements];
    }

    setup() {
        this.elements.forEach(element => element.setup());
    }

    async draw(xOffset = 0, yOffset = 0) {
        this.elements.forEach(element => element.draw(xOffset, yOffset));
    }

    get mouseCollidingElements() {
        const arr = this.elements.filter(element => element.isColliding);
        return arr.length > 0 ? arr : null;
    }

    get isColliding() {
        return this.elements.some(element => element.isColliding);
    }
}