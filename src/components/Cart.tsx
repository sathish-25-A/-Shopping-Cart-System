import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateItemQuantity, removeItem } from "../redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert(`Total amount of $${totalPrice} has been paid. Thank you for shopping!`);
  };

  return (
    <div className="shoping_Cart ">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
      <button onClick={handlePayment} disabled={items.length === 0}>
        Proceed to Payment
      </button>
    </div>
  );
}

export default Cart;
