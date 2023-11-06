import React from "react";


function SignupForm() {
    return (
        <form class="login-div">
        <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control login-input"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control login-input"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button class="btn login-btn btn-primary w-100 py-2" type="submit">
          Sign Up
        </button>
        <p class="mt-5 mb-3 text-body-secondary">© Dr.Paradox</p>
      </form>
    );
  }



export default SignupForm;