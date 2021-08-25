import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../Components/Marvel/MarvelScreen'
import { DcScreen } from '../Components/Dc/DcScreen'
import {HeroeScreen} from '../Components/Heroes/HeroeScreen';
import { Navbar } from '../Components/Ui/Navbar'
import { SearchScreen } from '../Components/Search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <div>
            <Navbar />

            <div className='container mt-2'>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />    
                    <Route exact path="/hero/:heroeId" component={HeroeScreen} />    
                    <Route exact path="/dc" component={DcScreen} />    
                    <Route exact path="/search" component={SearchScreen} />    

                    <Redirect to='/marvel' />
                </Switch>    
            </div>          
        </div>
    )
}