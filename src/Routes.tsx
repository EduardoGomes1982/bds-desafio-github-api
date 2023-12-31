import NavBar from 'components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <NavBar />
        <Switch>
            <main className='container-lg pd-tpbt-20'>
                <Route path="/" exact>
                </Route>
                <Route path="/products" exact>
                </Route>
            </main>
        </Switch>
    </BrowserRouter>
);

export default Routes;