import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "./apis/user";

function App() {
  // State to store users
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    const getUsers = async () => {
      const fetchedUsers = await fetchAllUsers();
      setUsers(fetchedUsers); // Update the state with fetched users
      console.log(fetchedUsers);
    };

    getUsers(); // Call the async function to fetch users
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <div className="App"></div>;
}

export default App;
