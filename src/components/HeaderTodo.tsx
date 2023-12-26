import React from "react";
import { Todo } from "../types";

interface ITodos {
   todos: Todo[];
};

const HeaderTodo = ({todos}: ITodos) => {
   const getCompletedTask = () => {
      if (todos.length === 0) return 0;

      return todos.filter(task => task.isCompleted).length;
   }

   return (
      <header className='header'>
         <div className='header__left'>
            <h1>Todo Done</h1>
            <span>keep it up</span>
         </div>
         <div className={`header__right ${getCompletedTask() === todos.length && todos.length !== 0 ? 'success' : ''}`}>
            <span>{getCompletedTask()}/{todos.length}</span>
         </div>
      </header>
   )
}

export default HeaderTodo;