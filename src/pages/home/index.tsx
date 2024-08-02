import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FormComponent } from '../form/index';
import * as C from './stiled';
import { fetchCNPJ } from '../../service/ConsultaService';

export const Home: React.FC = () => {
    const [cnpj, setCnpj] = useState('');
    const [cnpjData, setCnpjData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    const handleCnpjSearch = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            try {
                setError(null);
                const cleanedCnpj = cnpj.replace(/\D/g, '');
                const data = await fetchCNPJ(cleanedCnpj);
                setCnpjData(data);
            } catch (error) {
                setError('Erro ao buscar CNPJ. Verifique o número e tente novamente.');
            }
        }
    };
    const qsaData = cnpjData?.qsa?.[0] || {};

    return (
        <C.Container>
            <C.Nav>
                <div className="logo">ConsultaCNPJ</div>
                <NavLink to="/shoppingCart" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
                    <C.CartIcon />
                </NavLink>
            </C.Nav>
            <C.Banner>
                <C.SearchSection>
                    <C.SearchInput
                        type="text"
                        value={cnpj}
                        onChange={(e) => setCnpj(e.target.value)}
                        placeholder="Pesquise o CNPJ..."
                        onKeyDown={handleCnpjSearch}
                    />
                </C.SearchSection>
            </C.Banner>
            <C.Content>
                {error && <div>{error}</div>}
                {cnpjData && (
                    <FormComponent
                        key={cnpjData.cnpj}
                        id={0} 
                        email={cnpjData.email}
                        tel2={cnpjData.ddd_telefone_2}
                        tel1={cnpjData.ddd_telefone_1}
                        endereco={cnpjData.logradouro}
                        atividade={cnpjData.cnae_fiscal_descricao}
                        situacaoCadastral={cnpjData.descricao_situacao_cadastral}
                        initialDate={cnpjData.data_inicio_atividade}
                        nomeFantasia={cnpjData.nome_fantasia}
                        title={cnpjData.razao_social || 'Nome não disponível'}
                        nomeSocio={qsaData.nome_socio}
                        faixaEtaria={qsaData.faixa_etaria}
                        qualificacaoSocio={qsaData.qualificacao_socio}
                        representanteLegal={qsaData.qualificacao_representante_legal}
                    />
                )}
            </C.Content>
        </C.Container>
    );
};

export default Home;
