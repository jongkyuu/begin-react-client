import "./App.css";
import Customers from "./Customers";

function App() {
    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <Customers user={user} key={user.id} />
                    ))}
                </tbody>
            </table>
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
