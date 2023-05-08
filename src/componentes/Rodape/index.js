import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="./imagens/facebook.png" alt="Logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="Logo do Instagram" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="Logo do Twitter" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="Logo Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Rael Dev® by Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape