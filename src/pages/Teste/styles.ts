import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 48px;
    color: #3d3d4d;
    margin-top: 40px;
    line-height: 56px;
    max-width: 450px;
`

export const SeriesDetails = styled.div`
    margin-top: 40px;
    background-color: #fff;
    border-radius: 4px;
    padding-top: 20px;

    a {
        font-size: 18px;

        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
        color: #ea526f;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(30px);
        }
    }

    img {
        display: flex;
        max-width: 300px;
    }

    strong {
        font-size: 20px;
        color: #3d3d4d;
    }

    p {
        font-size: 22px;
        color: #3d3d4d;
        margin-top: 4px;
    }

    .row {
        flex-direction: row;
        display: flex;
    }
    .row-reverse {
        flex-direction: row-reverse;
    }
    .column {
        flex-direction: column;
    }
    .column-reverse {
        flex-direction: column-reverse;
    }

    /* Flex Container */
    .container {
        display: grid;

        grid-template-columns: 2fr 2fr;
        grid-template-rows: 20vh 90vh 10vh;
        grid-template-areas:
            'h h'
            'm a'
            'f f';
    }
    img {
        max-height: 500px;
    }
    header {
        background: #fff;
        grid-area: h;
    }

    main {
        background: #fff;
        grid-area: m;
    }

    aside {
        background: #fff;
        grid-area: a;
    }

    footer {
        background: #fff;
        grid-area: f;
    }

    /* Flex Item */
    .item {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
        margin: 5px;
        background: #fff;
        text-align: right;
        font-size: 1.5em;
        align-items: center;
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }
`
