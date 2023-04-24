import React from "react";
import "./Usertable.css";
export default function UserTable({ users }) {
  return (
    <div className="table-container">
      <table>
        <thead className="sticky">
          <tr>
            {users[0]?._id && <th>ID</th>}
            {users[0]?.first_name && <th>First Name</th>}
            {users[0]?.last_name && <th>Last Name</th>}
            {users[0]?.email && <th>Email</th>}
            {users[0]?.city && <th>City</th>}
            {users[0]?.car && <th>Car</th>}
            {users[0]?.income && <th>Income</th>}
            {users[0]?.phone_price && <th>Phone Price</th>}
            {users[0]?.quote && <th>Quote</th>}
            {users[0]?.gender && <th>Gender</th>}
            {users[0]?.count && <th>Count</th>}
            {users[0]?.average_income && <th>Average Income</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              {user.first_name && <td>{user.first_name}</td>}
              {user.last_name && <td>{user.last_name}</td>}
              {user.email && <td>{user.email}</td>}
              {user.city && <td>{user.city}</td>}
              {user.car && <td>{user.car}</td>}
              {user.income && <td>{user.income}</td>}
              {user.phone_price && <td>{user.phone_price}</td>}
              {user.quote && <td>{user.quote}</td>}
              {user.gender && <td>{user.gender}</td>}
              {user.count && <td>{user.count}</td>}
              {user.average_income && <td>{user.average_income}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
