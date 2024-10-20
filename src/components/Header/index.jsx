import PropTypes from "prop-types"

import { useState } from "react"

import { Input } from "../Input"

import { api } from "../../services/api"

import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Content, Brand, Profile, Strong, Avatar } from "./styles"
import { useNavigate } from "react-router-dom"

export function Header({ onSearch }) {
    const { signOut, user } = useAuth()
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceholder

    return (
        <Container>
            <Content>
                <Brand to="/">RocketMovies</Brand>

                {onSearch && (
                    <Input
                        placeholder="Pesquisar pelo título"
                        onChange={(e) => {
                            setSearch(e.target.value)
                            onSearch(e.target.value)
                        }}
                        value={search}
                    />
                )}

                <Profile>
                    <div>
                        <Strong to="/profile">{user.name}</Strong>
                        <button onClick={handleSignOut}>Sair</button>
                    </div>

                    <Avatar to="/profile">
                        <img src={avatarUrl} alt={user.name} />
                    </Avatar>
                </Profile>
            </Content>
        </Container>
    )
}
Header.propTypes = {
    onSearch: PropTypes.func,
}
