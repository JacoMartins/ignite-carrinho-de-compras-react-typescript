import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../components/Product';
import { formatPrice } from '../../util/format';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};
    newSumAmount[product.id] = product.amount;
    
    return newSumAmount;
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('/products');

      const data = response.data.map(
        product => (
          {
            ...product, 
            priceFormatted: formatPrice(product.price)
          }
        )
      );

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <ProductList>
      {products.map(
        (product) => {
          return(
            <Product key={product.id} id={product.id} title={product.title} price={product.price} priceFormatted={product.priceFormatted} image={product.image} handleAddProduct={handleAddProduct} cartItemsAmount={cartItemsAmount}/>
          )
        }
      )}
    </ProductList>
  );
};

export default Home;
