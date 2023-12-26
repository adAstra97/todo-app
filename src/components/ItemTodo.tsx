import React from 'react';
import {FaRegEdit} from 'react-icons/fa';
import {AiOutlineDelete} from 'react-icons/ai';
import { Todo } from '../types';

interface ITodo {
   task: Todo,
   changeStatus: (id: number) => void;
   editTaskStatus: (id: number) => void;
   deleteTask: (id: number) => void;
};

const ItemTodo = ({task, changeStatus, editTaskStatus, deleteTask}: ITodo) => {
   return (
      <li className='item'>
         <div className={`item__row ${task.isCompleted ? 'success' : ''}`} onClick={() => changeStatus(task.id)}>
            <span className='item__status'></span>
            <span className='item__title'>{task.text}</span>
         </div>
         <div className='item__row'>
            <button onClick={() => editTaskStatus(task.id)}>
               <FaRegEdit size={26} style={{ fill: '#6E6659' }} />
            </button>
            <button onClick={() => deleteTask(task.id)}>
               <AiOutlineDelete size={29} style={{ fill: '#6E6659' }} />
            </button>
         </div>
      </li>
   )
};

export default ItemTodo;