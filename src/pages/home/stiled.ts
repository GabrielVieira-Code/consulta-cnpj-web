import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import bannerImage from '../../images/banner.jpg'; // Atualize o caminho conforme necessário

export const Container = styled.div`
  padding: 0; /* Remove padding que pode afetar o banner */
  background-color: #5563e6;
  min-height: 100vh; /* Garante que o contêiner tenha pelo menos 100% da altura da viewport */
  
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background:#003366;
  height: 7vh; /* Ajusta a altura do nav */
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Banner = styled.div`
  width: 100vw; /* Largura total da viewport */
  height: 750px; /* Altura do banner */
  background: url(${bannerImage}) no-repeat center center; /* Usar a imagem importada */
  background-size: cover; /* Faz com que a imagem cubra todo o banner */
  position: relative;
  margin: 0; /* Remove margens, se houver */
  padding: 0; /* Remove padding, se houver */
  box-sizing: border-box; /* Garante que o box model esteja correto */
  overflow: hidden; /* Garante que nada saia dos limites do banner */
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  align-items: center; /* Centraliza o conteúdo verticalmente */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centraliza o conteúdo dentro do banner */
  background-color: rgba(0, 0, 0, 0.7); /* Preto opaco */
  padding: 3px;
  border-radius: 6px; /* Opcional: Adiciona bordas arredondadas */
  color: white;
  width: 50%; /* O input ocupará metade da largura do banner */
`;

export const SearchInput = styled.input`
  width: 100%; /* O input ocupa toda a largura da SearchSection */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc; /* Borda fina adicionada */
  border-radius: 4px;
  box-sizing: border-box; /* Garante que o padding não afete o tamanho total */
  text-align: center; /* Centraliza o texto e o placeholder horizontalmente */
  
  &::placeholder {
    color: #ccc;
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
