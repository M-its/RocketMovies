import PropTypes from "prop-types"

import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function MovieItem({ isNew = false, value, onClick, ...rest }) {
    return (
        <Container $isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            {/* {isNew ? (
                <button type="button" onClick={onClick}>
                    <FiPlus />
                </button>
            ) : (
                <button type="button" onClick={onClick}>
                    <FiX />
                </button>
            )} */}

            <button
                type="button"
                className={isNew ? "button-add" : "button-delete"}
                onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}

MovieItem.propTypes = {
    isNew: PropTypes.bool,
    value: PropTypes.string,
    onClick: PropTypes.func,
}
