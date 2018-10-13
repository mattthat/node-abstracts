import WorkflowItemStateEnum from "./WorkflowItemStateEnum";
import PlainWorkflowIterator from "./PlainWorkflowIterator";

export default class EscalationWorkflowIterator extends PlainWorkflowIterator {
    onConfigure() {
        this.array = [WorkflowItemStateEnum.QUEUED,
            WorkflowItemStateEnum.ASSIGNED,
            WorkflowItemStateEnum.ESCALATED,
            WorkflowItemStateEnum.ASSIGNED,
            WorkflowItemStateEnum.COMPLETED
        ];
    };
}
