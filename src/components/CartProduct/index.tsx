import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { formatPrice } from '../../util/format';

interface CartProductProps {
  handleProductIncrement: (productId: number) => void;
  handleRemoveProduct: (productId: number) => void;
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export function CartProduct({id, title, price, image, handleProductIncrement, handleRemoveProduct}:CartProductProps) {

  return (
    <tr data-testid="product">
      <td>
        <img src={image} alt={title} />
      </td>
      <td>
        <strong>{title}</strong>
        <span></span>
      </td>
      <td>
        <div>
          <button
            type="button"
            data-testid="decrement-product"
          // disabled={product.amount <= 1}
          // onClick={() => handleProductDecrement()}
          >
            <MdAddCircleOutline size={20} />
          </button>
          <input
            type="text"
            data-testid="product-amount"
            readOnly
            value={2}
          />
          <button
            type="button"
            data-testid="increment-product"
            onClick={() => handleProductIncrement(id)}
          >
            <MdAddCircleOutline size={20} />
          </button>
        </div>
      </td>
      <td>
        <strong>{formatPrice(price)}</strong>
      </td>
      <td>
        <button
          type="button"
          data-testid="remove-product"
          onClick={() => handleRemoveProduct(id)}
        >
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  )
}