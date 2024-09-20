type TodoItemProps = {
    todo: string;
    onDelete: () => void;
    onEdit: () => void;
};

export default function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
    return (
        <li>
            {todo}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete} style={{ margin: "0 10px" }}>
                delete
            </button>
        </li>
    );
}
