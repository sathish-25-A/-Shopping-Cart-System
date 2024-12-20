import { CartItem as CartItemType } from "../redux/cartSlice";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

function CartItem(props: CartItemProps) {
  const { item, onUpdateQuantity, onRemoveItem } = props;

  return (
    <li>
      {item.name} - ${item.price} x {item.quantity}
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
      />
      <button onClick={() => onRemoveItem(item.id)}>Remove</button>
    </li>
  );
}

export default CartItem;
