import './kanbanTaskCard.scss';
import {Priority, TaskPersonData} from "../../utility/models";
import {Draggable} from "react-beautiful-dnd";
import KanbanTaskCardContent from "./KanbanTaskCardContent/KanbanTaskCardContent";

interface KanbanTaskCardProps {
    data : {
        id: string,
        title: string,
        date: string,
        description: string,
        priority: Priority,
        creator: TaskPersonData,
        assigned: TaskPersonData,
    },
    index: number
}
const KanbanTaskCard = (props: KanbanTaskCardProps) => {
    const {index} = props;
    const {id} = props.data;
    // style={{border: `1px solid ${priority.color}`}} - for borders ??
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <KanbanTaskCardContent
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    data={props.data}/>
            )}
        </Draggable>
    )
}

export default KanbanTaskCard;