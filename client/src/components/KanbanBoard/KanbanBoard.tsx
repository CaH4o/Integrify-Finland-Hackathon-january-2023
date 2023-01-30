import './kanbanboard.scss';
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import {Button} from "@mui/material";
import {DragDropContext} from "react-beautiful-dnd";
import fakeData from "../../fakeData/fakeData";
import {ColumnData, FakeData, TaskData} from "../../utility/models";
import {useState} from "react";

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
    const [data, setData] = useState(fakeData);
    const allColumns = data.columns;
    const allTasks = data.tasks;

    const onDragEnd = (result:any) => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const column = allColumns[source.droppableId];
        const newTasksIds = Array.from(column.taskIds);
        newTasksIds.splice(source.index, 1);
        newTasksIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
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

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kanban-board'>
                {data.columnOrder.map((columnId:string) => {
                    const column:ColumnData = allColumns[columnId];
                    const tasks:TaskData[] = column.taskIds.map((taskId:string) => allTasks[taskId]);

                    return <KanbanColumn color={column.color} title={column.title} tasks={tasks} key={column.id} id={column.id}/>
                })}
                <Button variant="outlined" className='kanban-board_add'>New Column</Button>
            </div>
        </DragDropContext>
    )
}

export default KanbanBoard;