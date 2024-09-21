import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 116px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Content = styled.div`
    width: 1140px;
    max-width: 90vw;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;

    margin: 0 auto;
`

export const Brand = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        line-height: 24px;

        text-align: end;

        strong {
            font-size: 18px;
            white-space: nowrap;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`
