import UserList from "./User";
import React, { useState, useRef, useMemo, useCallback } from "react";
import CreateUser from "./CreateUser";


function countActiveUsers(users) {
    console.log("Counting Acitve Users");
    return users.filter((user) => user.active === true).length;
};

const initialState = {
    inputs:{
        name: "",
        birthday: "",
        gender: "",
        job: "",
    },
    
    users: [
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
        }
    ]
};

function App() {
    return (
        <div className="App">
            <h1>User Table</h1>
            <CreateUser
            />

            <UserList
                users={[]}/>

            <div>활성 사용자수 : 0</div>
        </div>
    );
}

export default App;
