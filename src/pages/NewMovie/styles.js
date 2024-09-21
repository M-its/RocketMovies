import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
        "header"
        "content";

    overflow-y: hidden;

    > main {
        grid-area: content;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }

        &::-webkit-scrollbar-track:hover {
            background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_PINK};
        }
    }
`

export const Form = styled.form`
    width: 1140px;
    max-width: 90vw;
    margin: 40px auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        margin-top: 24px;
    }
`
export const Inputs = styled.div`
    width: 100%;

    display: flex;
    gap: 40px;

    > div {
        &:not(:last-of-type) {
            margin-bottom: 0;
        }
    }
`

export const Markers = styled.div`
    > h2 {
        font-weight: 400;
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        margin-bottom: 24px;
    }

    > .tags {
        display: flex;
        flex-wrap: wrap;

        padding: 16px;
        border-radius: 8px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    }
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;

    > button {
        margin-top: 0;
        font-size: 16px;
        font-weight: 600;
    }

    > button:not(:last-of-type) {
        margin-right: 40px;

        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    }
`
