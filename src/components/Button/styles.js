import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: 0;
    border-radius: 10px;
    padding: 0 16px;
    margin-top: 24px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`
