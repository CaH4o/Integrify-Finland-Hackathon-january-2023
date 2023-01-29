import './kanbancolumn.scss';
import KanbanTaskCard from "../KanbanTaskCard/KanbanTaskCard";
import AddIcon from '@mui/icons-material/Add';
import {ColumnColors} from "../../utility/types";
import {Button} from "@mui/material";

interface KanbanColumnProps {
    color: ColumnColors
}
const KanbanColumn = (props:KanbanColumnProps) => {
    const {color} = props;

    return (
        <div className='kanban-column'>
            <h2 className='kanban-column_title' style={{backgroundColor: `${color}`}}>Pending</h2>
            <KanbanTaskCard/>
            <KanbanTaskCard/>
            <Button variant="outlined" className='kanban-column_btn'>
                Add Task
                <AddIcon/>
            </Button>
        </div>
    )
}

export default KanbanColumn;