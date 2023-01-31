import './kanbancolumn.scss';
import AddIcon from '@mui/icons-material/Add';
import {ColumnColors} from "../../utility/types";
import {Button} from "@mui/material";
import {TaskData} from "../../utility/models";
import {Draggable, Droppable} from "react-beautiful-dnd";
import KanbanTaskCard from "../KanbanTaskCard/KanbanTaskCard";
import React, {useState} from "react";
import CreateTaskModal from "../modals/CreateTaskModal/CreateTaskModal";

interface KanbanColumnProps {
    color: ColumnColors,
    title: string,
    tasks: TaskData[],
    id: string,
    index: number,
}
const KanbanColumn = (props:KanbanColumnProps) => {
    const [createTask, setCreateTask] = useState(false);
    const {color, title, tasks, id, index} = props;

    return (
        <>
            <Draggable draggableId={id} index={index}>
                {(provided) => (
                    <div className='kanban-column'
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                        // style={{backgroundColor: `${color}1f`}}
                    >
                        <h2 className='kanban-column_title'
                            {...provided.dragHandleProps}
                            style={{backgroundColor: `${color}`}}>
                            {title}
                        </h2>
                        {index===0 &&
                            <Button variant="outlined" className='kanban-column_btn' onClick={() => setCreateTask(true)}>
                                Add Task
                                <AddIcon/>
                            </Button>}
                        <Droppable droppableId={id} type='task'>
                            {(provided) => (
                                <div className='kanban-column_task-list' ref={provided.innerRef} {...provided.droppableProps}>
                                    {tasks.map((task, index) => {
                                        const {id} = task;
                                        return <KanbanTaskCard key={id} data={task} index={index}/>})
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
            <CreateTaskModal createTask={createTask} setCreateTask={setCreateTask}/>
        </>
    )
}

export default KanbanColumn;