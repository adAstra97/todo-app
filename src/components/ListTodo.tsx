import React from 'react';

import { Todo } from '../types';
import ItemTodo from './ItemTodo';
import EditTaskTodo from './EditTaskTodo';

interface IListTodo {
   todos: Todo[];
   changeStatus: (id: number) => void;
   editTaskStatus: (id: number) => void;
   editText: (id: number, text: string) => void,
   deleteTask: (id: number) => void;
};

const ListTodo = ({todos, changeStatus, editTaskStatus, editText, deleteTask}: IListTodo) => {
   return (
      <div className='list'>
         {todos.length === 0 ? (
            <p className='no-tasks'>No tasks</p>
         ) :
         (
            todos.map((task) => (
               task.isEditing ? (
                  <EditTaskTodo key={task.id} task={task} editText={editText}/>
               ) : (
                  <ItemTodo key={task.id} task={task} changeStatus={changeStatus} editTaskStatus={editTaskStatus} deleteTask={deleteTask}/>
               )
               )
            )
         )}
      </div>
   )
};

export default ListTodo;
