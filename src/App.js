import Customers from "./Customers";

import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import React, { useState, useRef, useMemo } from "react";
import CreateUser from "./CreateUser";

function App() {
    useState();

    const nextId = useRef(4);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onCreate = () => {
        const user = {
            id: nextId.current,
            image: `https://picsum.photos/id/${nextId.current}/64/64`,
            name,
            birthday,
            gender,
            job,
            active: false,
        };

        setUsers([...users, user]);

        setInputs({
            name: "",
            birthday: "",
            gender: "",
            job: "",
        });

        nextId.current += 1;
    };

    const onDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    const countActiveUsers = () => {
        console.log("Counting Acitve Users");
        return users.filter((user) => user.active === true).length;
    };

    const [inputs, setInputs] = useState({
        name: "",
        birthday: "",
        gender: "",
        job: "",
    });

    const { name, birthday, gender, job } = inputs;

    const [users, setUsers] = useState([
        {
            id: 1,
            image: "https://picsum.photos/id/1/64/64",
            name: "John Doe",
            birthday: "1985-07-15",
            gender: "Male",
            job: "Software Engineer",
            active: false,
        },
        {
            id: 2,
            image: "https://picsum.photos/id/2/64/64",
            name: "Jane Smith",
            birthday: "1990-03-22",
            gender: "Female",
            job: "Marketing Manager",
            active: false,
        },
        {
            id: 3,
            image: "https://picsum.photos/id/3/64/64",
            name: "Alex Johnson",
            birthday: "1978-11-05",
            gender: "Male",
            job: "Teacher",
            active: false,
        },
    ]);

    const activeUserCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div className="App">
            <h1>User Table</h1>

            <CreateUser
                name={name}
                birthday={birthday}
                gender={gender}
                job={job}
                onChange={onChange}
                onCreate={onCreate}
            />

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
                        <Customers
                            user={user}
                            onDelete={onDelete}
                            key={user.id}
                            onToggle={onToggle}
                        />
                    ))}
                </TableBody>
            </Table>

            <div>활성 사용자수 : {activeUserCount}</div>
        </div>
    );
}

export default App;
