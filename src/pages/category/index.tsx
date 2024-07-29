import * as C from "./stiled";
import React from 'react';
import { CartItem } from "../../types/CardType";
import { addToCart } from '../../service/movieService'; // Importe a função addToCart

interface MovieCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  nomeFantasia:string;
  initialDate:string;
  atividade:string;
  endereco:string;
  tel1:string;
  tel2:string;
  email:string
  situaçaoCadastral:string
  onAddToCart: () => void; // Ajuste para que onAddToCart não receba parâmetros
}
  

export const MovieCard: React.FC<MovieCardProps> = ({ id, title,price,image,email,nomeFantasia,initialDate,situaçaoCadastral,atividade,endereco,tel1,tel2, onAddToCart  }) => {
  const handleAddToCart = () => {
    const item: CartItem = { id, title, price, image,nomeFantasia,initialDate,email,situaçaoCadastral,atividade,endereco,tel1,tel2}; // Cria o objeto CartItem com os dados do filme
    // addToCart(item); // Chama a função do serviço para adicionar ao carrinho
    console.log('Item adicionado:', item); // Para verificar no console
  };
  
  return (
   
    <C.Card>
           <C.MovieImage src={image} alt={title} />
      {/* <img src={image} alt={title} /> */}
      <C.Title>{title}</C.Title>
      <C.Title>{nomeFantasia}</C.Title>
      <C.Title>{situaçaoCadastral}</C.Title>
      <C.Title>{initialDate}</C.Title>
      <C.Title>{atividade}</C.Title>


      <C.Title>{tel1}</C.Title>
      <C.Title>{tel2}</C.Title>
      <C.Title>{email}</C.Title>


      
      <C.Title>{initialDate}</C.Title>


      <C.Footer>
        <C.CartIcon />
        <C.AddToCartButton onClick={handleAddToCart}>Adicionar ao carrinho</C.AddToCartButton>

      </C.Footer>
    </C.Card>
     
  );
};
