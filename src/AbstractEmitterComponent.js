import EventEmitter from 'events';
import AbstractBaseComponent from './AbstractBaseComponent';

export default class AbstractEmitterComponent extends AbstractBaseComponent {
    get emitter() {
        return this._emitter;
    }
    constructor() {
        super();
        this._emitter = new EventEmitter();
    }
    on(event, reaction) {
        this.emitter.on(event, reaction);
    }
    off(event, reaction) {
        this.emitter.off(event, reaction);
    }
    once(event, reaction) {
        this.emitter.once(event, reaction);
    }
    emit(event, parameters) {
        this.emitter.emit(event, parameters);
    }
}
