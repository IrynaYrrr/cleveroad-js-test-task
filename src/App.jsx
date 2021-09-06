import { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import Auth from './components/Auth';
import Products from './components/Products';
import ProductEdit from './components/ProductEdit';
import ProductCreate from './components/ProductCreate';

const App = () => {
    const [user, setUser] = useState();

    const auth = getAuth();
    auth.onAuthStateChanged((u) => {
        setUser(u);
    });

    if (user) {
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
    }

    return (
        <Auth />
    );
};

export default App;
