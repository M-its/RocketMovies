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
        padding: 40px 0;
    }
`

export const Content = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    overflow-y: scroll;
    
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

    > .content-header {
        display: flex;
        align-items: center;

        padding-top: 24px;

        h1 {
            font-size: 36px;
            font-weight: 500;
            margin-right: 20px;
        }

        svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > .post-details {
        margin: 40px 0;
        font-family: Roboto, sans-serif;

        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 16px;
            height: 16px;

            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

        svg {
            width: 16px;
            height: 16px;
            margin-right: -4px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }
`

export const Section = styled.div`
    margin-bottom: 40px;

    > span {
        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};
    }
`
