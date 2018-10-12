import WeekdaysEnum from '../examples/WeekdaysEnum';
import { expect } from 'chai';

describe('Enumerated Types', () => {
    describe('WeekdaysEnum', () => {
        it('should have 7 days, even including a day like Monday', () => {
            expect(Object.keys(WeekdaysEnum).length).to.equal(7);
            expect(WeekdaysEnum.MONDAY).to.deep.equal({enum: 'MONDAY'});
        });
    });
});
