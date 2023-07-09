import React from "react";
import "./Customers.css";

function Customers({ user }) {
    return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>
                <img src={user.image} alt={user.name} width="64" height="64" />
            </td>
            <td>{user.name}</td>
            <td>{user.birthday}</td>
            <td>{user.gender}</td>
            <td>{user.job}</td>
        </tr>
    );
}

export default Customers;
