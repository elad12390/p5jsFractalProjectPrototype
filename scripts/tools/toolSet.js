export default class ToolSet {
    tools = [];
    selectedTool = null;

    constructor(tools) {
        this.tools = [...tools];
    }

    get drawingTools() {
        return [...this.tools.filter(tool => !tool.byClick)];
    }

    get clickingTools() {
        return [...this.tools.filter(tool => tool.byClick)];
    }

    set selectById(id) {
        const found = this.tools.find(tool => tool.id === id);
        if (!found) { return; }

        this.selectedTool = found;
    }

    set selectByName(name) {
        const found = this.tools.find(tool => tool.name === name);
        if (!found) { return; }

        this.selectedTool = found;
    }

    setup() {
        this.tools.forEach(tool => tool.setup());
    }

    async useSelectedTool(byClick) {
        if (this.selectedTool.byClick === byClick) {
            this.selectedTool.draw();
        }
    }

    draw() {
        this.useSelectedTool(false);
    }

    mouseClicked() {
        this.useSelectedTool(true);
    }
}