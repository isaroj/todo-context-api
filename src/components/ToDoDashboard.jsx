import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ToDoContext from "../state/contexts/ToDoContext";
import { FaTrash, FaArrowDown } from "react-icons/fa";
import { REMOVE_TODO } from "../state/actions/ToDoAction";

// Toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToDoDashboard = () => {
  // load all ToDos
  const { todos, dispatch } = useContext(ToDoContext);

  return (
    <main>
      {todos.length && (
        <div
          className="text-warning text-center m-2"
          style={{ fontSize: "1.4rem" }}
        >
          Your To-Do List
          <FaArrowDown style={{ marginLeft: "1.5rem", fontSize: "1.3rem" }} />
        </div>
      )}
      <div
        style={{
          maxHeight: "50vh",
          width: "30vw",
          overflowY: "scroll",
          overflowX: "hidden",
          margin: "auto",
        }}
      >
        <ToastContainer position="bottom-right" />

        <ListGroup>
          {todos.map((todo) => (
            <ListGroupItem
              color="info"
              key={todo.id}
              className="mb-2"
              style={{
                width: "25vw",
                margin: "auto",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span className="mr-1">{todo.todoText}</span>
              <FaTrash
                style={{ float: "right" }}
                className="mt-1"
                onClick={() => {
                  dispatch({
                    type: REMOVE_TODO,
                    payload: todo.id,
                  });
                  toast.info("To-do has been removed");
                }}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </main>
  );
};

export default ToDoDashboard;
