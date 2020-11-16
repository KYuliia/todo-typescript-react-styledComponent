
import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean
export const TodosPage: React.FC = () => {
    const [todos, setTodosState] = useState<ITodo[]>(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[])

    const setTodos = (t: ITodo[] | ((prev: ITodo[]) => ITodo[])) => {
        console.log("save data");
        const d: ITodo[] = typeof t === "function" ? t(todos) : t;
        localStorage.setItem('todos', JSON.stringify(d))
        setTodosState(d);
    };
    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(prev => [newTodo, ...prev])
    }
    const toggleHandler = (id: number) => setTodos(todos.map(todo => todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
        } : todo));
    const removeHandler = (id: number) => {
        const shoudRemove = confirm('Are you sure?')
        if (shoudRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }
    }

    return (
        <>
            <TodoForm onAdd={addHandler} />

            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    )
}