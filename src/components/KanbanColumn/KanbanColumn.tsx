import './kanbancolumn.scss';
import KanbanTaskCard from "../KanbanTaskCard/KanbanTaskCard";
import AddIcon from '@mui/icons-material/Add';
import {ColumnColors} from "../../utility/types";
import {Button} from "@mui/material";
import {TaskData} from "../../utility/models";

interface KanbanColumnProps {
    color: ColumnColors,
    title: string,
    tasks: TaskData[],
}
const KanbanColumn = (props:KanbanColumnProps) => {
    const {color, title, tasks} = props;

    return (
        <div className='kanban-column' style={{backgroundColor: `${color}1f`}}>
            <h2 className='kanban-column_title' style={{backgroundColor: `${color}`}}>{title}</h2>
            {/*<KanbanTaskCard/>*/}
            {/*<KanbanTaskCard/>*/}
            {tasks.map(task => {
                const {id} = task;
                return <KanbanTaskCard key={id} data={task}/>
            })}
            <Button variant="outlined" className='kanban-column_btn'>
                Add Task
                <AddIcon/>
            </Button>
        </div>
    )
}

export default KanbanColumn;