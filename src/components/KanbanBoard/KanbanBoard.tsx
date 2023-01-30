import './kanbanboard.scss';
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import {Button} from "@mui/material";
import fakeData from "../../fakeData/fakeData";
import {ColumnData, FakeData, TaskData} from "../../utility/models";

const KanbanBoard = () => {
    const data:FakeData = fakeData;
    const allColumns = data.columns;
    const allTasks = data.tasks;

    return (
        <div className='kanban-board'>
            {data.columnOrder.map((columnId:string) => {
                const column:ColumnData = allColumns[columnId];
                const tasks:TaskData[] = column.taskIds.map((taskId:string) => allTasks[taskId]);

                return <KanbanColumn color={column.color} title={column.title} tasks={tasks}/>
            })}
            <Button variant="outlined" className='kanban-board_add'>New Column</Button>
        </div>
    )
}

export default KanbanBoard;