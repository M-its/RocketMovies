import PropTypes from "prop-types"
import { Container } from "./style"

export function ButtonText({ title, isActive = false, icon: Icon, ...rest }) {
    return (
        <Container type="button" $isactive={isActive.toString()} {...rest}>
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool,
    icon: PropTypes.elementType,
}
