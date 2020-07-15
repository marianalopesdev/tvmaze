/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useState, useEffect } from 'react'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { Link, useRouteMatch } from 'react-router-dom'
import { Title, Form, Series, Error } from './styles'
import { SeriesDetails } from '../Details/styles'

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

const Favorites: React.FC = () => {
    const [series, setSeries] = useState<Serie[]>([])

    const [favorites, setFavorites] = useState<Fav[]>(() => {
        const storageRepositories = localStorage.getItem('@tvmaze1:favorites')
        // console.log(`storagebeforeif${storageRepositories}`)
        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        }

        return []
    })

    return (
        <>
            <Series>
                {favorites.map((fav) => (
                    <Link key={fav.id} to={`/details/${fav.id}`}>
                        <img
                            src={fav.image && fav.image.medium}
                            alt={fav.name}
                        />

                        <div>
                            <strong>
                                {fav.name} <BsFillStarFill size={20} />
                            </strong>
                            <div className="container">
                                {fav.genres.map((genre) => (
                                    <div className="box">
                                        <p>{genre}</p>
                                    </div>
                                ))}
                            </div>
                            {fav.summary && (
                                <p>
                                    {fav.summary
                                        .replace(/<(.|\n)*?>/g, '')
                                        .slice(0, 150)}
                                </p>
                            )}
                            {fav.rating.average && (
                                <p>Rating: {fav.rating.average}</p>
                            )}
                        </div>
                    </Link>
                ))}
            </Series>
        </>
    )
}

export default Favorites
