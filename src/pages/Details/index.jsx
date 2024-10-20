import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { renderStars } from "..//../components/RederStars"

import { FiArrowLeft, FiClock } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

import { Container, Content, Section } from "./styles"
import { api } from "../../services/api"

export function Details() {
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    const { user } = useAuth()

    const params = useParams()

    function formatDate(dateString) {
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, "0")
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear().toString().slice(-2)
        const hours = date.getHours().toString().padStart(2, "0")
        const minutes = date.getMinutes().toString().padStart(2, "0")

        return `${day}/${month}/${year} às ${hours}:${minutes}`
    }

    function handleBack() {
        navigate(-1)
    }

    async function handleDelete() {
        const confirm = window.confirm("Deseja realmente remover a nota?")

        if (confirm) {
            await api.delete(`/movie_notes/${params.id}`)
            navigate(-1)
        }
    }

    useEffect(() => {
        async function fetchMovieNotes() {
            const noteResponse = await api.get(`/movie_notes/${params.id}`)
            setData(noteResponse.data)
        }

        fetchMovieNotes()
    }, [params.id])

    return (
        <Container>
            <Header />

            {data && (
                <main>
                    <Content>
                        <ButtonText
                            title="Voltar"
                            icon={FiArrowLeft}
                            onClick={handleBack}
                        />

                        <div className="content-header">
                            <h1>{data.title}</h1>
                            {renderStars(data.rating)}
                        </div>

                        <Section className="post-details">
                            <img
                                src={
                                    user.avatar
                                        ? `${api.defaults.baseURL}/files/${user.avatar}`
                                        : avatarPlaceholder
                                }
                                alt={`Foto de ${user.name}`}
                            />

                            <p>Por {user.name}</p>

                            <FiClock />
                            <p>{formatDate(data.created_at)}</p>
                        </Section>

                        {data.movieTags && (
                            <Section>
                                {data.movieTags.map((movieTag) => (
                                    <Tag
                                        key={String(movieTag.id)}
                                        title={movieTag.name}
                                    />
                                ))}
                            </Section>
                        )}

                        <p>{data.description}</p>
                        <ButtonText
                            className="delete"
                            title="Excluir"
                            onClick={handleDelete}
                        />
                    </Content>
                </main>
            )}
        </Container>
    )
}
