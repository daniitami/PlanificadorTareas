import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // Previene accion por default
        e.preventDefault();
        if (value) {
          // Agrega tarea
          addTodo(value);
          // Limpia el formulario despues de hacerlo
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Que vas a hacer hoy?' />
    <button type="submit" className='todo-btn'>Agregar tarea</button>
  </form>
  )
}
