/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, FormEvent } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { Title, SeriesDetails, Form, Cast } from './styles'
import api from '../../services/api'
import logoImage from '../../assets/tv.jpg'

interface RepositoryParams {
    id: string
}
interface Fav {
    id: string
    name: string
    summary: string
    officialSite: string
    runtime: number
    status: string
    image: {
        medium: string
        original: string
    }
    genres: []
    rating: {
        average: number
    }
    network: {
        name: string
        country: {
            name: string
        }
    }
}
interface Serie {
    id: string
    name: string
    summary: string
    officialSite: string
    runtime: number
    status: string
    image: {
        medium: string
        original: string
    }
    genres: []
    rating: {
        average: number
    }
    network: {
        name: string
        country: {
            name: string
        }
    }
    externals: {
        imdb: string
    }
}
interface Cast {
    character: {
        name: string
        image: {
            medium: string
            original: string
        }
    }
    person: {
        id: number
        name: string
        gender: string
        url: string
        image: {
            medium: string
            original: string
        }
    }
}

const Details: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const [serie, setSerie] = useState<Serie | null>(null)
    const [cast, setCast] = useState<Cast[]>([])
    const [favoriteVerifier, setfavoriteVerifier] = useState<Fav | null>(null)
    const [favorites, setFavorites] = useState<Fav[]>(() => {
        const storageRepositories = localStorage.getItem('@tvmaze1:favorites')

        if (storageRepositories) {
            return JSON.parse(storageRepositories)
        }

        return []
    })

    useEffect(() => {
        api.get(`/shows/${params.id}`).then((response) => {
            setSerie(response.data)
            const currentShow = response.data
            if (favorites.map((fav) => fav.id).includes(currentShow.id)) {
                setfavoriteVerifier(currentShow.id)
            }
        })
        api.get(`/shows/${params.id}/cast`).then((response) => {
            setCast(response.data)
        })
        localStorage.setItem('@tvmaze1:favorites', JSON.stringify(favorites))
    }, [favorites, params.id])

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault()

        const response = await api.get(`/shows/${params.id}`)
        const currentShow = response.data
        const currentShowId = currentShow.id
        if (!favorites.map((fav) => fav.id).includes(currentShowId)) {
            setFavorites([...favorites, currentShow])
        }
    }

    return (
        <>
            {serie && (
                <SeriesDetails>
                    <div className="star">
                        {favoriteVerifier && <BsFillStarFill size={30} />}
                        {!favoriteVerifier && (
                            <>
                                <Form onClick={handleAddRepository}>
                                    <BsStar size={30} type="submit" />
                                </Form>
                            </>
                        )}
                    </div>
                    <article>
                        <section>
                            <Title> {serie.name} </Title>
                        </section>
                        <section className="container row">
                            <div className="item">
                                <img
                                    src={serie.image && serie.image.medium}
                                    alt={serie.name}
                                />
                            </div>
                            <div className="item1">
                                {serie.genres.map((genre) => (
                                    <p>{genre}</p>
                                ))}
                                {serie.rating.average && (
                                    <p>Rating: {serie.rating.average}</p>
                                )}
                                <p>Duration: {serie.runtime}'</p>
                                <p>Status: {serie.status}</p>
                                <a href={serie.officialSite}>
                                    {serie.officialSite}
                                </a>
                            </div>
                        </section>
                        <section>
                            {serie.summary && (
                                <p>
                                    {serie.summary.replace(/<(.|\n)*?>/g, '')}
                                </p>
                            )}
                        </section>
                    </article>
                </SeriesDetails>
            )}
            {cast.length === 0 && (
                <Cast>
                    <h3>
                        {`Oh-oh! Unfortunately we don't have more information about
                       ${serie?.name}`}
                    </h3>

                    <section>
                        <section className="container row">
                            {serie?.externals.imdb && (
                                <a
                                    href={`https://www.imdb.com/title/${serie?.externals.imdb}`}
                                >
                                    <h3>
                                        {`No problem! You can see more ${serie?.name} on IMDB!`}
                                    </h3>
                                </a>
                            )}
                        </section>
                    </section>
                </Cast>
            )}
            {cast.length > 0 && (
                <Cast>
                    <h2>Cast</h2>
                    <section>
                        <section className="container row">
                            {cast.slice(0, 3).map((castmember) => (
                                <div className="item">
                                    <img
                                        src={
                                            castmember.person.image &&
                                            castmember.person.image.medium
                                        }
                                        alt={castmember.person.name}
                                    />
                                    <div className="item2">
                                        {castmember.person.name}
                                    </div>
                                </div>
                            ))}
                        </section>
                        {serie && (
                            <Link key={serie.id} to={`/cast/${serie.id}/`}>
                                See more
                            </Link>
                        )}
                    </section>
                </Cast>
            )}
        </>
    )
}

export default Details
