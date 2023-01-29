import './kanbanTaskCard.scss';
import KanbanTaskCardPerson from "./KanbanTaskCardPerson/KanbanTaskCardPerson";
import EditIcon from '@mui/icons-material/Edit';

const KanbanTaskCard = () => {
    return (
       <div className='kanban-task'>
           <EditIcon className='kanban-task_edit'/>
           <div className='kanban-task_item'>
               <h4>Title</h4>
               <p className='kanban-task_item-title'>Name of the task</p>
           </div>
           <div className='kanban-task_item'>
               <h4>Created On</h4>
               <p>May 27, 2019 12:06 PM</p>
           </div>
           <div className='kanban-task_item kanban-task_item-description'>
               <h4>Description</h4>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur, beatae deleniti dignissimos eos eveniet expedita id itaque numquam quos.</p>
           </div>
           <div className='kanban-task_item'>
               <h4>Priority</h4>
               <p id='task-priority' style={{backgroundColor: '#BAFFD6', color: '#106633'}}>Low</p>
           </div>
           <div className='kanban-task_item'>
               <h4>Creator</h4>
               <KanbanTaskCardPerson/>
           </div>
           <div className='kanban-task_item'>
               <h4>Assigned to task</h4>
               <KanbanTaskCardPerson/>
           </div>
       </div>
    )
}

export default KanbanTaskCard;