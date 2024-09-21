import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    background: none;
    color: ${({ theme, $isactive }) =>
        $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
        margin-right: 6px;
    }
`
