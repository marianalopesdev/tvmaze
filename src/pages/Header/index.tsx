/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@material-ui/core'
import { FaGrinStars } from 'react-icons/fa'
import { Title, Form, Error } from './styles'
import api from '../../services/api'

interface Busca {
    newRepo: string
}

interface Fav {
    id: string
    name: string
    summary: string
    officialSite: string
    image: {
        medium: string
        original: string
    }
    genres: []
    rating: {
        average: number
    }
}
interface Serie {
    name: string
    summary: string
    officialSite: string
    image: {
        medium: string
        original: string
    }
    genres: []
    rating: {
        average: number
    }
}

const Header: React.FC = () => {
    const [inputError, setInputError] = useState('')
    const [newRepo, setNewRepo] = useState('')
    const [series, setSeries] = useState<Serie[]>([])
    const history = useHistory()
    const state = useState('')

    const [favorites, setFavorites] = useState<Fav[]>(() => {
        const storageRepositories = localStorage.getItem('@tvmaze1:favorites')
        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        }

        return []
    })

    async function handleSearch(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault()

        if (!newRepo) {
            setInputError('Type a TvShow name, i.e., Parks and Recreation')
            return
        }

        const response = await api.get(`search/shows?q=${newRepo}`)

        if (response.data.length > 0) {
            history.push(`/list/${newRepo}`)
            setInputError('')
        } else {
            setInputError(
                'TvShow not found. Try another one, i.e. The Office or Arrested Development'
            )
        }
        setNewRepo('')
    }

    return (
        <>
            <Title>
                <a href="/">TV MAZE</a>
            </Title>
            <Form hasError={!!inputError} onSubmit={handleSearch}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Type here"
                />
                <button type="submit">Search</button>
                <a href="/favorites/">
                    <FaGrinStars size={30} />
                    Favorites
                </a>
            </Form>
            {inputError && <Error>{inputError}</Error>}
        </>
    )
}

export default Header
