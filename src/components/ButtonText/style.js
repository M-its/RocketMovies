import styled from "styled-components"

export const Container = styled.div`
    background: none;
    color: ${({ theme, $isactive }) =>
        $isactive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;

    display: flex;
    align-items: center;
    text-decoration: none;

    cursor: pointer;

    svg {
        margin-right: 6px;
    }
`
