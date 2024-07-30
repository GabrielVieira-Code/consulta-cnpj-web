// src/pages/ShoppingCart/styled.ts
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export const Container = styled.div`
  padding: 20px;
  background-color: #5563e6;
  min-height: 100vh; /* Garante que o contêiner tenha pelo menos 100% da altura da viewport */
  
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  width: 100%; /* Garante que o conteúdo ocupe toda a largura disponível */
  
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  gap: 20px; /* Espaçamento entre o card e o formulário */
  align-items: flex-start;
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.7); /* Preto opaco */
  padding: 20px;
  border-radius: 8px; /* Opcional: Adiciona bordas arredondadas */
  color: white;
`;

export const SearchInput = styled.input`
  flex: 1; /* Faz o input ocupar o espaço restante */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc; /* Borda fina adicionada */
  border-radius: 4px;
  box-sizing: border-box; /* Garante que o padding não afete o tamanho total */
  
  &::placeholder {
    color: #ccc;
  }
`;






