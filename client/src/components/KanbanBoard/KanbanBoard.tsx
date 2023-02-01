import './kanbanboard.scss';
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import {Button} from "@mui/material";
import {DragDropContext, Droppable, OnDragEndResponder} from "react-beautiful-dnd";
import fakeData from "../../fakeData/fakeData";
import {ColumnData, TaskData} from "../../utility/models";
import {useState} from "react";
import React from 'react';
import CreateColumnModal from "../modals/CreateColumnModal/CreateColumnModal";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {updateColumnTaskOrder} from "../../redux/slices/columnReducer";
import {updateColumnOrder} from "../../redux/slices/columnOrderReducer";

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
    const dispatch = useAppDispatch();
    const [data, setData] = useState(fakeData);
    const allColumns = useAppSelector(state => state.column);
    const allTasks = useAppSelector(state => state.task);
    const order = useAppSelector(state => state.order)

    console.log(order);
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
            const newColumnOrder = Array.from(order);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index,0, draggableId);

            dispatch(updateColumnOrder(newColumnOrder))
            return;
        }
        else if(type === 'task') {
            const start = allColumns.find(col => source.droppableId === col.id);
            const finish = allColumns.find(col => destination.droppableId === col.id);

            //SAME COLUMN
            if(start === finish && start) {
                const newTasksIds = Array.from(start.taskIds);
                console.log(newTasksIds);
                newTasksIds.splice(source.index, 1);
                newTasksIds.splice(destination.index, 0, draggableId);
                const currId = start.id
                dispatch(updateColumnTaskOrder({currId, newTasksIds}))
            }

            //DIFFERENT COLUMN
            else if (start !== finish && start && finish) {
                let newTasksIds = Array.from(start.taskIds);
                newTasksIds.splice(source.index, 1);
                let currId = start.id;
                dispatch(updateColumnTaskOrder({currId, newTasksIds}))

                newTasksIds = Array.from(finish.taskIds);
                newTasksIds.splice(destination.index, 0, draggableId);
                currId = finish.id;
                dispatch(updateColumnTaskOrder({currId, newTasksIds}))

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
                            {order.map((columnId, index) => {
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                const column:ColumnData = allColumns.find(column => column.id === columnId);
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                const tasks:TaskData[] = column.taskIds.map((taskId:string) => allTasks.find(task => task.id === taskId));

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