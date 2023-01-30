import EditIcon from "@mui/icons-material/Edit";
import KanbanTaskCardPerson from "../KanbanTaskCardPerson/KanbanTaskCardPerson";
import {Priority, TaskPersonData} from "../../../utility/models";

interface KanbanTaskCardContentProps {
    data : {
        id: string,
        title: string,
        date: string,
        description: string,
        priority: Priority,
        creator: TaskPersonData,
        assigned: TaskPersonData,
    },
    ref: (element: (HTMLElement | null)) => void,
}
const KanbanTaskCardContent = (props:KanbanTaskCardContentProps) => {
    const {id, title, assigned, creator, description, date, priority} = props.data;

    return (
        <div className='kanban-task' >
            <EditIcon className='kanban-task_edit'/>
            <div className='kanban-task_item'>
                <h4>Title</h4>
                <p className='kanban-task_item-title'>{title}</p>
            </div>
            <div className='kanban-task_item'>
                <h4>Created On</h4>
                <p>{date}</p>
            </div>
            <div className='kanban-task_item kanban-task_item-description'>
                <h4>Description</h4>
                <p>{description}.</p>
            </div>
            <div className='kanban-task_item'>
                <h4>Priority</h4>
                <p id='task-priority' style={{backgroundColor: `${priority.background}`, color: `${priority.color}`}}>{priority.text}</p>
            </div>
            <div className='kanban-task_item'>
                <h4>Creator</h4>
                <KanbanTaskCardPerson person={creator}/>
            </div>
            <div className='kanban-task_item'>
                <h4>Assigned</h4>
                <KanbanTaskCardPerson person={assigned}/>
            </div>
        </div>
    )
}

export default KanbanTaskCardContent;