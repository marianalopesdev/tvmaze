/* eslint-disable react/jsx-indent */
import React, { useState, useEffect, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link, useRouteMatch } from 'react-router-dom'
import { Title, SeriesDetails } from './styles'
import api from '../../services/api'

interface RepositoryParams {
    id: string
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

const Cast: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const [cast, setCast] = useState<Cast[]>([])

    useEffect(() => {
        api.get(`/shows/${params.id}/cast`).then((response) => {
            setCast(response.data)
        })
    }, [params.id])

    return (
        <>
            {cast && (
                <>
                    <SeriesDetails>
                        <Title>CAST</Title>
                        <div className="app">
                            {cast.slice(0, 50).map((castmember) => (
                                <div className="box">
                                    <img
                                        src={
                                            castmember.person.image &&
                                            castmember.person.image.medium
                                        }
                                      alt={castmember.person.name}
                                    />
                                    <p>
                                        {castmember.person.name} as{' '}
                                        {castmember.character.name}
                                        <Link
                                            key={castmember.person.id}
                                            to={`/people/${castmember.person.id}/`}
                                        >
                                            Read more about{' '}
                                            {castmember.person.name}{' '}
                                        </Link>{' '}
                                    </p>
                                    <img
                                        src={
                                            castmember.character.image &&
                                            castmember.character.image.medium
                                        }
                                        alt={castmember.character.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </SeriesDetails>
                </>
            )}
        </>
    )
}
export default Cast
