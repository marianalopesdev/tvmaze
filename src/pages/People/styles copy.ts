import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 48px;
    color: #3d3d4d;
    margin-top: 40px;
    line-height: 56px;
    max-width: 450px;
`

export const Form = styled.form`
    margin-top: 45px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #ffa69e;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ffa69e')};
        }
    }
`

export const SeriesDetails = styled.div`
    margin-top: 80px;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px;

    a {
        font-size: 18px;
        padding: 24px;
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

        grid-template-columns: 3fr 1fr;
        grid-template-rows: 10vh 50vh 10vh;
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
