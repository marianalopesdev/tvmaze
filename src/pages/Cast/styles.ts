import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 32px;
    color: #3d3d4d;

    line-height: 56px;
    max-width: 450px;
`

export const SeriesDetails = styled.div`
    margin-top: 36px;
    max-width: 800px;
    background-color: #fff;
    border-radius: 4px;
    padding: 24px;

    .app {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .box {
        width: 700px;

        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #fceade;
        border-left: 2px solid #fceade;

        img {
            max-width: 180px;
            padding: 5px;
        }
    }

    a {
        font-size: 14px;

        text-decoration: none;
        display: flex;
        transition: transform 0.2s;
        color: #ea526f;

        &:hover {
            transform: translateX(10px);
        }
    }

    section {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    strong {
        font-size: 20px;
        color: #3d3d4d;
    }

    p {
        font-size: 14px;
        color: #3d3d4d;
        margin-top: 4px;
        padding: 10px;
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
        margin: 0 auto;
        display: flex;
        border: 1px #ea526f;
        background-color: blue;
        padding: 20px;
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
