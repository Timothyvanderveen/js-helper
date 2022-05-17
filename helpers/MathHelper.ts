import {Helper} from "./Helper";

export class MathHelper extends Helper{
    extendConstructors() {
        Math.randomMinMax = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }
}

declare global {
    interface Math {
        randomMinMax(min: number, max: number): number;
    }
}