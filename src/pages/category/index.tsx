// src/pages/category/MovieCard.tsx
import React, { useState } from 'react';
import * as C from "./stiled";
import { CartItem } from "../../types/CardType";

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
  };

  return (
    <C.Card>
      <form onSubmit={handleSubmit}>
        <C.Title>Informações</C.Title>

        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>


        <label>
          Nome Fantasia:
          <input
            type="text"
            name="nomeFantasia"
            value={formData.nomeFantasia}
            onChange={handleChange}
          />
        </label>

        <label>
          Data de Inicialização:
          <input
            type="date"
            name="initialDate"
            value={formData.initialDate}
            onChange={handleChange}
          />
        </label>

        <label>
          Atividade:
          <input
            type="text"
            name="atividade"
            value={formData.atividade}
            onChange={handleChange}
          />
        </label>

        <label>
          Endereço:
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </label>

        <label>
          Telefone 1:
          <input
            type="text"
            name="tel1"
            value={formData.tel1}
            onChange={handleChange}
          />
        </label>

        <label>
          Telefone 2:
          <input
            type="text"
            name="tel2"
            value={formData.tel2}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Situação Cadastral:
          <input
            type="text"
            name="situacaoCadastral"
            value={formData.situacaoCadastral}
            onChange={handleChange}
          />
        </label>

        <C.Footer>
          <C.AddToCartButton type="submit">Salvar</C.AddToCartButton>
        </C.Footer>
      </form>
    </C.Card>
  );
};
