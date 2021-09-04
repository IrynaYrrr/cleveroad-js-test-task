import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Products from './components/Products';
import ProductEdit from './components/ProductEdit';
import ProductCreate from './components/ProductCreate';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Products />
                </Route>
                <Route path="/create" exact>
                    <ProductCreate />
                </Route>
                <Route path="/product/:id" exact>
                    <ProductEdit />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
