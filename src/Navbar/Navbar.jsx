import './Navbar.scss';

/* MENU */

export default function Navibar() {
    return(
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list__item"><a href="#!">Início</a></li>{/* Get */}
                <li className="navbar__list__item"><a href="#!">Criar</a></li>{/* Cadastro */}
                <li className="navbar__list__item"><a href="#!">Deletar Tudo</a></li>{/* Deletar */}
                <li className="navbar__list__item"><a href="#!">Sobre</a></li>{/* Informações Pessoais */}
                
            </ul>
        </div>    

    )
}