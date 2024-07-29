import styled from 'styled-components';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

export const Container = styled.div`
  padding: 20px;
  background-color: #2f2e41;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px;
  margin: 16px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
`;

export const Image = styled.img`
  width: 80px;
  height: auto;
  border-radius: 4px;
  margin-right: 12px;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    gap: 10px;
  }
`;

export const MovieTitle = styled.h3`
  margin: 10px 0;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const QuantityInput = styled.input`
  width: 20px;
  height: 20px;
  text-align: center;
  padding: 1px;
  margin: 0 7px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;
  width: 15px;
  height: 20px;
  margin: 0 7px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 8px 0 0;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  font-size: 24px;
  margin-left: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Subtotal = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TotalLabel = styled.p`
  margin: 0;
`;

export const TotalValue = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;
