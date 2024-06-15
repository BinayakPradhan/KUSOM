import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/productContext";
export default function Shop() {
  const { products } = useProductContext();
  return (
    <div className="flex flex-wrap mx-[2%] gap-10">
      {products.map((product) => (
        <ProductCard
          key={product.product_id}
          id={product.product_id}
          img={product.p_img}
          name={product.p_name}
          price={product.p_price}
          Quality={product.p_quality}
          quantity={product.p_quantity}
        />
      ))}
    </div>
  );
}
