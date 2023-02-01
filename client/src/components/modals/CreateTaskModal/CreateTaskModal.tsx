import '../kanban-modal.scss';
import React, { FormEvent, useState} from 'react'
import * as ReactDOM from 'react-dom';
import {Box, Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {taskPriority} from "../../../utility/TaskPriorities";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {addNewTask} from "../../../redux/slices/taskReducer";
import {updateColumn} from "../../../redux/slices/columnReducer";
import {TaskData} from "../../../utility/models";
import {fakeUsers} from "../../../fakeData/fakeData";

interface CreateTaskModalProps {
    createTask: boolean,
    columnId: string,
    setCreateTask:  React.Dispatch<React.SetStateAction<boolean>>,
}
const CreateTaskModal = (props:CreateTaskModalProps) => {
    const {createTask, setCreateTask, columnId} = props;
    const dispatch = useAppDispatch();
    const [priorityType, setPriorityType] = useState(taskPriority.Low);
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [assignedId, setAssignedId] = useState<number>(1);

    if(!createTask ) return null

    console.log(columnId);
    const updateDropDownMenu = (event:any) => {
        console.log(event.target.value);
        /*
        const person = get data from all users, find person
         */
    }
    const handleCheckbox = (string:string) => {
      const task = taskPriority[string];
      setPriorityType(task);
    }

    const handleFormSubmit = (e:FormEvent) => {
        e.preventDefault();
        const user = fakeUsers.find(item => item.id === assignedId)

        if(!user || !taskDescription || !taskTitle) {
            return
        } else {
            const newTask:TaskData = {
                id: String(Date.now()),
                title: taskTitle,
                description: taskDescription,
                priority: priorityType,
                assigned: {
                    avatar: user.avatar,
                    name: user.name,
                    id: user.id,
                }
            }
            dispatch(addNewTask(newTask));
            dispatch(updateColumn({columnId,newTask}));
            resetStates();
        }
    }

    const resetStates = () => {
        setTaskDescription("");
        setTaskTitle("");
        setPriorityType(taskPriority.Low);
        setCreateTask(false);
    }

    return ReactDOM.createPortal(
        <>
            <div className='kanban-modal_overlay' onClick={() => resetStates()}></div>
            <div className='kanban-modal'>
                <h1>Create Task</h1>
                <Box component="form"
                     onSubmit={(e) => handleFormSubmit(e)}
                     className='kanban-modal_form'
                     sx={{
                         '& > :not(style)': { m: 1, width: '25ch' },
                     }}
                     noValidate
                     autoComplete="off"
                >
                    <TextField required id="outlined-basic" label="Title" variant="outlined" defaultValue={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
                    <TextField
                        id="outlined-multiline-static"
                        required
                        label="Description"
                        multiline
                        rows={3}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        defaultValue={taskDescription}
                    />
                    <div className='kanban-modal_form-checkbox'>
                        <div>
                            <input type="radio"
                                   onChange={(e:React.FormEvent<HTMLInputElement>) => handleCheckbox(e.currentTarget.value)}
                                   id='priority-checkbox_low'
                                   value="Low"
                                   checked={priorityType.text === 'Low'}
                                   name='priority-checkbox'/>
                            <label style={{backgroundColor:"#2196534f", color: "#219653"}} className="container" htmlFor='priority-checkbox_low'>Low</label>
                        </div>
                        <div>
                            <input type="radio"
                                   onChange={(e:React.FormEvent<HTMLInputElement>) => handleCheckbox(e.currentTarget.value)}
                                   id='priority-checkbox_medium'
                                   value="Medium"
                                   checked={priorityType.text === 'Medium'}
                                   name='priority-checkbox'/>
                            <label style={{backgroundColor:"#F2C94C4f", color: "#F2C94C"}} className="container" htmlFor='priority-checkbox_medium'>Medium</label>
                        </div>
                        <div>
                            <input type="radio"
                                   onChange={(e:React.FormEvent<HTMLInputElement>) => handleCheckbox(e.currentTarget.value)}
                                   id='priority-checkbox_high'
                                   value="High"
                                   checked={priorityType.text === 'High'}
                                   name='priority-checkbox'/>
                            <label style={{backgroundColor:"#EB57574f", color: "#EB5757"}} className="container" htmlFor='priority-checkbox_high'>High</label>
                        </div>
                    </div>
                    <FormControl className='kanban-modal_dropdown' required>
                        <InputLabel id="demo-simple-select-label">Assigned</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={assignedId}
                            label="Assigned"
                            onChange={(e) => setAssignedId(Number(e.target.value))}
                        >
                            {fakeUsers.map((item, index) => {
                                console.log(item.id)
                                return <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                            })}

                        </Select>
                    </FormControl>

                <div className='kanban-modal_buttons'>
                    <Button onClick={() => resetStates()} variant="outlined">Close</Button>
                    <Button variant="contained" type='submit'>Create</Button>
                </div>
                </Box>
            </div>
        </>,
        document.getElementById('modal')!
    )
}

export default CreateTaskModal;