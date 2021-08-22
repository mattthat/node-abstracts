# node-abstracts

Clone and then...

```bash
$ npm install
$ npm run test

> node-abstracts@1.0.1 test
> ./node_modules/mocha/bin/mocha --require @babel/register --reporter spec ./test/**/*.test.js

  Enumerated Types
    WeekdaysEnum
      ✔ should have 7 days, even including a day like Monday
    WorkflowItemStateEnum
      ✔ should have 4 states: QUEUED, ASSIGNED, ESCALATED, COMPLETED

  WorkflowIterators
    PlainWorkflowIterator
      ✔ should be able to iterate a plain workflow
      ✔ should be done when its done, with 0 remaining
      ✔ should not be able to iterate a plain workflow beyond lifecycle
    EscalationWorkflowIterator
      ✔ should be able to iterate an escalation workflow
      ✔ should be done when its done, with 0 remaining
      ✔ should not be able to iterate an escalation workflow beyond lifecycle


  8 passing (8ms)
```


