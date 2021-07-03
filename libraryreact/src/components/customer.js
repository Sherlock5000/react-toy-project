import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";

const Customer = () => {
  return (
    <>
      <Navbar />
      <div class="row">
        <div class="col-md">
          <div class="card card-body">
            <h5>Customer:</h5>
            <hr />
            <a
              class="btn btn-outline-info  btn-sm btn-block"
              href="{% url 'create_order' customer.id %}"
            >
              Place Order
            </a>
          </div>
        </div>

        <div class="col-md">
          <div class="card card-body">
            <h5>Contact Information</h5>
            <hr />
            {/* <p>Email: {{customer.email}}</p> */}
            {/* <p>Phone: {{customer.phone}}</p> */}
          </div>
        </div>

        <div class="col-md">
          <div class="card card-body">
            <h5>Total Orders</h5>
            <hr />
            <h1 style={{ textAlign: "center", padding: "10px" }}></h1>
          </div>
        </div>
      </div>

      <br />
      {/* <div class="row">
        <div class="col">
          <div class="card card-body">
            <form method="get">
              {{myFilter.form}}

              <button class="btn btn-primary" type="submit"></button>
            </form>
          </div>
        </div>
      </div> */}
      <br />

      <div class="row">
        <div class="col-md">
          <div class="card card-body">
            <table class="table table-sm">
              <tr>
                <th>Product</th>
                <th>Note</th>
                <th>Date Ordered</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>

              {/* {% for order in orders %} */}

              {/* <tr>
                            <td>{{order.product}}</td>
                            <td>{{order.note}}</td>
                            <td>{{order.date_created}}</td>
                            <td>{{order.status}}</td>
                            <td><a class="btn btn-sm btn-info" href="{% url 'update_order' order.id %}">Update</a></td>

                            <td><a class="btn btn-sm btn-danger" href="{% url 'delete_order' order.id %}">Delete</a></td>
                        </tr>
                        {% endfor %} */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
