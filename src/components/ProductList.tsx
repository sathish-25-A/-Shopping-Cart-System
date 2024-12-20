import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CartItem } from "../redux/cartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  const products: CartItem[] = [
    { id: 1, name: "Product A", price: 100, quantity: 1 },
    { id: 2, name: "Product B", price: 200, quantity: 1 },
    { id: 3, name: "Product C", price: 300, quantity: 1 },
    { id: 4, name: "Product D", price: 400, quantity: 1 },
    { id: 5, name: "Product E", price: 500, quantity: 1 },
  ];

  const productImages: { [key: number]: string } = {
    1: "https://via.placeholder.com/150/1",
    2: "https://via.placeholder.com/150/2",
    3: "https://via.placeholder.com/150/3",
    4: "https://via.placeholder.com/150/4",
    5: "https://via.placeholder.com/150/5",
  };

  const handleAddToCart = (product: CartItem) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img
              src={productImages[product.id]}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
