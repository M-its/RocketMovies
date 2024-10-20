import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

import { api } from "../../services/api"

import { Container, Form, Inputs, Markers, Buttons } from "./styles"

export function NewMovie() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [rating, setRating] = useState("")

    const [movieTags, setMovieTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleCancel() {
        navigate("/")
    }

    function handleBack() {
        navigate(-1)
    }

    function handleAddTag() {
        setMovieTags((prevState) => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deletedTag) {
        setMovieTags((prevState) =>
            prevState.filter((tag) => tag !== deletedTag)
        )
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Digite o título da nota")
        }

        if (newTag) {
            return alert(
                'Você deixou uma tag no campo para adicionar, mas não clicou em "Adicionar". Clique para adicionar ou apague a tag.'
            )
        }

        try {
            const ratingNumber = parseFloat(rating)

            await api.post("/movie_notes", {
                title,
                rating: ratingNumber,
                description,
                movie_tags: movieTags,
            })

            alert("Nota criada com sucesso!")
            navigate(-1)
        } catch (error) {
            if (error.response.data.message) {
                alert(error.response.data.message)
            } else {
                alert(
                    "Não foi possível criar a nota. Por favor, tente novamente."
                )
            }
        }
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonText
                            title="Voltar"
                            icon={FiArrowLeft}
                            onClick={handleBack}
                        />
                        <h1>Novo filme</h1>
                    </header>

                    <Inputs>
                        <Input
                            placeholder="Título"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Inputs>

                    <Textarea
                        placeholder="Observações"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Markers>
                        <h2>Marcadores</h2>
                        <div className="tags">
                            {movieTags.map((movieTag, index) => (
                                <MovieItem
                                    key={String(index)}
                                    value={movieTag}
                                    onClick={() => {
                                        handleRemoveTag(movieTag)
                                    }}
                                />
                            ))}

                            <MovieItem
                                isNew
                                placeholder="Novo marcador"
                                onChange={(e) => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Markers>

                    <Buttons>
                        <Button title="Cancelar" onClick={handleCancel} />
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </Buttons>
                </Form>
            </main>
        </Container>
    )
}
