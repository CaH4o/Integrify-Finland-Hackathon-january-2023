import './kanbanboard.scss';
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import {Button} from "@mui/material";
import {DragDropContext, Droppable, OnDragEndResponder} from "react-beautiful-dnd";
import fakeData from "../../fakeData/fakeData";
import {ColumnData, TaskData} from "../../utility/models";
import {useState} from "react";
import React from 'react';
import EditTaskModal from "../modals/EditTaskModal/EditTaskModal";
import CreateTaskModal from "../modals/CreateTaskModal/CreateTaskModal";
import CreateColumnModal from "../modals/CreateColumnModal/CreateColumnModal";

interface DragResult {
    draggableId: string,
    type: string,
    reason: string,
    source: DragDestinationResult,
    destination: DragDestinationResult | null,
}

interface DragDestinationResult {
    droppableId: string,
    index: number,
}
const KanbanBoard = () => {
    const [createColumn, setCreateColumn] = useState(false);

    const [data, setData] = useState(fakeData);
    const allColumns = data.columns;
    const allTasks = data.tasks;

    const onDragEnd = (result:any) => {
        const {destination, source, draggableId, type} = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        if(type === 'column') {
            const newColumnOrder = Array.from(data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index,0, draggableId);

            const newState = {
                ...data,
                columnOrder: newColumnOrder,
            };
            setData(newState);
            return;
        }
        else if(type === 'task') {
            const start = allColumns[source.droppableId];
            const finish = allColumns[destination.droppableId];

            //SAME COLUMN
            if(start === finish) {
                const newTasksIds = Array.from(start.taskIds);
                newTasksIds.splice(source.index, 1);
                newTasksIds.splice(destination.index, 0, draggableId);

                const newColumn = {
                    ...start,
                    taskIds: newTasksIds,
                };

                const newData = {
                    ...data,
                    columns: {
                        ...data.columns,
                        [newColumn.id]: newColumn,
                    },
                };
                setData(newData);
            }
            //DIFFERENT COLUMN
            else {
                const startTaskIds = Array.from(start.taskIds);
                startTaskIds.splice(source.index, 1);
                const newStart = {
                    ...start,
                    taskIds: startTaskIds,
                };
                const finishTaskIds = Array.from(finish.taskIds);
                finishTaskIds.splice(destination.index, 0, draggableId);
                const newFinish = {
                    ...finish,
                    taskIds: finishTaskIds
                };

                const newState = {
                    ...data,
                    columns: {
                        ...data.columns,
                        [newStart.id] : newStart,
                        [newFinish.id] : newFinish,
                    }
                };
                setData(newState);
            }
        }
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId={"all-columns"}
                    direction={"horizontal"}
                    type={"column"}>
                    {provided => (
                        <div className='kanban-board'
                             ref={provided.innerRef}
                             {...provided.droppableProps}>
                            {data.columnOrder.map((columnId, index) => {
                                const column:ColumnData = allColumns[columnId];
                                const tasks:TaskData[] = column.taskIds.map((taskId:string) => allTasks[taskId]);

                                return <KanbanColumn index={index} color={column.color} title={column.title} tasks={tasks} key={column.id} id={column.id}/>
                            })}
                            {provided.placeholder}
                            <Button variant="outlined" className='kanban-board_add' onClick={() => setCreateColumn(true)}>New Column</Button>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <CreateColumnModal createColumn={createColumn} setCreateColumn={setCreateColumn}/>
        </>
    )
}

export default KanbanBoard;