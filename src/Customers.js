import React, { useEffect } from "react";
import "./Customers.css";
import { TableRow, TableCell } from "@mui/material";

function Customers({ user, onDelete, onToggle }) {
    useEffect(() => {
        console.log("Customers mount!");
        // console.log(user);
        return () => {
            console.log("Customers unmount!");
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

export default Customers;
