import './kanbanTaskCardPerson.scss';
const KanbanTaskCardPerson = () => {
    return (
        <div className='kanban-task_person'>
            <img className='kanban-task_person-image' src="./photo-1438761681033-6461ffad8d80.jpg" alt="avatar"/>
            <div className='kanban-task_person-content'>
                <p className='kanban-task_person-content_name'>Jenny Wilson</p>
                <p className='kanban-task_person-content_position'>Marketing</p>
                <p className='kanban-task_person-content_email'>debbie.baker@example.com</p>
            </div>
        </div>
    )
}

export default KanbanTaskCardPerson;