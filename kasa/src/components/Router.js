import Logement from '../pages/Logement';
import Home from '../pages/Home';
import Apropos from '../pages/Apropos';
import Badpath from '../pages/Badpath';
import Header from '../components/Header';

import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'

function Router(){
    return <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={< Home />}/>
                <Route exact path="/apropos" element={< Apropos />} />
                <Route exact path="/logement" element={< Logement />} />
                <Route path='*' element={< Badpath />}/>
            </Routes>
        </BrowserRouter>
}

export default Router;