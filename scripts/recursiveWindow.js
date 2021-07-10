export default class RecursiveWindow {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    phase = 1;

    constructor() {}

    // returns true if done creating
    press() {
        if (this.isFinished) { return true; }

        if (this.phase == 1) {
            this.firstPress();
            return false;
        }

        if (this.phase == 2) {
            this.secondPress();
            return false;
        }
    }

    firstPress() {
        this.x = window.mouseX;
        this.y = window.mouseY;

        this.phase++;
    }

    secondPress() {

        const x2 = mouseX;
        const y2 = mouseY;

        this.width = Math.abs(x2 - this.x);
        this.height = Math.abs(y2 - this.y);

        this.x = Math.min(this.x, x2);
        this.y = Math.min(this.y, y2);

        this.phase++;
    }

    get isFinished() {
        return this.phase > 2;
    }


    async draw() {
        // stroke(color(0, 0, 0, 255));
        // fill(color(0, 0, 0, 0))
        // rect(this.x, this.y, this.width, this.height);

        window.loadPixels();
        let test = true;
        for (let x = 61; x < window.width; x++) {
            for (let y = 1; y < window.height - 1; y++) {
                const relativeX = Math.round(window.map(x, 0, window.width, this.x, this.x + this.width));
                const relativeY = Math.round(window.map(y, 0, window.height, this.y, this.y + this.height));

                var idx = (x + y * window.width) * 4
                var relIdx = (relativeX + relativeY * window.width) * 4

                test = test && window.pixels[idx] === 0 && window.pixels[idx + 1] === 0 && window.pixels[idx + 2] === 0;
                if (window.pixels[idx] === 0 && window.pixels[idx + 1] === 0 && window.pixels[idx + 2] === 0) {
                    window.pixels[relIdx] = window.pixels[idx];
                    window.pixels[relIdx + 1] = window.pixels[idx + 1];
                    window.pixels[relIdx + 2] = window.pixels[idx + 2];
                    window.pixels[relIdx + 3] = window.pixels[idx + 3];
                }
            }
        }

        console.log(test);

        window.updatePixels();
    }

}