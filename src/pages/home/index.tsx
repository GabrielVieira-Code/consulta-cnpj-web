// src/pages/ShoppingCart/index.tsx
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { MovieCard } from "../category/index";;
import * as C from "./stiled";
import { fetchCNPJ } from '../../service/movieService';



export const Home: React.FC = () => {
    const [cnpj, setCnpj] = useState('');
    const [cnpjData, setCnpjData] = useState<any>(null); // Armazena os dados do CNPJ
    const [error, setError] = useState<string | null>(null);

    const handleCnpjSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            try {
                setError(null); // Limpar erros anteriores
                const cleanedCnpj = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos
                const data = await fetchCNPJ(cleanedCnpj);
                setCnpjData(data);
            } catch (error) {
                setError('Erro ao buscar CNPJ. Verifique o número e tente novamente.');
            }
        }
    };

    return (
        <C.Container>
            <C.Nav>
                <div>WeMovies</div>
                <NavLink to="/shoppingCart" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                    <C.CartIcon />
                </NavLink>
            </C.Nav>
            <C.SearchSection>
                <C.SearchInput
                    type="text"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    placeholder="Pesquise o CNPJ..."
                    onKeyDown={handleCnpjSearch}
                />
            </C.SearchSection>
            <C.Content>
                {error && <div>{error}</div>}
                {cnpjData && (
                    <MovieCard
                        key={cnpjData.cnpj}
                        id={0} // ID fictício, ajuste conforme necessário
                        email={cnpjData.email}
                        
                        tel2={cnpjData.ddd_telefone_2}
                        tel1={cnpjData.ddd_telefone_1}
                        endereco={cnpjData.logradouro}
                        atividade={cnpjData.cnae_fiscal_descricao}
                        situaçaoCadastral={cnpjData.descricao_situacao_cadastral}
                        initialDate={cnpjData.data_inicio_atividade}
                        nomeFantasia={cnpjData.nome_fantasia}
                        title={cnpjData.razao_social || 'Nome não disponível'}
                        price={0} // Valor fictício, ajuste conforme necessário
                        image="https://via.placeholder.com/150" // Imagem fictícia
                        onAddToCart={() => {}}
                    />
                )}
                
            </C.Content>
        </C.Container>
    );
};
