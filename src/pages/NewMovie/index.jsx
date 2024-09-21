import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

import { Container, Form, Inputs, Markers, Buttons } from "./styles"

export function NewMovie() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <ButtonText title="Voltar" icon={FiArrowLeft} />
                        <h1>Novo filme</h1>
                    </header>

                    <Inputs>
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </Inputs>

                    <Textarea placeholder="Observações" />

                    <Markers>
                        <h2>Marcadores</h2>
                        <div className="tags">
                            <MovieItem value="Ação" />
                            <MovieItem isNew placeholder="Novo marcador" />
                        </div>
                    </Markers>

                    <Buttons>
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </Buttons>
                </Form>
            </main>
        </Container>
    )
}
