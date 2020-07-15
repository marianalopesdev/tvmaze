/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link, useRouteMatch } from 'react-router-dom'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { Title, Series } from './styles'
import api from '../../services/api'

interface RepositoryParams {
    id: string
}
interface Serie {
    show: {
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
}
interface Fav {
    id: string
}

const List: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const [series, setSeries] = useState<Serie[]>([])
    const [favoriteVerifier, setfavoriteVerifier] = useState<Fav | null>(null)
    const [favorites, setFavorites] = useState<Fav[]>(() => {
        const storageRepositories = localStorage.getItem('@tvmaze1:favorites')

        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        }

        return []
    })
    //   console.log(`ddd${favoriteVerifier}`)
    useEffect(() => {
        api.get(`search/shows?q=${params.id}`).then((response) => {
            setSeries(response.data)

            // console.log(currentShow)
            /*  if (favorites.map((fav) => fav.id).includes(currentShow)) {
                console.log(currentShow)
                setfavoriteVerifier(currentShow)
            } */
        })
    }, [favorites, params.id, series])

    return (
        <>
            <Series>
                {series.map((serie) => (
                    <Link key={serie.show.id} to={`/details/${serie.show.id}`}>
                        {/*   <div>
                            {favorites.map((fav) => (
                                <>
                                    <p>lala{fav.id}</p>
                                    <p>papa{serie.show.id}</p>
                                </>
                            ))}
                            {favoriteVerifier && <BsFillStarFill size={30} />}
                            {favoriteVerifier && (
                                <>
                                    <BsFillStarFill size={30} />
                                </>
                            )}
                        </div> */}
                        <img
                          src={serie.show.image && serie.show.image.medium}
                          alt={serie.show.name}
                        />
                        <div>
                            <strong>{serie.show.name}</strong>
                            <div className="container">
                                {serie.show.genres.map((genre) => (
                                    <div className="box">
                                        <p>{genre}</p>
                                    </div>
                                ))}
                            </div>
                            {serie.show.summary && (
                                <p>
                                    {serie.show.summary
                                        .replace(/<(.|\n)*?>/g, '')
                                        .slice(0, 150)}
                                </p>
                            )}
                            {serie.show.rating.average && (
                                <p>Rating: {serie.show.rating.average}</p>
                            )}
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Series>
        </>
    )
}

export default List
