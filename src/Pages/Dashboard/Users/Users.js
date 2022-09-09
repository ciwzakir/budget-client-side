import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";
import UseUsers from "../../../Hooks/UseUsers";

const Users = () => {
  const [users] = UseUsers();
  const [user] = useAuthState(auth);
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://secret-mesa-56031.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center my-10">All users</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Ser No</th>
            <th>User ID</th>
            <th>Make Admin</th>
            <th>User Email</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>
                {role !== "admin" && (
                  <button onClick={makeAdmin} className="btn btn-info">
                    Make Admin
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-danger">Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
