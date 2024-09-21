import { Input } from "../Input"

import { Container, Content, Brand, Profile } from "./styles"

export function Header() {
    return (
        <Container>
            <Content>
                <Brand to="/">RocketMovies</Brand>

                <Input placeholder="Pesquisar pelo título" />

                <Profile to="/profile">
                    <div>
                        <strong>Mitsrael Souza</strong>
                        <span>Sair</span>
                    </div>

                    <img
                        src="http://github.com/m-its.png"
                        alt="foto do usuário"
                    />
                </Profile>
            </Content>
        </Container>
    )
}
