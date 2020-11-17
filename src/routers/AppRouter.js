import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import LoginPage from '../components/login/LoginPage';
import Chatroom from '../components/chatroom/Chatroom';
import Home from '../components/home/Home';
import PageNotFound from '../components/main/PageNotfound';
import Rooms from '../components/rooms/Rooms';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
            <Route path="/home" component={ Home } />
            <Route path="/rooms" component={ Rooms } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/chatroom/:name" component={ Chatroom } />
            <Route path="*" component={ PageNotFound } />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default AppRouter;