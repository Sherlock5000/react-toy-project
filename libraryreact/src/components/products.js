import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar/navbar";

const Products = () => {
  return (
    <>
      <div class="row">
        <div class="col-md">
          <div class="card card-body">
            <h5>Products</h5>
          </div>
          <div class="card card-body">
            <table class="table">
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
              </tr>

              {/* {% for i in products %}
							<tr>
								<td>{{i.name}}</td>
								<td>{{i.category}}</td>
								<td>{{i.price}}</td>
							</tr>
						{% endfor %} */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
