import React from "react";
import { useState } from "react";
import "./LoginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");

  function changeName(e) {
    setUsername(e.target.value);
  }
  function changeEmail(e) {
    setEmail(e.target.value);
  }
  function changePassword(e) {
    setPassword(e.target.value);
  }
  function changeCpass(e) {
    setCpass(e.target.value);
  }

  function saveChanges(e) {
    console.log(username, email, password, cpass);
    props.saveNewUser(username, email, password, cpass);
  }

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Sign up for TweetToMe
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label for="exampleInputUsername" className="form-label">
                Username
              </label>
              <input
                value={username}
                onChange={changeName}
                type="text"
                className="form-control"
                id="exampleInputUsername"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                {" "}
                Email Address
              </label>
              <input
                value={email}
                onChange={changeEmail}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={changePassword}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputCpassword1" className="form-label">
                Confirm Password
              </label>
              <input
                value={cpass}
                onChange={changeCpass}
                type="password"
                className="form-control"
                id="exampleConfirmPassword1"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={saveChanges}
            data-bs-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
