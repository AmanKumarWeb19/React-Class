import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems, DeleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={DeleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
