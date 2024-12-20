import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state;
  //uselocation hook in react is used to access the current location object in your application provides
  //thehash
  // key
  // pathname
  // search
  // state
  // and other stuffs
  return (
    <div className="flex justify-center items-center pt-6">
      <div className="p-4 max-w-[100rem]">
        <h2 className="text-2xl font-bold">User Details</h2>
        <div className="p-4 border rounded-lg">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>CNIC:</strong> {user.cnic}
          </p>
          <p>
            <strong>Created At:</strong> {user.created_at}
          </p>
          <p>
            <strong>Payment:</strong> {user.payment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
