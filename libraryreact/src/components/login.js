import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";
import "./login.css";

const Login = () => {
  return (
    <>
      <div class="container h-100" />
      <div class="d-flex justify-content-center h-100" />
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <h3 id="form-title">LOGIN</h3>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form method="POST" action="">
            {/* {% csrf_token %} */}
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>

              <input
                type="text"
                name="username"
                placeholder="Username..."
                class="form-control"
              />
            </div>

            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password..."
                class="form-control"
              />
            </div>

            <div class="d-flex justify-content-center mt-3 login_container">
              <input class="btn login_btn" type="submit" value="Login" />
            </div>
          </form>
        </div>

        {/* {% for message in messages %}
					<p id="messages">{{message}}</p>
				{% endfor %}			 */}

        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Don't have an account?{" "}
            <a href="{% url 'register' %}" class="ml-2">
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div />
      <div />
    </>
  );
};

export default Login;
