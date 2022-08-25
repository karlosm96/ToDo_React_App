import React, { useState } from "react";
import '../componentStyle/formStyle.css';
import { v4 as uuidv4 } from 'uuid'

function Task(props){

  const [inputName, setInputName] = useState('');

  const manageInputName = (e) =>{
    setInputName(e.target.value);
  };

  const [inputDescription, setInputDescription] = useState('');

  const manageInputDescription = (e) =>{
    setInputDescription(e.target.value);
  };

  const sendInformation = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      name: inputName,
      description: inputDescription,
      compleate: false
    };
    props.onSubmit(newTask);
  };

  return(
    <form 
      className="form-task"
      onSubmit={ sendInformation }>
      <input 
        className="input-task"
        placeholder="Task Name"
        name="text-name"
        type="text"
        onChange= { manageInputName } 
      />
      <input 
        className="input-description"
        placeholder="Task description"
        name="text-name"
        type="textfield"
        onChange= { manageInputDescription } 
      />
      <button className="button-add-task">Add</button>
    </form>
  );
};

export default Task;