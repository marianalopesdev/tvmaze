/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import moment from 'moment'
import { SeriesDetails } from './styles'
import api from '../../services/api'

interface RepositoryParams {
    id: string
}

interface People {
    name: string
    gender: string
    birthday: Date
    deathday: Date
    url: string
    image: {
        medium: string
        original: string
    }
    country: {
        name: string
    }
}

const People: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const [people, setPeople] = useState<People | null>(null)
    let age = ''
    const birthday = moment(people?.birthday).format('LL')
    const deathday = moment(people?.deathday).format('LL')
    if (people?.birthday == null) {
        age = ''
    } else if (people?.deathday == null) {
        age = moment(people?.birthday, 'YYYYMMDD').fromNow(true)
    } else {
        const a = moment(people.birthday)
        const b = moment(people.deathday)
        age = a.to(b, true)
    }

    useEffect(() => {
        api.get(`/people/${params.id}`).then((response) => {
            setPeople(response.data)
        })
    }, [params.id])

    return (
        <>
            {people && (
                <SeriesDetails>
                    <div className="container">
                        <header>
                            <h2>{people.name}</h2>
                        </header>
                        <main>
                            <img
                                src={people.image && people.image.original}
                                alt={people.name}
                            />
                        </main>
                        <aside>
                            <p>{people.gender} </p>
                            <p>{people.country && people.country.name} </p>
                            {people.birthday && <p>Born: {birthday} </p>}
                            {people.deathday && <p>Died: {deathday} </p>}
                            <p>{age} old</p>
                        </aside>
                        <footer>
                            <a href={people.url}>{people.name} on TV Maze</a>
                        </footer>
                    </div>
                </SeriesDetails>
            )}{' '}
        </>
    )
}

export default People
