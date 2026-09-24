import { useState } from "react";
import TaskItem from "./TaskItem";
function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const trimmedText = newTask.trim();
        if (trimmedText === "") return;
        const updatedTask = {
            id: Date.now(),
            text: trimmedText,
            completed: false,
        }
        setTasks([...tasks, updatedTask]);
        setNewTask("");
    }

    function statusCompleted(taskid) {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskid) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task
            })
        )
    }

    function taskDelete(taskid) {
        const updatedTask = tasks.filter((task) => {
            return task.id !== taskid
        })
        setTasks(updatedTask)
    }

    function updatedTask(taskid, newText) {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskid) {
                    return {
                        ...task,
                        text: newText,
                    }
                }
                return task
            })
        )
    }

    return (
        <>
            <h2>My Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={statusCompleted}
                        onDelete={taskDelete}
                        onEdit={updatedTask}
                        isComplete={task.completed}
                    />
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} placeholder="Add a task" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TaskList;