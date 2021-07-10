import GUI from "./scripts/gui/gui.js";
import GUIButton from "./scripts/gui/GUIButton.js";
import { GUIToolButton } from "./scripts/gui/GUIToolButton.js";
import RecursiveWindow from "./scripts/recursiveWindow.js";
import Tool from "./scripts/tools/tool.js";
import ToolSet from "./scripts/tools/toolSet.js";
import { lastElm } from "./scripts/utils.js";

let initialRecursionTimes = 10;

let redrawRecursion = initialRecursionTimes;

const recursiveWindows = [];

const gui = new GUI([
    new GUIToolButton(1, 10, 10, 40, 40, "/assets/brush.png"),
    new GUIToolButton(2, 10, 60, 40, 40, "/assets/rect.png"),
    new GUIToolButton(3, 10, 110, 40, 40, "/assets/rec.jpeg"),
]);

const toolset = new ToolSet([
    new Tool(1, "test", false, () => {}, () => ellipse(mouseX, mouseY, 20, 20)),
    new Tool(2, "test", false, () => {}, () => rect(mouseX - 25, mouseY - 25, 50, 50)),
    new Tool(3, "RecursiveWindowMaker", true, () => {}, () => {
        const lastRecursiveWindow = lastElm(recursiveWindows);
        if (!lastRecursiveWindow || lastRecursiveWindow.isFinished) {
            console.log(lastRecursiveWindow);
            const newRecursiveWindow = new RecursiveWindow();
            recursiveWindows.push(newRecursiveWindow);
            newRecursiveWindow.press();
        } else {
            lastRecursiveWindow.press();
        }
    })
]);

window.setup = () => {
    createCanvas(1080, 640);

    gui.setup();
    toolset.setup();
    toolset.selectById = 1;
    pixelDensity(1);
    background(color(255, 255, 255));
};

window.draw = () => {
    drawingZone();
    // background(color(255, 255, 255));
    fill(color(0, 0, 0));
    stroke(color(0, 0, 0, 0));

    if (redrawRecursion >= 1) {
        recursiveWindows.filter(w => w.isFinished).forEach(recursiveWindow => recursiveWindow.draw());
        redrawRecursion--;
        if (redrawRecursion == 0) {
            console.log('finished recursion');
        }
    }


    // check for pressing mouse and draw whatever.
    if (mouseIsPressed && mouseButton === LEFT) {
        // if colliding with gui stop executing mouse press
        if (!gui.isColliding) {
            toolset.draw();
            redrawRecursion = initialRecursionTimes;
        }
    }


    // always draw gui on top.
    gui.draw();
};

window.mouseClicked = () => {

    if (gui.isColliding) {
        console.log(gui.mouseCollidingElements[0].toolId);
        toolset.selectById = gui.mouseCollidingElements[0].toolId;
        console.log(toolset.selectedTool);
    } else {
        if (mouseButton === LEFT) {
            toolset.mouseClicked();
            redrawRecursion = initialRecursionTimes;
        }
    }
}

window.drawingZone = () => {
    fill(color(0, 0, 0, 0));
    stroke(color(0, 0, 0));
    rect(60, 0, window.width, window.height);
}