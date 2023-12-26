import { useState } from 'react';
import {BiSave} from 'react-icons/bi';
import { Todo } from '../types';

interface IEditTast {
   task: Todo,
   editText: (id: number, text: string) => void,
};

const EditTaskTodo = ({task, editText}: IEditTast) => {
   const [title, setTitle] = useState(task.text);

   const handleTask = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (title === '') return;

      editText(task.id, title);

   };

   return (
      <form onSubmit={handleTask}>
         <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder='Update your task'/>
         <button>
            <BiSave size={25}/>
         </button>
      </form>
   )
};

export default EditTaskTodo;