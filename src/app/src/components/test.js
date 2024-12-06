import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // User to delete
  const users = [
    { id: 1, name: "John Doe", cnic: "12345-6789012-3", created_at: "2024-01-01" },
    { id: 2, name: "Jane Smith", cnic: "98765-4321098-7", created_at: "2024-02-01" },
  ];

  const navigate = useNavigate();

  const handleRowClick = (user) => {
    navigate("/userDetails", { state: { user } });
  };

  const handleDeleteClick = (event, user) => {
    event.stopPropagation();
    setSelectedUser(user); // Set the user to be deleted
    setShowModal(true); // Show the modal
  };

  const handleConfirmDelete = async () => {
    if (selectedUser) {
      console.log(`Deleting user with ID ${selectedUser.id}`);
      // Call the delete API or function here
      await deleteUser(selectedUser.id);
      setShowModal(false); // Close the modal
    }
  };

  const handleCancelDelete = () => {
    setSelectedUser(null); // Clear the selected user
    setShowModal(false); // Close the modal
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="flex justify-center p-4 text-2xl font-bold">User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CNIC</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="hover:bg-gray-200 cursor-pointer"
              onClick={() => handleRowClick(user)}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.cnic}</td>
              <td>{user.created_at}</td>
              <td>
                <button
                  onClick={(event) => handleDeleteClick(event, user)}
                  className="badge badge-error gap-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete user {selectedUser.name}?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCancelDelete}
                className="btn btn-secondary mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
