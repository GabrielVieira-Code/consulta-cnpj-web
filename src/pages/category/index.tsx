// src/pages/category/MovieCard.tsx
import React, { useState } from 'react';
import * as C from './stiled'; // Corrigido o caminho para "styled"
import { CartItem, addToCart } from '../../service/movieService';

interface MovieCardProps {
  id: number;
  title: string;
  nomeFantasia: string;
  initialDate: string;
  atividade: string;
  endereco: string;
  tel1: string;
  tel2: string;
  email: string;
  situacaoCadastral: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  title,
  id,
  nomeFantasia,
  initialDate,
  atividade,
  endereco,
  tel1,
  tel2,
  email,
  situacaoCadastral,
}) => {
  const [formData, setFormData] = useState({
    title,
    nomeFantasia,
    initialDate,
    atividade,
    endereco,
    tel1,
    tel2,
    email,
    situacaoCadastral,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);

    const cartItem: CartItem = {
      id: Math.floor(Math.random() * 1000), // Gerar um ID fictício
      title: formData.title,
      initialDate: formData.initialDate,
      nomeFantasia: formData.nomeFantasia,
      atividade: formData.atividade,
      tel1: formData.tel1,
      tel2: formData.tel2,
      endereco: formData.endereco,
      email: formData.email,
      situacaoCadastral: formData.situacaoCadastral,
    };

    addToCart(cartItem);
  };

  return (
    <C.Card>
      <C.InfoContainer>
        <C.InfoLine>Informação Linha 1</C.InfoLine>
        <C.InfoLine>Informação Linha 2</C.InfoLine>
      </C.InfoContainer>
      <form onSubmit={handleSubmit}>
        <C.Title>Informações</C.Title>

        <C.Label>
          Título:
          <C.Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Nome Fantasia:
          <C.Input
            type="text"
            name="nomeFantasia"
            value={formData.nomeFantasia}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Data de Inicialização:
          <C.Input
            type="date"
            name="initialDate"
            value={formData.initialDate}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Atividade:
          <C.Input
            type="text"
            name="atividade"
            value={formData.atividade}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Endereço:
          <C.Input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Telefone 1:
          <C.Input
            type="text"
            name="tel1"
            value={formData.tel1}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Telefone 2:
          <C.Input
            type="text"
            name="tel2"
            value={formData.tel2}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Email:
          <C.Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </C.Label>

        <C.Label>
          Situação Cadastral:
          <C.Input
            type="text"
            name="situacaoCadastral"
            value={formData.situacaoCadastral}
            onChange={handleChange}
          />
        </C.Label>

        <C.Footer>
          <C.AddToCartButton type="submit">Salvar</C.AddToCartButton>
        </C.Footer>
      </form>
    </C.Card>
  );
};
