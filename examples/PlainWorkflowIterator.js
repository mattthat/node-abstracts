import AbstractArrayIterator from "../src/AbstractArrayIterator";
import WorkflowItemStateEnum from "./WorkflowItemStateEnum";

export default class PlainWorkflowIterator extends AbstractArrayIterator {
    onConfigure() {
        this.array = [WorkflowItemStateEnum.QUEUED,
            WorkflowItemStateEnum.ASSIGNED,
            WorkflowItemStateEnum.COMPLETED];
    }
    next() {
        // call on the method that performs
        // the crucial effort to our workflow
        this.performWork( () => {
            // then iterate
            super.next();
        });
        return this;
    }
    performWork(callback) {
        // ... implementation
        callback();
    }
}
