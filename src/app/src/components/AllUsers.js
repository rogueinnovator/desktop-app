import { useEffect, React, useState } from "react";
import { fetchAllUsers } from "../apis/user";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState({
    name: "",
    cnic: "",
  });
  //1.DELETE USER
  const deleteUser = (id) => {
    console.log("this is the id of the user", id);
  };
  // TO RETRIEVE ALLUSERS AT RENDER
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers);
    };
    getUsers();
    console.log(users);
  }, []);
  //2.HANDLE
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //3.SEARCH LOGIC
  const searchUser = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);

      // if (e.target.value.cnic !== "") {
      //   console.log("searhed by ", searchParams.cnic);
      // } else if (!searchParams.name !== "") {
      //   console.log("searhed by ", searchParams.name);
      // }
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
              onKeyPress={() => {
                searchUser();
              }}
              placeholder="Search by Name"
              className="input input-bordered rounded-full w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="flex-none px-2">
          <div className="form-control">
            <input
              type="text"
              name="cnic"
              onChange={handleSearch}
              onKeyPress={searchUser}
              value={searchParams.cnic}
              placeholder="Search by CNIC"
              className="input input-bordered rounded-full w-24 md:w-auto"
            />
          </div>
        </div>
        <button className="btn rounded-full" onClick={searchUser}>
          Search
        </button>

        <div className="absolute right-2">
          {" "}
          <Link className="btn rounded-full" to="/createUser">
            {" "}
            +ADD
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>email</th>
              <th>created at</th>
              <th>updated at</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <tbody key={index}>
              {/* row 1 */}
              <tr>
                <th>{user.id}</th>
                <th>{user.name.toUpperCase()}</th>
                <td>{user.email}</td>
                <td> {user.created_at}</td>
                <td>{user.updated_at}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                    className="badge badge-error gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-4 w-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
