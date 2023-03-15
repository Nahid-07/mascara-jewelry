import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allusers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <thead className="dark:bg-gray-700">
            <tr className="text-left">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-opacity-20 text-lg"
              >
                <td className="p-3">
                  <p>{user._id}</p>
                </td>
                <td className="p-3">
                  <p>{user.name}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3">
                  <p>
                    <button>Delete</button>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
