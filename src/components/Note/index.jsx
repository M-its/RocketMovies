import PropTypes from "prop-types"

import { BiSolidStar, BiStar } from "react-icons/bi"

import { Tag } from "../Tag"

import { Container, Content } from "./styles"

export function Note({ data, ...rest }) {
    const renderStars = () => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
            if (i <= data.rating) {
                stars.push(<BiSolidStar key={i} />)
            } else {
                stars.push(<BiStar key={i} />)
            }
        }
        return stars
    }

    return (
        <Container {...rest}>
            <Content to="/details/:id">
                <h1>{data.title}</h1>
                {renderStars()}
                <div className="details">{data.description}</div>
                {data.tags && (
                    <footer>
                        {data.tags.map((tag) => (
                            <Tag key={tag.id} title={tag.name} />
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
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                name: PropTypes.string,
            })
        ),
    }),
}
