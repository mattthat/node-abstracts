import PlainWorkflowIterator from './PlainWorkflowIterator';
import AbstractEmitterComponent from'"../src/AbstractEmitterComponent';
export default class PlainWorkflowIterationEmitter extends AbstractEmitterComponent {
    constructor() {
        super();
        this.iterator = new PlainWorkflowIterator();
    }
    next() {
        if (this.iterator.value) {
            this.emit(`workflow:${this.iterator.value}`);
        }
        this.iterator.next();
    }
    performWork(callback) {
        this.iterator.performWork(() => {
            callback();
            this.emit('performed');
        });
    }
}