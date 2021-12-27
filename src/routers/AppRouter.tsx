import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { HeroesScreen } from '../components/HeroesScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HeroesScreen />}> </Route>
                </Routes>
            </div>
        </Router>
    )
}
