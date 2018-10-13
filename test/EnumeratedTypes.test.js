import WeekdaysEnum from '../examples/WeekdaysEnum';
import { expect } from 'chai';
import WorkflowItemStateEnum from "../examples/WorkflowItemStateEnum";

describe('Enumerated Types', () => {
    describe('WeekdaysEnum', () => {
        it('should have 7 days, even including a day like Monday', () => {
            expect(Object.keys(WeekdaysEnum).length).to.equal(7);
            expect(WeekdaysEnum.MONDAY).to.deep.equal({enum: 'MONDAY'});
        });
    });
    describe('WorkflowItemStateEnum', () => {
        it('should have 4 states: QUEUED, ASSIGNED, ESCALATED, COMPLETED', () => {
            expect(Object.keys(WorkflowItemStateEnum).length).to.equal(4);
            expect(WorkflowItemStateEnum.QUEUED).to.deep.equal({enum: 'QUEUED'});
            expect(WorkflowItemStateEnum.ASSIGNED).to.deep.equal({enum: 'ASSIGNED'});
            expect(WorkflowItemStateEnum.ESCALATED).to.deep.equal({enum: 'ESCALATED'});
            expect(WorkflowItemStateEnum.COMPLETED).to.deep.equal({enum: 'COMPLETED'});
        });
    });
});
