import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 mb-4 w-full" required />
        <input type="password" placeholder="Password" className="border p-2 mb-4 w-full" required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
