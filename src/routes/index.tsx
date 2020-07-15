import React from 'react'

import { Switch, Route } from 'react-router-dom'

// importa as páginas para as quais quero criar as rotas
import List from '../pages/List'
import Details from '../pages/Details'
import Cast from '../pages/Cast'
import People from '../pages/People'
import Header from '../pages/Header'
import Teste from '../pages/Teste'
import Favorites from '../pages/Favorites'

// constante ao invés de função - React.FC (function command)
// no path raiz precisa colocar exact ou todas as rotas se voltarão pra ele
const Routes: React.FC = () => (
  <>
      <Route path="/" component={Header} />
      <Switch>
      <Route path="/list/:id" exact component={List} />
      <Route path="/details/:id" component={Details} />
            <Route path="/cast/:id" component={Cast} />
      <Route path="/people/:id" component={People} />
      <Route path="/teste/:id" component={Teste} />
      <Route path="/favorites/" component={Favorites} />
    </Switch>
    </>
)

export default Routes
