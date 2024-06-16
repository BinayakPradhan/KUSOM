import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import CartAmountToggle from "../components/CartAmountToggle";
import { useProductContext } from "../context/productContext";

const Product = () => {
  const { products, getSingleProduct, isSingleLoading } = useProductContext();
  const [amount, setAmount] = useState(1);
  const [product, setProduct] = useState({});
  const { idd } = useParams();

  useEffect(() => {
    if (!isSingleLoading) {
      // Fetch the single product only if products are loaded and not loading
      const product = products.find((product) => product.product_id === idd);
      setProduct(product);
      if (product) {
        getSingleProduct(product); // Assuming getSingleProduct sets the single product in context
      }
    }
  }, [products, getSingleProduct, idd, isSingleLoading]);

  const setDecrease = () => {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  if (isSingleLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageNavigation title={product.product_name} />
      <section className="flex flex-col justify-between lg:flex-row pt-5 px-4 gap-12 bg-white">
        <div className="flex flex-col gap-2 lg:w-3/4">
          {/* main image */}
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-[80%] aspect-square object-cover rounded-xl"
          />
          {/* Div for alternate images */}
          <div></div>
        </div>
        <div className="flex flex-col gap-4 p-5 pt-0 lg:w-2/4">
          <div>
            <h1 className="text-5xl font-bold uppercase">
              {product.product_name}
            </h1>
          </div>

          <h6 className="text-4xl font-semibold text-warning mt-3">
            {`Rs. ${product.product_price}`}
          </h6>
          <hr className="max-w-full w-[100%] border-[0.1rem] border-solid border-textColor" />
          <div className="mt-2">
            <div className="flex flex-row items-center py-1 rounded ">
              <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            </div>

            <button className="flex items-center gap-4 justify-center bg-warning py-2 w-full text-lightColor rounded-lg shadow mt-5 hover:bg-primary hover:text-textColor border-none">
              <span className="font-semibold py-3 px-2 rounded-xl h-full">
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-4 mx-4 my-10 md:grid-cols-3"></div>
    </>
  );
};

export default Product;
