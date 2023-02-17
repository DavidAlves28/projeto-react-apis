import { BrowserRouter, Route, Routes} from 'react-router-dom'
import DetailsPage from '../Pages/DetailsPage/DetailsPage'
import HomePage from '../Pages/HomePage/HomePage'
import ErrorPage from '../Pages/ErrorPage/Error'
import PokedexPage from '../Pages/PokedexPage/Pokedex'

export default function Router (){
    // Rotas de Páginas.
return (
    <BrowserRouter>
    <Routes>
        <Route  index element={< HomePage />}/>
        <Route  path={'/pokedex'} element={< PokedexPage />} />
        <Route  path={'/details/:id'} element={< DetailsPage />} />
        <Route  path={'*'} element={< ErrorPage />} />
    </Routes>
    </BrowserRouter>
)
}