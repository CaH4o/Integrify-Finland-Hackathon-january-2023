import './kanbanTaskCard.scss';

const KanbanTaskCard = () => {
    return (
       <div className='kanban-task'>
           <div className='kanban-task_item'>
               <h4>Title</h4>
               <span>Name of the product</span>
           </div>
           <div className='kanban-task_item'>
               <h4>Created On</h4>
               <span>May 27, 2019 12:06 PM</span>
           </div>
           <div className='kanban-task_item'>
               <h4>Priority</h4>
               <span id='task-priority' style={{backgroundColor: '#BAFFD6', color: '#106633'}}>Low</span>
           </div>
           <div className='kanban-task_item'>
               <h4>Creator</h4>
               <span></span>
           </div>
           <div className='kanban-task_item'>
               <h4>Assigned to task</h4>
               <span></span>
           </div>
       </div>
    )
}

export default KanbanTaskCard;