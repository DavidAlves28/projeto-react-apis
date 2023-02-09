import { BrowserRouter, Route, Routes} from 'react-router-dom'
import DetailsPage from '../Pages/Details/DetailsPage'
import HomePage from '../Pages/Home/HomePage'
import ErrorPage from '../Pages/Error'
import PokedexPage from '../Pages/Pokedex/Pokedex'

export default function Router (){

return (
    <BrowserRouter>
    <Routes>
        <Route index element={< HomePage />}/>
        <Route  path={'/pokedex'} element={< PokedexPage />} />
        <Route  path={'/details/:id'} element={< DetailsPage />} />
        <Route  path={'*'} element={< ErrorPage />} />
    </Routes>
    </BrowserRouter>
)
}