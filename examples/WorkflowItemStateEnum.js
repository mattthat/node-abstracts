import AbstractBaseEnum from "../src/AbstractBaseEnum";

export default class WorkflowItemStateEnum
    extends AbstractBaseEnum {}

WorkflowItemStateEnum.QUEUED =
    new WorkflowItemStateEnum('QUEUED');
WorkflowItemStateEnum.ASSIGNED =
    new WorkflowItemStateEnum('ASSIGNED');
WorkflowItemStateEnum.ESCALATED =
    new WorkflowItemStateEnum('ESCALATED');
WorkflowItemStateEnum.COMPLETED =
    new WorkflowItemStateEnum('COMPLETED');
