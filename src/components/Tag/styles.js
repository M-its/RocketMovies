import styled from "styled-components"

export const Container = styled.span`
    font-size: 12px;
    font-family: Roboto, sans-serif;
    padding: 5px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`
