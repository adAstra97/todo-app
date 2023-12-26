import React from "react";

interface IForm {
   task: string,
   setTask: (text: string) => void;
   addTask: (text: string) => void;
}

const FormTodo = ({task, setTask, addTask}: IForm) => {
   const handleTask = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (task === '') return;

      addTask(task);

      setTask('');

   }

   return (
      <form onSubmit={handleTask}>
         <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder='write your next task'/>
         <button>+</button>
      </form>
   )
};

export default FormTodo;