import React, { useEffect, useContext } from "react";
import "./User.css";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { UserDispatch } from "./App";

function UserList({ users }) {
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
                    <User user={user} key={user.id} />
                ))}
            </TableBody>
        </Table>
    );
}

const User = React.memo(function User({ user }) {
    useEffect(() => {
        // console.log("Users mount!");
        // console.log(user);
        return () => {
            // console.log("Users unmount!");
            // console.log(user);
        };
    }, [user]);

    const { id, image, name, birthday, gender, job, active } = user;
    const dispatch = useContext(UserDispatch);

    return (
        <TableRow key={id}>
            <TableCell>{id}</TableCell>
            <TableCell>
                <img src={image} alt={name} width="64" height="64" />
            </TableCell>
            <TableCell
                style={{
                    cursor: "pointer",
                    color: active ? "green" : "black",
                }}
                onClick={() =>
                    dispatch({
                        type: "TOGGLE_USER",
                        id,
                    })
                }
            >
                {name}
            </TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
            <TableCell>
                <button
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_USER",
                            id,
                        })
                    }
                >
                    삭제
                </button>
            </TableCell>
        </TableRow>
    );
});

export default React.memo(UserList);
