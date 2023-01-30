import KanbanTaskCard from "../../KanbanTaskCard/KanbanTaskCard";
import {TaskData} from "../../../utility/models";
import {DroppableProvided} from "react-beautiful-dnd";

interface KanbanColumnContentProps {
        tasks: TaskData[],
        innerRef: (element: (HTMLElement | null)) => void,
        provided: DroppableProvided,
}

const KanbanColumnContent = (props:KanbanColumnContentProps) => {
    const {tasks, provided} = props;
    return (
        <>
            {tasks.map((task, index) => {
                const {id} = task;
                return <KanbanTaskCard key={id} data={task} index={index}/>})
            }
            {provided.placeholder}
        </>
    )
}
export default KanbanColumnContent;