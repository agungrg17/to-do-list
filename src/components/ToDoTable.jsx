import React from "react";
import {
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
  } from '@mui/material';

// supaya bisa menerima props (attribute) dgn nama todos
//supaya bisa akses todos: dgn props.todos
const ToDoTable = (props) => {   
    // fungsi ini tdk menerima event
    const clickHandler = (todoId) => {
         // di sini kita akan memanggil props fnCompleteTodo
        // beserta value todoId yg akan dilempar
        props.fnCompleteTodo(todoId);
    }
    // render
    return (
        <Table sx={{maxWidth: 650}} >
            {/* bagian kepala tabel */}
            <TableHead>
                {/* isi baris pertama kepala tabel */}
                <TableRow>
                    {/* isi baris pertama ingin di Bold */}
                    <TableCell>ToDo Id</TableCell>
                    <TableCell>ToDo Name</TableCell>
                    <TableCell>ToDo Status</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            {/* bagian isi data tabel */}
            <TableBody>
            {/* kita akan looping props.todos untuk menghasilkan data per baris */}
            {props.todos.map((todo) => {
                return (
                    <TableRow key={todo.id}>
                        <TableCell> {todo.id} </TableCell>
                        <TableCell> {todo.name} </TableCell>
                        {/* todo.isCompleted bentuknya boolean */}
                        {/* kita ingin menampilkan dlm bentuk string */}
                        {/* kita akan menggunakan conditional rendering (if) */}
                        {/* kita akan gunakan ternary operator */}
                        <TableCell> {todo.isCompleted ? "Selesai" : "Belum Selesai"} </TableCell>
                        {/* kalau belum seleai akan ada sebuah button "selesaikan" */}
                        {/* <TableCell> {todo.isCompleted ? "" : <button onClick={() => props.fnCompleteTodo(todo.id)}>Selesaikan</button>} </TableCell> */}
                        <TableCell> {todo.isCompleted ? "" : <Button variant="outlined" onClick={() => clickHandler(todo.id)}>Selesaikan</Button>} </TableCell>
                        {/* onClick menerima fungsi, maka harus diberikan sebuah fungsi */}
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    )

};

export default ToDoTable;