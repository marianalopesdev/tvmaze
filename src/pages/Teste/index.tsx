/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { SeriesDetails } from './styles'
import moment from 'moment';
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

const Teste: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>()
    const [people, setPeople] = useState<People | null>(null)
    
   
    
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
                            <h1>{people.name}</h1>
                        </header>
                        <main>
                            <img src={people.image && people.image.original} alt={people.name} />
                        </main>
                        <aside>
                            <p>{people.gender} </p>
                            <p>{people.country && people.country.name} </p>
                            <p>{people.birthday} </p>
                          
                        </aside>
                        <footer>
                            <a href={people.url}>{people.name} on TV Maze</a>
                        </footer>
                    </div>
                    <div className="alert alert-warning" role="alert">
                + evitar o acesso desnecessário a api
                    </div>
                    <div className="alert alert-warning" role="alert">
                    EXIBA A IMAGEM DE
                    UMA ESTRELA Na lista de series
                    </div>
                   
                    <div className="alert alert-warning" role="alert">
                    error handling na busca ok, mas try catch nao funciona. +++ error handling images - img padrão? -no momento mostra o alt + mostrar deathday
                    </div>
                    <div className="alert alert-warning" role="alert">
                   search radio button outras opcoes
                    </div>
                </SeriesDetails>

                
            )}{' '}
        </>
    )
}

export default Teste
