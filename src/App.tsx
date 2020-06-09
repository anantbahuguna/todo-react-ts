import React, { FC, useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

// Todo[] or Array<Todo>
const initialTodos: Todo[] = [
    {
        text: "Walk the dog 🐕 ",
        complete: false,
    },
    {
        text: "Sleep Early 😴 ",
        complete: false,
    },
    {
        text: "Wakeup early 😉 ",
        complete: false,
    },
    {
        text: "Play badminton 🏸 ",
        complete: true,
    },
];

const App: FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
        const newTodos = todos.map((todo) =>
            todo !== selectedTodo
                ? todo
                : {
                      ...todo,
                      complete: !todo.complete,
                  }
        );

        setTodos(newTodos);
    };

    const addTodo: AddTodo = (newTodo) => {
        newTodo.trim() !== "" &&
            setTodos([
                ...todos,
                {
                    text: newTodo,
                    complete: false,
                },
            ]);
    };

    return (
        <>
            <h1>Todo List</h1>
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </>
    );
};

export default App;
