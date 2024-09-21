import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-family: "Roboto Slab", serif;
        font-optical-sizing: auto;
        font-size: 16px;
        outline: none;
        font-style: normal;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
        font-family: "Roboto Slab", serif;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
`
