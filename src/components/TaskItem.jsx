import { useState } from "react";

function TaskItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(props.task.text)

    function handleEdit(){
        if(isEditing) {
            const trimmedText = editText.trim();
            if(trimmedText == "") return;
            props.onEdit(props.task.id, editText)
            setIsEditing(false)
        }
        else {
            setIsEditing(true)
        }
    }
    return (
        <li>
            <input type="checkbox" onChange={() => props.onToggle(props.task.id)} checked={props.task.completed} />
            {isEditing ?
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> :
                <p style={{ color: props.task.completed ? "green" : "black" }}>{props.task.text}</p>
            }
            <button onClick={handleEdit}>
                {isEditing ? "Save Task" : "Edit Task"}
            </button>
            <button onClick={() => props.onDelete(props.task.id)}>Delete Task</button>
        </li>
    )
}

export default TaskItem;