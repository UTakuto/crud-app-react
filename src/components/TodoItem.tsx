type TodoItemProps = {
    todo: string;
    onDelete: () => void;
};

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
    return (
        <li>
            {todo}
            <button onClick={onDelete} style={{ margin: "0 10px" }}>
                delete
            </button>
        </li>
    );
}
