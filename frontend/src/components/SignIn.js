import React from "react";

function SignIn() {
  return (
    <div className="container">
      <h1>Sign In</h1>
      <form>
        <div>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
