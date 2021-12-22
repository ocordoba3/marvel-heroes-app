import React from 'react';
import { Search } from './Search/Search';
import { GlobalStyles } from '../GlobalStyles';
import { MainContent } from './styles';
import { HeroesContent } from './HeroesContent/HeroesContent';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { HeroesButtons } from './HeroesButtons/HeroesButtons';

export const HeroesApp = () => {

    return (
        <Provider store={store}>
            <GlobalStyles />
            <MainContent >
                <Search />
                <HeroesButtons />
                <HeroesContent />
            </MainContent>
        </Provider>
    )
}
