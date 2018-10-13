import PlainWorkflowIterator from '../examples/PlainWorkflowIterator';
import EscalationWorkflowIterator from '../examples/EscalationWorkflowIterator';
import WorkflowItemStateEnum from '../examples/WorkflowItemStateEnum';
import { expect } from 'chai';

describe('WorkflowIterators', () => {
    describe('PlainWorkflowIterator', () => {
        it('should be able to iterate a plain workflow', () => {
            let workflow = new PlainWorkflowIterator();
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
        });
        it('should be done when its done, with 0 remaining', () => {
            let workflow = new PlainWorkflowIterator();
            expect(workflow.remaining).to.equal(3);
            expect(workflow.done).to.equal(false)
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.done).to.equal(true);
            expect(workflow.remaining).to.equal(0);
        });
        it('should not be able to iterate a plain workflow beyond lifecycle', () => {
            let workflow = new PlainWorkflowIterator();
            expect(workflow.remaining).to.equal(3);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.remaining).to.equal(2);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.remaining).to.equal(1);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.remaining).to.equal(0);
            expect(workflow.done).to.equal(true);
            workflow.next();
            expect(workflow.value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.remaining).to.equal(0);
            expect(workflow.done).to.equal(true);
        });
    });
    describe('EscalationWorkflowIterator', () => {
        it('should be able to iterate an escalation workflow', () => {
            let workflow = new EscalationWorkflowIterator();
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ESCALATED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
        });
        it('should be done when its done, with 0 remaining', () => {
            let workflow = new EscalationWorkflowIterator();
            expect(workflow.remaining).to.equal(5);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ESCALATED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.done).to.equal(true);
            expect(workflow.remaining).to.equal(0);
        });
        it('should not be able to iterate an escalation workflow beyond lifecycle', () => {
            let workflow = new EscalationWorkflowIterator();
            expect(workflow.remaining).to.equal(5);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.QUEUED);
            expect(workflow.remaining).to.equal(4);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.remaining).to.equal(3);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ESCALATED);
            expect(workflow.remaining).to.equal(2);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.ASSIGNED);
            expect(workflow.remaining).to.equal(1);
            expect(workflow.done).to.equal(false);
            expect(workflow.next().value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.remaining).to.equal(0);
            expect(workflow.done).to.equal(true);
            workflow.next();
            expect(workflow.value).to.deep.equal(WorkflowItemStateEnum.COMPLETED);
            expect(workflow.remaining).to.equal(0);
            expect(workflow.done).to.equal(true);
        });
    });
});
