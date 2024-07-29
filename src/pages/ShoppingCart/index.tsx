import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import * as C from './stiled'; // Supondo que seu arquivo estilizado é chamado de stiled
import { CartItem, getCartItems } from '../../service/movieService'; // Importe a função getCartItems e o tipo CartItem

export const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Estado para armazenar os itens do carrinho

  useEffect(() => {
    // Carrega os itens do carrinho ao inicializar o componente
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const [quantity, setQuantity] = useState(1); // Estado para a quantidade de cada item

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // Impede que a quantidade fique abaixo de 1
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), 1); // Garante que a quantidade não fique abaixo de 1
    setQuantity(value);
  };

  const handleDeleteItem = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <C.Container>
      <C.Nav>
        <div>WeMovies</div>
        <NavLink to="/shoppingCart" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
          <C.CartIcon/>
        </NavLink>
      </C.Nav>
      <C.Content>
        {cartItems.map(item => (
          <C.Card key={item.id}>
            <C.Header>
              <C.Image src={item.image} alt={item.title} />
              <C.MovieTitle>{item.title}</C.MovieTitle>
              <C.QuantityInputContainer>
                <C.Button onClick={decreaseQuantity}>-</C.Button>
                <C.QuantityInput value={quantity} onChange={handleQuantityChange} />
                <C.Button onClick={increaseQuantity}>+</C.Button>
              </C.QuantityInputContainer>
              <C.PriceContainer>
                <span className='valorItem'>R$ {item.price.toFixed(2)}</span>
              </C.PriceContainer>
              <C.Subtotal>R$ {(item.price * quantity).toFixed(2)}</C.Subtotal>
              <div style={{ fontSize: '24px', marginLeft: '-10px' }}>
                <C.TrashIcon onClick={() => handleDeleteItem(item.id)} />
              </div>
            </C.Header>
          </C.Card>
        ))}
        <C.Footer>
          <C.TotalLabel>Total:</C.TotalLabel>
          <C.TotalValue>
            R$ {cartItems.reduce((acc, item) => acc + item.price * quantity, 0).toFixed(2)}
          </C.TotalValue>
        </C.Footer>
        <C.CheckoutButton>Finalizar Pedido</C.CheckoutButton>
      </C.Content>
    </C.Container>
  );
};
