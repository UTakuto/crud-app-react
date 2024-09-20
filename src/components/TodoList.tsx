import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);

    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const deleteTodo = (indexToDelete: number) => {
        setTodos(todos.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => {
                    setNewTodo(e.target.value);
                }}
            />

            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <div>
                        <TodoItem
                            key={index}
                            todo={todo}
                            onDelete={() => {
                                deleteTodo(index);
                            }}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}
