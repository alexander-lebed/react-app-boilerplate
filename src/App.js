import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spinner from './components/common/Spinner';
import Store from './store';
import Navigation from './components/Navigation';
import './app.scss';

const Home = React.lazy(() => import('./components/Home'));
const ListingContainer = React.lazy(() => import('./containers/ListingContainer'));
const PageNotFound = React.lazy(() => import('./components/PageNotFound'));

const App = () => (
    <React.Suspense fallback={<Spinner />}>
        <Store>
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/list' component={ListingContainer} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </Store>
    </React.Suspense>
);

export default App;