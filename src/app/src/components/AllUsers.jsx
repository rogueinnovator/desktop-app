import { useEffect, React, useState } from "react";
import { deleteUser, fetchAllUsers, getUser } from "../apis/user";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
const AllUsers = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: "",
    cnic: "",
  });
  const [searchedUser, setSearchedUser] = useState([]);
  //1.DELETE USER
  const handleDeleteClick = async (e, user) => {
    e.stopPropagation();
    setSelectedUser(user);
    document.getElementById("my_modal_1").showModal();
  };
  //2.CONFIRM THE USER DELETION
  const handleConfirmDelete = async () => {
    if (selectedUser) {
      await deleteUser(selectedUser.id);
    }
  };
  //3.CANCEL LOGIC
  const handleCancelDelete = async () => {
    setSelectedUser(null);
  };
  // TO RETRIEVE ALLUSERS AT RENDER
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers);
    };
    getUsers();
  }, []);
  //LOGIC TO CLEAR THE SEARCH INPUT
  const handleFocus = (fieldName) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [fieldName]: "",
    }));
  };
  //4.HANDLE THE SEARCH LOGIC
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //NAVIGATION AND USER TRANSFER
  const handleClick = (user) => {
    navigate("/userDetails", { state: { user } });
  };
  //3.SEARCH LOGIC
  const searchUser = async (e) => {
    if (e.key === "Enter") {
      try {
        const user = await getUser(e.target.value);
        if (user.length === 0) {
          setIsUser(true);
        } else if (user.length > 0) {
          setIsUser(false);
        }
        console.log("this is isuser", user);
        setSearchedUser(user);
      } catch (error) {}
    }
  };

  return (
    <div className="pt-6">
      <div className="flex justify-start pb-3">
        <div className="flex-none px-2">
          <div className="form-control">
            <input
              type="text"
              name="name"
              value={searchParams.name}
              onChange={handleSearch}
              onFocus={() => {
                handleFocus("cnic");
              }}
              onKeyPress={(e) => {
                searchUser(e);
              }}
              placeholder="Search by Name"
              className="input input-bordered rounded-full w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="flex-none px-2">
          <div className="form-control">
            <input
              type="number"
              name="cnic"
              onChange={handleSearch}
              onKeyPress={(e) => {
                searchUser(e);
              }}
              onFocus={() => {
                handleFocus("name");
              }}
              value={searchParams.cnic}
              placeholder="Search by CNIC"
              className="input input-bordered rounded-full w-24 md:w-auto"
            />
          </div>
        </div>
        {/* <button className="btn rounded-full" onClick={searchUser}>
          Search
        </button> */}

        <div className="absolute right-2">
          {" "}
          <Link className="btn rounded-full" to="/createUser">
            {" "}
            +ADD
          </Link>
        </div>
      </div>
      {isUser ? (
        <div className="flex justify-center text-2xl pt-4 font-bold text-red-500">
          No user found
        </div>
      ) : (
        searchedUser.length > 0 && (
          <div className="overflow-x-auto p-4">
            <h2 className="flex justify-center p-4 text-2xl font-bold">
              Search Record
            </h2>

            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Cnic</th>
                  <th>created at</th>
                  <th>payment</th>
                </tr>
              </thead>
              {searchedUser.map((users, index) => (
                <tbody key={index}>
                  {/* row 1 */}
                  <tr
                    className="hover cursor-pointer text-lg"
                    onClick={() => {
                      handleClick(users);
                    }}
                  >
                    <th>{users.id}</th>
                    <th>{users.name.toUpperCase()}</th>
                    <td>{users.cnic}</td>
                    <td> {users.created_at}</td>
                    <td>{users.payment}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          deleteUser(e, users.id);
                        }}
                        className="btn btn-outline btn-error rounded-full"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )
      )}

      <div className="overflow-x-auto p-4">
        <h2 className="flex justify-center p-4 text-2xl font-bold">
          All Tenats
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>CNIC</th>
              <th>Created At</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                onClick={() => {
                  handleClick(user);
                }}
                className="hover cursor-pointer text-lg"
                key={index}
              >
                <td>{user.id}</td>
                <td>{user.name.toUpperCase()}</td>
                <td>{user.cnic}</td>
                <td>{user.created_at}</td>
                <td>{user.payment}</td>
                <td>
                  <button
                    onClick={(e) => handleDeleteClick(e, user)}
                    className="btn btn-outline btn-error rounded-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        selectedUser={selectedUser}
        handleCancelDelete={handleCancelDelete}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default AllUsers;
