export class MathHelper implements Helper {
    extendPrototypes() {
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