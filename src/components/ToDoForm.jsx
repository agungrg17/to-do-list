import { TextField } from "@mui/material";
import  Button  from "@mui/material/Button";
import React, { useState } from "react";

const ToDoForm = ({fnAddTodos}) => {
    // state lokal untuk inputnya
    const [inputData, setInputData] = useState("");

    // fungsi untuk perubahan nilai inputData
    const inputOnChangeHandler = (event) => {
        setInputData(event.target.value)
    };

    // fungsi untuk form submit
    const formSubmitHandler = (event) => {
        // supaya tidak refresh
        event.preventDefault()
        fnAddTodos(inputData)
        // ksongkan input lagi
        setInputData("");
    };

    // buat tampilan 
    return (
        <div className="todo-form">
            <p>~ Task List To Do ~</p>
            <form 
                style={{margin: "0.5em 0em"}}
                onSubmit={formSubmitHandler}
            >
                {/* <input 
                    type="text" 
                    name="todo-baru" 
                    id="todoBaru"
                    placeholder="Input Kerjaan Baru"
                    style={{marginRight: "0.5em"}}
                    value={inputData}
                    onChange={inputOnChangeHandler}
                /> */}
                <TextField
                    type="text" 
                    name="todo-baru" 
                    id="todoBaru"
                    label="Input New Task"
                    style={{marginRight: "0.5em"}}
                    size="small"
                    variant="filled"
                    value={inputData}
                    onChange={inputOnChangeHandler}
                >
                </TextField>
                {/* <button type="submit">tambah Kerjaan</button> */}
                <Button type="submit" variant="contained" size="large" >Add To-Do</Button>
            </form>
        </div>
    )

}

export default ToDoForm;