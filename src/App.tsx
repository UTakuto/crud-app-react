import "./App.css";
import TodoList from "./components/TodoList";

export default function App() {
    return (
        <div style={{ padding: "10px 20px" }}>
            <h1>CRUD App</h1>
            <TodoList />
        </div>
    );
}
