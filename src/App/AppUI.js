import React from "react";
import {TodoCounter} from '../TodoCounter'
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
    const {error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter 

            />
        
            <TodoSearch 

            />

                    
            <TodoList>

            {error && <p>Error!!, contact with administrator</p> }

            {loading && <p>We are loading, wait please</p> }
            {(!loading && !searchedTodos.length) && <p>Create you first todo</p>}


            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text = {todo.text}
                completed = {todo.completed}
                onComplete = {() => completeTodo(todo.text)} 
                onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />

                </Modal>
            )}

    
            <CreateTodoButton
                setOpenModal = {setOpenModal}
            />
      </React.Fragment>
    )
}

export {AppUI}