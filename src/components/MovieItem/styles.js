import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) =>
        isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) =>
        isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 10px;
    padding-right: 16px;
    margin-right: 24px;

    > button {
        border: none;
        background: none;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        padding: 16px;

        font-family: Roboto, sans-serif;
        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`
