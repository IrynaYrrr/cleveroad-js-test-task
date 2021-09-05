import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Products from './components/Products';
import ProductEdit from './components/ProductEdit';
import ProductCreate from './components/ProductCreate';
import { useDispatch } from 'react-redux';
import asyncActions from './redux/asyncActions';

const App = () => {
    const dispatch = useDispatch();
    dispatch(asyncActions.loadProducts());

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/create" component={ProductCreate} />
                <Route exact path="/edit/:id" component={ProductEdit} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
