// src/services/movieService.ts
import axios from 'axios';


const CNPJ_API_URL = 'https://brasilapi.com.br/api/cnpj/v1/';



export interface CartItem {
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
    nomeSocio: string;  // Novo campo
  faixaEtaria: string; // Novo campo
  qualificacaoSocio: string; // Novo campo
  representanteLegal: string; // Novo campo
    
}

export const addToCart = (item: CartItem) => {
    const cart = getCartItems();
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    return cart;
};

export const getCartItems = (): CartItem[] => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
};

export const fetchCNPJ = async (cnpj: string): Promise<any> => {
    try {
        const response = await axios.get(`${CNPJ_API_URL}${cnpj}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar CNPJ:", error);
        throw error;
    }
};
