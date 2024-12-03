import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // State to store user input for search fields
  const [searchParams, setSearchParams] = useState({
    id: '',
    cnic: '',
    name: ''
  });

  // Handle input change for each field (id, cnic, name)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      onSearch(searchParams);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <input
          type="text"
          name="id"
          value={searchParams.id}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search by ID"
          className="border-2 border-gray-300 p-2 rounded mb-2"
        />
        <input
          type="text"
          name="cnic"
          value={searchParams.cnic}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search by CNIC"
          className="border-2 border-gray-300 p-2 rounded mb-2"
        />
        <input
          type="text"
          name="name"
          value={searchParams.name}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Search by Name"
          className="border-2 border-gray-300 p-2 rounded"
        />
      </div>
      <button
        onClick={() => onSearch(searchParams)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

// Usage example for SearchBar in the main app
const App = () => {
  // Handle the search logic
  const handleSearch = (searchParams) => {
    const { id, cnic, name } = searchParams;
    console.log('Searching for user with:', searchParams);

    // Here you would call the backend or filter data based on the input
    // For example, use getUser(id, cnic, name) to make the search API call
    // You can modify this part based on your logic, for example:
    // const result = getUser({ id, cnic, name });

    // For now, we just log the search params
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl mb-4">Search Users</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
