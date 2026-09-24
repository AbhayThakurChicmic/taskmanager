import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <>
    <Header title="Task Manager" />
    <Header title="My Projects" />
    <TaskList />
    </>
  )
}

export default App
