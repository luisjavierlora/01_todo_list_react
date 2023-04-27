import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){
    const [newTodoValue,setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onSumbmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    const onChangeText = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSumbmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value = {newTodoValue}
                onChange={onChangeText}
                placeholder="Quiero leer 2 horas">

            </textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick = {onCancel}
                    >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )

}


export {TodoForm}