import PropTypes from "prop-types"

import { renderStars } from "../RederStars"

import { Tag } from "../Tag"

import { Container, Content } from "./styles"

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Content>
                <h1>{data.title}</h1>
                {renderStars(data.rating)}
                <div className="details">
                    <p>{data.description}</p>
                </div>
                {data.movieTags && (
                    <footer>
                        {data.movieTags.map((movieTag) => (
                            <Tag
                                key={String(movieTag.id)}
                                title={movieTag.name}
                            />
                        ))}
                    </footer>
                )}
            </Content>
        </Container>
    )
}

Note.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        rating: PropTypes.number,
        description: PropTypes.node,
        movieTags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
            })
        ),
    }),
}
