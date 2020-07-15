import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 32px;
    color: #3d3d4d;
    line-height: 34px;
    max-width: 600px;
`

export const Form = styled.form`
    max-width: 700px;
`

export const SeriesDetails = styled.div`
    margin-top: 20px;
    max-width: 800px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    .star {
        text-align: right;
    }

    a {
        font-size: 14px;
        text-decoration: none;
        display: flex;
        transition: transform 0.2s;
        color: #ea526f;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(30px);
        }
    }

    section {
        border-radius: 4px;
    }

    img {
        display: flex;
        max-width: 180px;
    }

    p {
        font-size: 16px;
        color: #3d3d4d;
        margin-top: 4px;
    }

    .row {
        flex-direction: row;
        display: flex;
    }

    /* Flex Container */
    .container {
        margin: 0 auto;
        display: flex;
        border: 1px #ea526f;
        background-color: #fff;
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

        border-radius: 4px;
    }
    .item1 {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
        margin: 5px;
        text-align: left;
        font-size: 1em;
        align-items: center;

        border-radius: 4px;
    }
    .item2 {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
        margin: 5px;
        text-align: center;
        font-size: 16px;
        align-items: center;

        border-radius: 4px;
    }
`
export const Cast = styled.div`
    margin-top: 20px;
    max-width: 800px;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    a {
        font-size: 20px;
        text-decoration: none;
        display: flex;
        transition: transform 0.2s;
        color: #ea526f;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(30px);
        }
    }

    section {
        border-radius: 4px;
    }

    img {
        display: flex;
        max-width: 180px;
    }

    p {
        font-size: 16px;
        color: #3d3d4d;
        margin-top: 4px;
    }

    .row {
        flex-direction: row;
        display: flex;
    }

    /* Flex Container */
    .container {
        margin: 0 auto;
        display: flex;
        border: 1px #ea526f;
        background-color: #fff;
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

        border-radius: 4px;
    }
    .item1 {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
        margin: 5px;
        text-align: left;
        font-size: 1em;
        align-items: center;

        border-radius: 4px;
    }
    .item2 {
        /* O flex: 1; é necessário para que cada item se expanda ocupando o tamanho máximo do container. */
        flex: 1;
        margin: 5px;
        text-align: center;
        font-size: 16px;
        align-items: center;

        border-radius: 4px;
    }
`
