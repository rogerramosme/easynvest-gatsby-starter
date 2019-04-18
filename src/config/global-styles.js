import { createGlobalStyle } from 'styled-components'
import { Colors, Theme } from 'config/theme'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        position: relative;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-family: ${Theme.default.FontFamily}, sans-serif;
        line-height: 1;
        -webkit-text-size-adjust: none;
    }

    html.safari {
        touch-action: manipulation;
    }

    body {
        color: ${Colors.Gray};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        -webkit-text-size-adjust: none;
        overflow-y: auto;
    }

    a {
        color: ${Colors.RipePlum};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    img {
        width: 100%;
        max-width: 100%;
    }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    figure {
        margin: 0;
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
    }

    svg {
        fill: currentColor;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }
`
