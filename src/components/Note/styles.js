import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 224px;
    background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};

    padding: 32px;
    border-radius: 16px;
    margin-bottom: 24px;
`

export const Content = styled(Link)`
    > h1 {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 24px;
        margin-bottom: 8px;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 12px;
        margin-right: 6px;
        margin-bottom: 14px;
    }

    .details {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;

        p {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font-family: Roboto, sans-serif;
        }
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 28px;
    }
`
