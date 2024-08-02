// src/pages/category/styled.ts
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'; // Importa o ícone de usuário

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
// Estilo para o ícone do usuário
export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 8px; /* Espaçamento entre o ícone e o texto */
  color: #007bff; /* Cor do ícone */
  font-size: 18px; /* Tamanho do ícone */
`;

// Estilo para o texto de informações
export const InfoText = styled.p`
  font-weight: bold; /* Texto em negrito */
  display: inline; /* Permite que o texto fique ao lado do ícone */
  margin: 0; /* Remove margens padrão do parágrafo */
`;

// Outros estilos
// ... (os estilos existentes permanecem inalterados)



// Estilo para o container das informações acima do formulário
export const InfoContainer = styled.div`
  margin-bottom: 20px; /* Espaçamento abaixo do container de informações */
  padding: 10px;
  background-color: #f9f9f9; /* Cor de fundo do container */
  border-radius: 8px; /* Bordas arredondadas do container */
  border: 1px solid #ddd; /* Borda sutil */
`;

// Estilo para a linha de informação
export const InfoLine = styled.div`
  margin-bottom: 10px; /* Espaçamento entre as linhas */
  font-size: 16px; /* Tamanho da fonte */
  color: #333; /* Cor do texto */
`;

// Estilo para o título dentro de InfoLine
export const InfoLineTitle = styled.span`
  font-weight: bold; /* Texto em negrito */
  display: block; /* Faz com que o título ocupe a largura total disponível */
`;

// Estilo para o título
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600; /* Texto em negrito */
  margin: 12px 0;
  color: #333; /* Cor do texto */
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
