import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);

    const [newTodo, setNewTodo] = useState("");

    const [editingIndex, setEditingIndex] = useState([]);

    //タスク追加
    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    //タスク削除
    const deleteTodo = (indexToDelete: number) => {
        setTodos(todos.filter((_, i) => i !== indexToDelete));
    };

    //タスク編集
    const editTodo = (index: number) => {
        setNewTodo(todos[index]); //編集対象のタスクを入力フィールドに設定
        // setEditingIndex(index); //編集モードに入る
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
                            onEdit={() => {
                                editTodo(index);
                            }}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}
