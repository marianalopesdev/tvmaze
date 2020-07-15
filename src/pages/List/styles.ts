import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
    hasError: boolean
}

export const Title = styled.h1`
    font-size: 48px;
    color: #fceade;
    margin-top: 80px;
    line-height: 56px;
    max-width: 450px;
`
export const Form = styled.form<FormProps>`
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

        border: 2px solid #fff;
        border-right: 0;
        ${(props) =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #ea526f;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#ea526f')};
        }
    }
`

export const Series = styled.div`
    margin-top: 80px;
    max-width: 700px;

    .container {
        margin: 0 auto;
        display: flex;
        border: 1px #ea526f;
        background-color: #fff;
        padding: 20px;
        flex-direction: row;
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

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(30px);
        }
    }

    img {
        min-width: 128px;
        max-width: 129px;
    }

    p {
        font-size: 20px;
        color: #a8a8b3;
        margin-top: 4px;
    }

    div {
        margin-left: 16px;

        strong {
            font-size: 26px;
            color: #5e6472;
        }

        p {
            font-size: 14px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }
    svg {
        margin-left: auto;
        color: #ffa69e;
    }
`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`
