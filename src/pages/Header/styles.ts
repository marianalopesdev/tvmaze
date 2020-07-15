import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
    hasError: boolean
}

export const Title = styled.h1`
    font-size: 48px;
    color: #fceade;
    margin-top: 36px;
    line-height: 56px;
    max-width: 450px;

    a {
        color: #fceade;
        text-decoration: none;
        transition: color 0.6s;

        &:hover {
            color: ${shade(0.2, '#ea526f')};
        }
    }
`
export const Form = styled.form<FormProps>`
    margin-top: 20px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 50px;
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
        height: 50px;
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

    a {
        color: #fceade;
        text-decoration: none;
        transition: color 0.6s;
        padding-left: 30px;
        padding-right: 30px;
        align-self: center;

        &:hover {
            color: ${shade(0.2, '#ea526f')};
        }
    }
`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`
