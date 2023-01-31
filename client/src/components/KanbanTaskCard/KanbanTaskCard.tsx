import './kanbanTaskCard.scss';
import {Priority, TaskPersonData} from "../../utility/models";
import {Draggable} from "react-beautiful-dnd";
import EditIcon from "@mui/icons-material/Edit";
import KanbanTaskCardPerson from "./KanbanTaskCardPerson/KanbanTaskCardPerson";
import React, {useState} from 'react';
import EditTaskModal from "../modals/EditTaskModal/EditTaskModal";

interface KanbanTaskCardProps {
    data : {
        id: string,
        title: string,
        description: string,
        priority: Priority,
        assigned: TaskPersonData,
    },
    index: number
}
const KanbanTaskCard = (props: KanbanTaskCardProps) => {
    const {index} = props;
    const [editTask, setEditTask] = useState(false);

    const {id, title, assigned, description, priority} = props.data;
    // style={{border: `1px solid ${priority.color}`}} - for borders ??
    return (
        <>
            <Draggable draggableId={id} index={index}>
                {(provided, snapshot) => (
                    <div className='kanban-task'
                         ref={provided.innerRef}
                         data-dragging={snapshot.isDragging}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <EditIcon className='kanban-task_edit' onClick={() => setEditTask(true)}/>
                        <span
                            style={{backgroundColor: `${priority.color}`}}
                            className='kanban-task_item-priority'></span>
                        <div className='kanban-task_item'>
                            {/*<h4>Title</h4>*/}
                            <p className='kanban-task_item-title'>{title}</p>
                        </div>
                        <div className='kanban-task_item kanban-task_item-description'>
                            {/*<h4>Description</h4>*/}
                            <p>{description}.</p>
                        </div>
                        <div className='kanban-task_item'>
                            {/*<h4>Assigned</h4>*/}
                            <KanbanTaskCardPerson person={assigned}/>
                        </div>
                    </div>
                )}
            </Draggable>
            <EditTaskModal editTask={editTask} setEditTask={setEditTask} data={props.data}/>
        </>
    )
}

export default KanbanTaskCard;