import { formatPrice } from '../../util/format';

import { MdAddShoppingCart } from "react-icons/md";

import { Li } from "./styles";

interface cartItem{
  [key:number]: number;
}

interface ProductProps {
  handleAddProduct: (id:number) => void;
  id: number;
  title: string;
  price: number;
  priceFormatted: string;
  image: string;

  cartItemsAmount: cartItem;
}

export function Product({id, title, price, priceFormatted, image, handleAddProduct, cartItemsAmount}:ProductProps) {
  return(
    <Li>
        <img src={image} alt={title} />
        <strong>{title}</strong>
        <span>{priceFormatted}</span>
        <button
          type="button"
          data-testid="add-product-button"
          onClick={() => handleAddProduct(id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {cartItemsAmount[id] || 0}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </Li>
  )
}