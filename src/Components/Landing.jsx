import React from "react";


function Landing() {
    return (
      <div>
        <div class="p-5 text-center bg-body-tertiary rounded-3">
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*psYl0y9DUzZWtHzFJLIvTw.png" class="bi mt-4 mb-3 logo-frontpage" alt="logo" />
          <h1 class="text-body-emphasis">MEDIUM</h1>
          <p class="col-lg-8 mx-auto fs-5 text-muted">
            Post your Articles and Blogs without any censorships.
          </p>
          <div class="d-inline-flex gap-2 mb-5">
            <button
              class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill login-btn"
              type="button"
            >
              LogIn 
              <i class="fa-solid fa-right-to-bracket" style={{color: '#fff', paddingLeft: "5px"}}></i>
            </button>
            <button
              class="btn btn-outline-secondary btn-lg px-4 rounded-pill"
              type="button"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    );
  }



export default Landing;