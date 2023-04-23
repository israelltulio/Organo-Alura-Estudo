import './Colaborador.css'

const Colaborador = ({ nome, cpf, data, cargo, imagem, corDeFundo }) => {
    return (<div className='colaborador'>
        
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cpf}</h5>
            <h5>{data}</h5>
            <h5>{cargo}</h5>
        </div>
    </div>)
}

export default Colaborador