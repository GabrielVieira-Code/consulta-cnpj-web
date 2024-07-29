// src/pages/category/styled.ts
import styled from 'styled-components';

// Estilo para o Card
export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px; /* Bordas arredondadas do cartão */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra suave do cartão */
  padding: 20px;
  width: 60vw; /* Largura do cartão como 60% da largura da viewport */
  max-width: 800px; /* Largura máxima do cartão para telas grandes */
  margin: 10px auto; /* Margem automática para centralizar o cartão horizontalmente */
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transições suaves */

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Sombra mais acentuada */
  }
`;

// Estilo para a imagem do filme
export const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9; /* Efeito de desvanecimento ao passar o mouse */
  }
`;

// Estilo para o título
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600; /* Texto em negrito */
  margin: 12px 0;
  color: #333; /* Cor do texto */
`;

// Estilo para o preço
export const Price = styled.p`
  font-size: 16px;
  color: #007bff; /* Cor mais destacada */
  margin: 0;
`;

// Estilo para o footer
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Espaça o ícone e o botão */
  margin-top: 16px;
`;

// Estilo para o botão de adicionar ao carrinho
export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px; /* Aumentar o tamanho do botão */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Transições suaves */

  &:hover {
    background-color: #0056b3; /* Cor do botão ao passar o mouse */
    transform: scale(1.05); /* Leve aumento do botão */
  }
`;

// Estilo para o input
export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px; /* Aumentar o padding para mais conforto */
  margin-bottom: 16px; /* Espaçamento entre inputs */
  border: 1px solid #ddd;
  border-radius: 6px; /* Bordas arredondadas mais sutis */
  box-sizing: border-box;
  font-size: 16px; /* Tamanho de fonte maior */
  transition: border-color 0.3s ease; /* Transição suave para a borda */

  &:focus {
    border-color: #007bff; /* Cor da borda ao focar */
    outline: none; /* Remove o contorno padrão */
  }
`;

// Estilo para o label
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600; /* Texto em negrito */
  font-size: 16px; /* Tamanho da fonte */
  color: #333; /* Cor do texto */
`;
