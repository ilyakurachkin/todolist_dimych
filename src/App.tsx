import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {



    let tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: true}
    ]

    function removeTasks(Id: number) {
        tasks = tasks.filter(t => t.id !== Id)
        console.log(tasks)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTasks={removeTasks}
            />
        </div>
    );
}

export default App;
