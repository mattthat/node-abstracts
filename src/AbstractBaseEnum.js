export default class AbstractBaseEnum {
    constructor(construct) {
        this.enum = construct;
    }
    toString() {
        return `${this.enum}`;
    }
}
