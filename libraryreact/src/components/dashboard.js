import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <br />

      <div class="row">
        <div class="col-md-5">
          <h5>CUSTOMERS:</h5>
          <hr />
          <div class="card card-body">
            <table class="table table-sm">
              <tr>
                <th></th>
                <th>Customer</th>
                <th>Phone</th>
              </tr>

              {/* {% for customer in customers %}
                        <tr>
                            <td><a class="btn btn-sm btn-info" href="{% url 'customer' customer.id %}">View</a></td>
                            <td>{{customer.name}}</td>
                            <td>{{customer.phone}}</td>
                        </tr>
                    {% endfor %} */}
            </table>
          </div>
        </div>

        <div class="col-md-7">
          <h5>LAST 5 TRANSACTIONS</h5>
          <hr />
          <div class="card card-body">
            <table class="table table-sm">
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Date</th>
                <th>Status</th>
                <th>Update</th>
                <th>Remove</th>
              </tr>

              {/* {% for order in orders %}
                        <tr>
                            <td>{{order.customer}}</td>
                            <td>{{order.product}}</td>
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

export default Dashboard;
