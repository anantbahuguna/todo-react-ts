import React, { FC } from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <>
            {todos.map((todo, i) => (
                <TodoListItem key={i} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </>
    );
};
