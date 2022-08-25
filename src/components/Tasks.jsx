import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdMessage } from 'react-icons/md';
import '../componentStyle/taskStyle.css';

function Tasks( { id, name, description, compleate,  funcDeleteTask, fucCompleateTask} ){

  return(
    <div className={ compleate ? 'task-container compleated' : 'task-container' }>
      <div 
        className="task-name" >
        { name }
      </div>
      <div className="task-description">
        { description }
      </div>
      <div  
        className="task-icons">
        <MdMessage 
          className='description-task-icon'
          onClick= { () => fucCompleateTask(id) } />
        <AiOutlineCloseCircle 
          className='close-task-icon'
          onClick= { () => funcDeleteTask(id) }  />
      </div>
        
    </div>
  );
};

export default Tasks;