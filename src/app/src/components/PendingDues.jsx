import React from "react";

const PendingDues = ({ dues }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Pending Dues</h2>
      <ul className="list-disc pl-5">
        {dues.length > 0 ? (
          dues.map((due, index) => (
            <li key={index} className="mb-2">
              <span className="font-medium">{due.tenantName}</span>: $
              {due.amount}
            </li>
          ))
        ) : (
          <li>No pending dues</li>
        )}
      </ul>
    </div>
  );
};

export default PendingDues;
