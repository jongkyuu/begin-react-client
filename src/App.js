import UserList from "./User";
import React, {
    useReducer,
    useRef,
    useMemo,
    useCallback,
    createContext,
} from "react";
import CreateUser from "./CreateUser";
import { produce } from "immer";

function countActiveUsers(users) {
    console.log("Counting Acitve Users");
    return users.filter((user) => user.active === true).length;
}

const initialState = {
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
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_USER":
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        // immer 사용하는것 보다 기존 코드가 더 간결함
        // return {
        //     users: state.users.concat(action.user),
        // };
        case "TOGGLE_USER":
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        // return {
        //     ...state,
        //     users: state.users.map((user) =>
        //         user.id === action.id
        //             ? { ...user, active: !user.active }
        //             : user
        //     ),
        // };
        case "REMOVE_USER":
            return produce(state, (draft) => {
                const index = draft.users.findIndex(
                    (user) => user.id === action.id
                );
                draft.users.splice(index, 1);
            });
        // immer 사용하는것 보다 기존 코드가 더 간결함
        // return {
        //     ...state,
        //     users: state.users.filter((user) => user.id !== action.id),
        // };
        default:
            throw new Error("Unhandled action");
    }
}

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <div className="App">
                <h1>User Table</h1>
                <CreateUser />

                <UserList users={users} />

                <div>활성 사용자수 : {count}</div>
            </div>
        </UserDispatch.Provider>
    );
}

export default App;
