import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div id="main-sign-up-sign-in-container">
      <div
        className="card"
        style={{
          width: "30rem",
          backgroundColor: "#f0f0f0",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Sign Up</h5>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputUserName" className="form-label">
                Username
              </label>
              <input
                type="username"
                className="form-control"
                id="inputUserName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="initialInputPassword4" className="form-label">
                Input Password
              </label>
              <input
                type="initialInputPassword4"
                className="form-control"
                id="inputUserName4"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>

            <div class="col-12">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
