import styled from "styled-components"
import { Link } from "react-router-dom"

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
        padding: 50px 0;
    }
`
export const Content = styled.div`
    max-width: 1140px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    .resumeTitle {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 38px;

        > h1 {
            font-size: 32px;
            font-weight: 500;
        }
    }
`

export const Button = styled(Link)`
    border: 0;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 14px 32px;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    text-decoration: none;
    font-size: 16px;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    svg {
        width: 15px;
        height: 16px;
        margin-right: 8px;
    }
`

export const Resumes = styled.article`
    height: 720px;
    max-height: 740px;
    overflow-y: auto;
    padding-right: 8px;

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
`
