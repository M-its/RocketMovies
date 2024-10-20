import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { FiPlus } from "react-icons/fi"

import { api } from "../../services/api"

import { Container, Content, Button, Resumes } from "./styles"

import { Header } from "../../components/Header"
import { Note } from "../../components/Note"

export function Home() {
    const [search, setSearch] = useState("")
    const [movieNotes, setMovieNotes] = useState([])

    const navigate = useNavigate()

    const handleSearch = (value) => {
        setSearch(value)
    }

    function handleMovieDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchMovieNotes() {
            const response = await api.get(`/movie_notes?title=${search}`)
            setMovieNotes(response.data)
        }

        fetchMovieNotes()
    }, [search])

    return (
        <Container>
            <Header onSearch={handleSearch} />
            <main>
                <Content>
                    <div className="resumeTitle">
                        <h1>Meus filmes</h1>
                        <Button to="/newmovie">
                            <FiPlus />
                            Adicionar filme
                        </Button>
                    </div>
                    <Resumes>
                        {movieNotes.map((movieNote) => (
                            <Note
                                key={String(movieNote.id)}
                                data={{
                                    ...movieNote,
                                    movieTags: movieNote.movieTags.map(
                                        (tag) => ({
                                            ...tag,
                                            id: String(tag.id),
                                        })
                                    ),
                                }}
                                onClick={() => handleMovieDetails(movieNote.id)}
                            />
                        ))}
                    </Resumes>
                </Content>
            </main>
        </Container>
    )
}
