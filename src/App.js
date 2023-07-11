import Customers from "./Customers";
import Counter from "./Counter";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

function App() {
    return (
        <div className="App">
            <h1>User Table</h1>
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
                        <Customers user={user} key={user.id} />
                    ))}
                </TableBody>
            </Table>

            <Counter />
        </div>
    );
}

let users = [
    {
        id: 1,
        image: "https://picsum.photos/id/1/64/64",
        name: "John Doe",
        birthday: "1985-07-15",
        gender: "Male",
        job: "Software Engineer",
    },
    {
        id: 2,
        image: "https://picsum.photos/id/2/64/64",
        name: "Jane Smith",
        birthday: "1990-03-22",
        gender: "Female",
        job: "Marketing Manager",
    },
    {
        id: 3,
        image: "https://picsum.photos/id/3/64/64",
        name: "Alex Johnson",
        birthday: "1978-11-05",
        gender: "Male",
        job: "Teacher",
    },
];

export default App;
