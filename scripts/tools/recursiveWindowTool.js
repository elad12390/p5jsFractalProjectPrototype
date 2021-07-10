import Tool from "./tool";

export class RecursiveWindowTool extends Tool {
    state = 0;
    constructor(id, name, byClick, setup, draw) {
        super(id, name, byClick, setup, draw)
    }

    draw() {
        const isFinished = this.recursiveWindow.press();
    }
}