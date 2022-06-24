import React, {useState} from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoTable from "../components/ToDoTable";
import { Typography } from "@mui/material";

const ToDo = () => {
    // suatu data yg menempel di container ToDo
    // agar bisa reaktif, makan gunakan state

    // nama state
    const [todos, setTodos] = useState([
        { id: 1, name: 'Review DOM', isCompleted: true },
        { id: 2, name: 'Belajar Nge-React', isCompleted: false },
        { id: 3, name: 'Belajar Component React', isCompleted: false }
    ]);

    // harus punya fungsi untuk bisa nambah todos
    const addTodos = (namaTodoBaru) => {
        // logic utuk mencari id yg terbaru
        // asumsinya data akan selalu ada
        const newId = todos[todos.length - 1].id + 1;

        const objtodoBaru = {
            id: newId,
            name: namaTodoBaru,
            isCompleted: false,
        };

        const todoBaru = [...todos, objtodoBaru];
        setTodos(todoBaru);

    };

    const completeTodo = (idTodo) => {
        const newTodos = todos.map((todo) => {
            // kondisi
            if (todo.id === idTodo) {
                todo.isCompleted = true;
            }
            // karena map, maka harus ada return
            return todo;
        })
        // set state-nya lagi
        setTodos(newTodos)
    };

    // pembuat UI-nya (renderer)
    return (
        <>
            <Typography variant="h5" component="div" >To - Do - List</Typography>
            <div>
                {/* lempar fungsi ke component via props */}
                <ToDoForm fnAddTodos={addTodos} />
                {/* kita harus lempar todos ke dalam tabel (props) */}
                <ToDoTable todos={todos} fnCompleteTodo={completeTodo} />
            </div>
        </>
    )
};

export default ToDo;
