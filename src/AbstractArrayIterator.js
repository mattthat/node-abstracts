import AbstractBaseIterator from "./AbstractBaseIterator";

export default class AbstractArrayIterator extends AbstractBaseIterator {
    constructor(array) {
        super();
        this.onConfigure(array);
        this.onConstruction();
    }
    onConfigure(array) {
        this.array = array || [];
    }
    onConstruction() {
        this.iterator = this.array[Symbol.iterator]();
        this.remaining = this.array.length;
        this.value = null;
    }
    get done() {
        if (this.remaining === 0) {
            return true;
        } else {
            return false;
        }
    }
    next() {
        if (this.remaining > 0) {
            const element = this.iterator.next();
            if (element.value) this.value = element.value;
            this.remaining--;
        }
        return this;
    }
}
