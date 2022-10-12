// for unique id
import { v4 as uuidv4, v4 } from "uuid";

import { useContext, useState } from "react";
import ToDoContext from "../state/contexts/ToDoContext";

// Toast imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// reactstrap things
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Action
import {ADD_TODO} from '../state/actions/ToDoAction'

const ToDo = () => {

    const [todoText, setTodoText] = useState('');
    const {dispatch} = useContext(ToDoContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todoText === ''){
            toast.warn('empty todo! Type Something.')
            return
        }

        const todo = {
            todoText,
            id: v4(),

        }
        dispatch({
            type: ADD_TODO,
            payload: todo,
        })
        toast.success("New to-do in the list");
        setTodoText('')
    }
  return (
    <>
      <header className="text-center display-6 p-1 text-white">
        React ToDos
      </header>
      <hr className="text-white" />
      <ToastContainer position="bottom-right" />

      <Container className="mt-5">
        <Form style={{ maxWidth: "35rem", margin: "auto" }}>
          <FormGroup className="d-flex">
            <Input
              type="text"
              name="todo"
              id="todo"
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Type your todo here ..."
              maxLength={30}
            />
            <Button
              style={{ minWidth: "7rem" }}
              color="info"
              onClick={handleSubmit}
            >
              Add ToDo
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default ToDo;
