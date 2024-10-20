import styled from "styled-components"

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        padding: 0 144px;

        background-color: ${({ theme }) => theme.COLORS.TRANSPARENT_PINK};

        a {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};

            display: flex;
            align-items: center;
            text-decoration: none;

            svg {
                margin-right: 6px;
            }
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > button {
        font-size: 16px;
        font-weight: 700;
    }

    > div:nth-child(4) {
        margin-top: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -123px auto 64px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 4px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }
        
        svg {
            width: 20px;
            height: 20px;

            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }
`
