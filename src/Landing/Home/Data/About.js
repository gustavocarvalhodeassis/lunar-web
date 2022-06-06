import React from "react"
import { CgChart, CgFolder, CgLoadbarDoc } from 'react-icons/cg'

export const aboutCard = [
    {
        title: 'Dashboard completa',
        description: 'Tenha em vista gráficos, relações, relatórios,  de tudo o que você gerenciar em sua empresa.',
        icon: <CgChart color="7A3FF3" size={35}/>
    },
    {
        title: 'Controle total de sua empresa',
        description: 'Faça vendas, controle seu estoque, seu caixa, cadastre clientes e fornecedores, e muito mais. ',
        icon: <CgFolder color="7A3FF3" size={35}/>
    },
    {
        title: 'Documentos fiscais',
        description: 'Aqui você pode entrar NF-e de compra e emitir NFC-e e NF-e de venda.',
        icon: <CgLoadbarDoc color="7A3FF3" size={35}/>
    }
]