import React from 'react';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Register</h2>
        <input type="text" placeholder="Name" className="border p-2 mb-4 w-full" required />
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" required />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
};

export default Register;
