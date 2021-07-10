import GUIButton from "./GUIButton.js";
export class GUIToolButton extends GUIButton {
    toolId;
    constructor(toolId = 0, x, y, width, height, iconString) {
        super(x, y, width, height, iconString);
        this.toolId = toolId;
    }
}