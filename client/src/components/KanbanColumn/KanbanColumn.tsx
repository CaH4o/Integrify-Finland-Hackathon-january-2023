import './kanbancolumn.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Button} from "@mui/material";
import {TaskData} from "../../utility/models";
import {Draggable, Droppable} from "react-beautiful-dnd";
import KanbanTaskCard from "../KanbanTaskCard/KanbanTaskCard";
import React, {useState} from "react";
import CreateTaskModal from "../modals/CreateTaskModal/CreateTaskModal";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {removeColumn} from "../../redux/slices/columnReducer";
import {removeColumnFromOrder} from "../../redux/slices/columnOrderReducer";

interface KanbanColumnProps {
    color: string,
    title: string,
    tasks: TaskData[],
    id: string,
    index: number,
}
const KanbanColumn = (props:KanbanColumnProps) => {
    const [createTask, setCreateTask] = useState(false);
    const {color, title, tasks, id, index} = props;
    const dispatch = useAppDispatch();
    const columnId = id;

    const deleteColumn = () => {
        dispatch(removeColumn(columnId));
        dispatch(removeColumnFromOrder(columnId));
    }

    return (
        <>
            <Draggable draggableId={columnId} index={index}>
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
                            <RemoveIcon onClick={() => deleteColumn()} className='kanban-column_remove' fontSize='large'/>
                        </h2>
                        <Button variant="outlined" className='kanban-column_btn' onClick={() => setCreateTask(true)}>
                            Add Task
                            <AddIcon/>
                        </Button>
                        <Droppable droppableId={columnId} type='task'>
                            {(provided) => (
                                <div className='kanban-column_task-list' ref={provided.innerRef} {...provided.droppableProps}>
                                    {tasks.map((task, index) => {

                                        const {id} = task;
                                        return <KanbanTaskCard key={id} columnId={columnId} data={task} index={index}/>})
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
            <CreateTaskModal createTask={createTask} columnId={props.id} setCreateTask={setCreateTask}/>
        </>
    )
}

export default KanbanColumn;