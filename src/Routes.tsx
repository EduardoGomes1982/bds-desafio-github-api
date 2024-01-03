import NavBar from 'components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'routes/Home';
import SearchProfile from 'routes/SearchProfile';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='main-container'>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search-profile" exact>
                    <SearchProfile />
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;