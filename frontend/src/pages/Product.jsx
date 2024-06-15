import { useEffect, useState } from "react";

// import GiShoppingCart from "react-icons/gi";
import Star from "../components/Star";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import PageNavigation from "../components/PageNavigation";
import CartAmountToggle from "../components/CartAmountToggle";

const API = "http://127.0.0.1:9000/shop";
const Product = () => {
  const [amount, setAmount] = useState(1);
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { idd } = useParams();
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    setAmount(amount + 1);
  };
  const { id, name, img, price, Quality } = singleProduct;
  console.log("singleProduct in Product", singleProduct);
  useEffect(() => {
    getSingleProduct(`${API}/${idd}`);
  }, [idd]);

  // console.log(id);
  if (isSingleLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <PageNavigation title={name} />
      <section className="flex flex-col justify-between lg:flex-row pt-5 px-4 gap-12 bg-white">
        <div className="flex flex-col gap-2 lg:w-3/4">
          {/* main image */}
          <img
            src={img}
            alt={name}
            className="w-full h-[80%] aspect-square object-cover rounded-xl"
          />
          {/* Div for alternate images */}
          <div></div>
        </div>
        <div className="flex flex-col gap-4 p-5 pt-0 lg:w-2/4">
          <div>
            <Star stars={Quality} />
            <h1 className="text-5xl font-bold uppercase">{name}</h1>
          </div>

          <h6 className="text-4xl font-semibold text-warning mt-3">
            {`Rs. ` + price}
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
              {/* <GiShoppingCart className="text-[38px] " /> */}
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
