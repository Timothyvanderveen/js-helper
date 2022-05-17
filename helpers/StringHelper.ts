import {Helper} from "./Helper";

export class StringHelper extends Helper {
    extendPrototypes() {
        String.prototype.forEachChar = function (callback) {
            [...String(this)].forEach(callback);
        };

        String.prototype.canBeLongVowel = function () {
            if (this.length > 1) return false;
            return ["a", "e", "o", "u"].indexOf(this.toLowerCase()) !== -1;
        };
    }

    extendConstructors() {
        String.randomChar = function () {
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            return alphabet[Math.floor(Math.random() * alphabet.length)];
        };
    }
}

declare global {
    interface StringConstructor {
        randomChar(): string;
    }

    interface String {
        canBeLongVowel(): boolean;

        forEachChar(callback: (value: any, index: number, array: any[]) => void);
    }
}