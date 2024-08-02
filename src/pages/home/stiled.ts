import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import bannerImage from '../../images/banner.jpg'; // Caminho da imagem padrão
import bannerImageSmall from '../../images/bannerMobile.jpg'; // Caminho da nova imagem para telas pequenas

export const Container = styled.div`
  padding: 0;
  background-color: #5563e6;
  min-height: 100vh;

 
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #003366;
  height: 7vh;
  width: 100%; /* Garantir largura de 100% */
  box-sizing: border-box; /* Garantir que padding e bordas não afetem a largura total */
 
   @media (max-width: 375px) {
      width: 100%; /* Garantir largura de 100% */
      

  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Banner = styled.div`
  width: 100vw; /* Garantir largura total da viewport */
  height: 750px;
  background: url(${bannerImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  
  @media (max-width: 978px) {
    background: url(${bannerImageSmall}) no-repeat center center; /* Troca de imagem para telas pequenas */
    background-size: cover;
    width: 100vw; /* Garantir largura total da viewport */
  height: 350px;
 
  background-size: cover;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  }

  
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3px;
  border-radius: 6px;
  color: white;
  width: 50%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  text-align: center;
  
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
  width: 100%;
  
  @media (max-width: 768px) {
    margin-top: 10px;
  width: 100%;
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;

  }
`;
