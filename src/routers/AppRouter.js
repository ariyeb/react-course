import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Footer from '../components/main/Footer';
import Header from '../components/main/Header';
import LoginPage from '../components/login/LoginPage';
import Home from '../components/home/Home';
import PageNotFound from '../components/main/PageNotfound';
import Rooms from '../components/rooms/Rooms';
import ChatroomLoader from '../components/chatroom/ChatroomLoader';
import LoginContextProvider from '../context/LoginContext';

const AppRouter = () => (
    <BrowserRouter>
        <LoginContextProvider>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={ Home } />
                <Route path="/rooms" component={ Rooms } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/chatroom/:name" component={ ChatroomLoader } />
                <Route path="*" component={ PageNotFound } />
            </Switch>
            <Footer />
        </LoginContextProvider>
    </BrowserRouter>
);

export default AppRouter;