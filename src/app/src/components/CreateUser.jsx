import React, { useState } from "react";
import { createUser } from "../apis/user";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    phone_no: "",
    plate_no: "",
    address: "",
    payment: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-slate-600 shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-white mb-6">Add Tenant ...</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block p-2 text-white font-medium ">
            Tenant Name
          </label>
          <input
            type="text"
            placeholder="name"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
          <label className="block p-2 text-white font-medium " htmlFor="phone">
            cnic{" "}
          </label>
          <input
            type="number"
            placeholder="cnic"
            id="cnic"
            name="cnic"
            onChange={handleChange}
            value={formData.cnic}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
          <label className="block p-2 text-white font-medium " htmlFor="phone">
            Phone{" "}
          </label>
          <input
            type="number"
            placeholder="phone"
            id="phone_no"
            name="phone_no"
            onChange={handleChange}
            value={formData.phone_no}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
          <label
            className="block p-2 text-white font-medium "
            htmlFor="plate_no"
          >
            Plate no
          </label>
          <input
            type="text"
            placeholder="plate"
            id="plate_no"
            name="plate_no"
            onChange={handleChange}
            value={formData.plate_no}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
          <label
            className="block p-2 text-white font-medium "
            htmlFor="address"
          >
            Address{" "}
          </label>
          <input
            type="text"
            placeholder="address"
            id="address"
            name="address"
            onChange={handleChange}
            value={formData.address}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
          <label className="block p-2 text-white font-medium " htmlFor="number">
            Payment{" "}
          </label>
          <input
            type="number"
            placeholder="payment"
            id="payment"
            name="payment"
            onChange={handleChange}
            value={formData.payment}
            className="input input-bordered w-full max-w-4xl rounded-full"
            required
          />{" "}
        </div>
        <div className="flex justify-center">
          {" "}
          <button className="btn rounded-full" onClick={handleSubmit}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
