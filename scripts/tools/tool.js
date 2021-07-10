export default class Tool {
    id;
    name;
    byClick;
    setup;
    draw;
    constructor(id = 0, name = "no name given", byClick = false, setup = () => {}, draw = () => {}) {
        this.id = id;
        this.name = name;
        this.byClick = byClick;
        this.setup = setup;
        this.draw = draw;
    }
}