import { format } from "date-fns";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Jobs Available</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
          <table className="w-full text-gray-700">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Customer Name</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Interested</th>
              </tr>
            </thead>
            <tbody>
              {/* {jobPost.map((order) => (
                <tr key={order.id}>
                  
                  <td>
                    <Link to={`/product/${order.product_id}`}>
                      #{order.product_id}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/customer/${order.customer_id}`}>
                      {order.customer_name}
                    </Link>
                  </td>
                  <td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                  <td>{order.order_total}</td>
                  <td>{order.shipment_address}</td>
                  <td>abc</td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
