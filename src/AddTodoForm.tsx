import React, { FC, useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("")
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => handleChange(e)}
            />
            <input type="submit" value="Add Todo" />
        </form>
    );
};
