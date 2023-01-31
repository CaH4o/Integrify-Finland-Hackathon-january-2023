import './kanbanTaskCardPerson.scss';
import React from 'react';

interface KanbanTaskCardPersonProps {
    person: {
        avatar: string,
        name: string,
    }
}
const KanbanTaskCardPerson = (props:KanbanTaskCardPersonProps) => {
    const {avatar, name} = props.person;
    return (
        <div className='kanban-task_person'>
            <img className='kanban-task_person-image' src={`${avatar}`} alt="avatar"/>
            <div className='kanban-task_person-content'>
                <p className='kanban-task_person-content_name'>{name}</p>
            </div>
        </div>
    )
}

export default KanbanTaskCardPerson;