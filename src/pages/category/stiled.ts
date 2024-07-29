import styled from 'styled-components';
import React from 'react';

 export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 250px;
  text-align: center;
 
  
`;
export const StyledDiv = styled.div`
    background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 250px;
  text-align: center;
  
`;

export const MovieImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 12px 0;
`;

export const Price = styled.p`
  font-size: 16px;
  color: #333;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Suaviza a transição da cor */

  &:hover {
    background-color: #339fff;
  }
`;


export const CartIcon = styled.span`
  margin-right: 8px;
`;

