import React, { useState } from "react";
import '../componentStyle/taskListStyle.css';
import Tasks from "./Tasks.jsx";
import Form from './Form.jsx';

function TaskList(){
  const [tasksArray, setTaskArray] = useState([]);

  const addTaskList = (task) => {
    console.log('se activo esta funcion');
    console.log(task);
    if(task.name.trim()){
      task.name = task.name.trim();
      const newTaskList = [task, ...tasksArray];
      setTaskArray(newTaskList);
    };
  };

  const delTask = (id) => {
    const updateTaskList = tasksArray.filter( (task) => task.id !== id);
    setTaskArray(updateTaskList);
  };

  const compleateTask = (id) => {
    const updateTaskList = tasksArray.map( task =>{
        if(task.id === id){
          task.compleate = !task.compleate;
        }
        return task;
      }
    );
    setTaskArray(updateTaskList);
  };

  return(
    <>
      <Form onSubmit={ addTaskList } />
      <div className="tasks-list-container">
        { 
          tasksArray.map((task) => 
            <Tasks 
              key = {task.id}
              id = {task.id}
              name = {task.name}
              description = {task.description}
              compleate = {task.compleate}
              funcDeleteTask = {delTask}
              fucCompleateTask = {compleateTask}
            />
          )
        }
      </div>
    </>
  );
};

export default TaskList;