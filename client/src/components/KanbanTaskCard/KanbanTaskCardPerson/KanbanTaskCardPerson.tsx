import './kanbanTaskCardPerson.scss';
import React from 'react';

interface KanbanTaskCardPersonProps {
    person: {
        avatar: string,
        name: string,
        position:string,
        email: string,
    }
}
const KanbanTaskCardPerson = (props:KanbanTaskCardPersonProps) => {
    const {avatar, name, position, email} = props.person;
    return (
        <div className='kanban-task_person'>
            <img className='kanban-task_person-image' src={`${avatar}`} alt="avatar"/>
            <div className='kanban-task_person-content'>
                <p className='kanban-task_person-content_name'>{name}</p>
                <p className='kanban-task_person-content_position'>{position}</p>
                <p className='kanban-task_person-content_email'>{email}</p>
            </div>
        </div>
    )
}

export default KanbanTaskCardPerson;