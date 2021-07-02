import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";

const Delete = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-6">
          <div class="card card-body">
            <p>Are you sure you want to delete?</p>

            <form action="{% url 'delete_order' item.id  %}" method="POST">
              {/* {% csrf_token %} */}
              <a class="btn btn-warning" href="{% url 'home' %}">
                Cancel
              </a>

              <input class="btn btn-danger" type="submit" name="Confirm" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
