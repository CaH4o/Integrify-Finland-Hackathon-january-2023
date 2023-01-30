import './kanbancolumn.scss';
import AddIcon from '@mui/icons-material/Add';
import {ColumnColors} from "../../utility/types";
import {Button} from "@mui/material";
import {TaskData} from "../../utility/models";
import {Droppable} from "react-beautiful-dnd";
import KanbanTaskCard from "../KanbanTaskCard/KanbanTaskCard";
import React from "react";

interface KanbanColumnProps {
    color: ColumnColors,
    title: string,
    tasks: TaskData[],
    id: string,
}
const KanbanColumn = (props:KanbanColumnProps) => {
    const {color, title, tasks, id} = props;

    return (
            <div className='kanban-column' style={{backgroundColor: `${color}1f`}}>
                <h2 className='kanban-column_title' style={{backgroundColor: `${color}`}}>{title}</h2>
                <Button variant="outlined" className='kanban-column_btn'>
                    Add Task
                    <AddIcon/>
                </Button>
                <Droppable droppableId={id}>
                    {(provided) => (
                        <div className='kanban-column_task-list' ref={provided.innerRef}>
                                {tasks.map((task, index) => {
                                    const {id} = task;
                                    return <KanbanTaskCard key={id} data={task} index={index}/>})
                                }
                                {provided.placeholder}
                        </div>
                        )
                   }
                </Droppable>
            </div>

    )
}

export default KanbanColumn;