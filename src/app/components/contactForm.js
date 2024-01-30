"use client"


import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    console.log('Form submitted:', formState);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className=" px-6 py-4 rounded shadow-md max-w-md w-full bg-white  ">
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block  text-black  text-base font-bold mb-1" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-100  font-semibold  text-base  text-black border-b-2 border-blue-500 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black  text-base font-bold mb-1" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full px-3 py-2   bg-gray-100   font-semibold  text-base  text-black   border-b-2 border-blue-500  rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black  text-base font-bold mb-1" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formState.description}
              onChange={handleChange}
              className="w-full px-3 py-2  bg-gray-100  font-semibold  text-base  text-black  border-b-2 border-blue-500  rounded focus:outline-none focus:border-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;