import React, { useEffect } from "react";
import "./User.css";
// import { TableRow, TableCell } from "@mui/material";

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

function UserList({ users, onDelete, onToggle }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Birthday</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Job</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <User
                        user={user}
                        onDelete={onDelete}
                        key={user.id}
                        onToggle={onToggle}
                    />
                ))}
            </TableBody>
        </Table>    
    );

}

function User({ user, onDelete, onToggle }) {
    useEffect(() => {
        console.log("Users mount!");
        // console.log(user);
        return () => {
            console.log("Users unmount!");
            console.log(user);
        };
    }, [user]);
    return (
        <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>
                <img src={user.image} alt={user.name} width="64" height="64" />
            </TableCell>
            <TableCell
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.name}
            </TableCell>
            <TableCell>{user.birthday}</TableCell>
            <TableCell>{user.gender}</TableCell>
            <TableCell>{user.job}</TableCell>
            <TableCell>
                <button onClick={() => onDelete(user.id)}>삭제</button>
            </TableCell>
        </TableRow>
    );
}

export default UserList;
