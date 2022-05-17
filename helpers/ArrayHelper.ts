export class ArrayHelper implements Helper {
    extendPrototypes() {
        Array.prototype.shuffle = function () {
            let i = this.length
            let j;
            let temp;

            if (i === 0) return this;

            while (--i) {
                j = Math.floor(Math.random() * (i + 1));
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }

            return this;
        };

        Array.prototype.equals = function (array) {
            if (!array) return false;

            if (this.length !== array.length) return false;

            for (let i = 0, l = this.length; i < l; i++) {
                if (this[i] instanceof Array && array[i] instanceof Array) {
                    if (!this[i].equals(array[i])) return false;
                } else if (this[i] !== array[i]) {
                    return false;
                }
            }

            return true;
        };

        Array.range = (size, startAt = 0) => {
            return [...Array(size).keys()].map((i) => i + startAt);
        };
    }
}

declare global {
    interface Array<T> {
        shuffle(): Array<T>;
        equals(array): boolean;
    }

    interface ArrayConstructor {
        range(size: number, startAt: number): number[];
    }
}