import React from "react";
import "./Customers.css";
import { TableRow, TableCell } from "@mui/material";

function Customers({ user, onDelete }) {
    return (
        <>
            <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                    <img
                        src={user.image}
                        alt={user.name}
                        width="64"
                        height="64"
                    />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.birthday}</TableCell>
                <TableCell>{user.gender}</TableCell>
                <TableCell>{user.job}</TableCell>
                <TableCell>
                    <button onClick={() => onDelete(user.id)}>삭제</button>
                </TableCell>
            </TableRow>
        </>
    );
}

export default Customers;
