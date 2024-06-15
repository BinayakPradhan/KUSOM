import { useState } from "react";
import "./UserProduct.css";

const UserProduct = () => {
  const [formData, setFormData] = useState({
    p_name: "",
    p_info: "",
    p_img: "",
    p_price: "",
    p_quantity: "",
    p_quality: "",
    s_email: "",
  });

  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:9000/users/postProduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("response from login", data);
      } else {
        alert("Invalid credentials");
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <h1>Add a Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="ml-2">
              Name:
            </label>
            <input
              className="p-3 border rounded-2xl border-gray-150"
              type="text"
              id="p_name"
              name="p_name"
              value={formData.p_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="ml-2">
              Email:
            </label>
            <input
              className="p-3 border rounded-2xl border-gray-150"
              type="email"
              id="s_email"
              name="s_email"
              value={formData.s_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="info" className="ml-2">
              Information:
            </label>
            <textarea
              className="p-3 border rounded-2xl border-gray-150"
              id="p_info"
              name="p_info"
              value={formData.p_info}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imgUrl" className="ml-2">
              Image URL:
            </label>
            <input
              className="p-3 border rounded-2xl border-gray-150"
              type="url"
              id="p_img"
              name="p_img"
              value={formData.p_img}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inline-group">
            <div className="form-group">
              <label htmlFor="price" className="ml-2">
                Price:
              </label>
              <input
                className="p-3 border rounded-2xl border-gray-150"
                type="number"
                id="p_price"
                name="p_price"
                value={formData.p_price}
                onChange={handleChange}
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity" className="ml-2">
                Quantity:
              </label>
              <input
                className="p-3 border rounded-2xl border-gray-150"
                type="number"
                id="p_quantity"
                name="p_quantity"
                value={formData.p_quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="quality" className="ml-2">
                Quality:
              </label>
              <input
                className="p-3 border rounded-2xl border-gray-150"
                type="text"
                id="p_quality"
                name="p_quality"
                value={formData.p_quality}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            className="button bg-[#010A4F] text-base px-4 py-3"
            role="button"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      </div>
      <div className="terms-section">
        <h2>Terms and Conditions</h2>
        <ul>
          <li>
            <input className="text-base px-4 py-3" type="checkbox" id="term1" />
            <label htmlFor="term1"> I agree to the terms and conditions.</label>
          </li>
          <li>
            <label htmlFor="term2">
              {" "}
              Relevance: All posts must be relevant to the platform purpose and
              community. Random or nonsensical posts will be removed.
            </label>
          </li>
          <li>
            <label htmlFor="term3">
              Accuracy: Information in posts should be truthful and verifiable.
            </label>
          </li>
          <li>
            <label htmlFor="term4">
              {" "}
              Respect: Users must treat each other with respect. Avoid hate
              speech, harassment, or bullying.
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProduct;
