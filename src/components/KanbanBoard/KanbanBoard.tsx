import './kanbanboard.scss';
import KanbanColumn from "../KanbanColumn/KanbanColumn";
import {ColumnColors} from "../../utility/types";
import {Button} from "@mui/material";

const KanbanBoard = () => {
    return (
        <div className='kanban-board'>
            <KanbanColumn color={ColumnColors.Blue}/>
            <KanbanColumn color={ColumnColors.Red}/>
            {/*<KanbanColumn color={ColumnColors.Green}/>*/}
            <Button variant="outlined" className='kanban-board_add'>Add New Column</Button>
        </div>
    )
}

export default KanbanBoard;