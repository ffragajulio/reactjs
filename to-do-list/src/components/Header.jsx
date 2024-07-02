import "../Header.css"

function Header() {
    let logo = "https://via.placeholder.com/100";

    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <a href="https://react.dev" target='_blank' rel='noreferrer'>Home</a>
                <a href="https://react.dev/learn" target='_blank' rel='noreferrer'>Perfil</a>
                <a href="https://react.dev/community" target='_blank' rel='noreferrer'>Notificações</a>
            </nav>
        </header>
    );
}

export default Header;