import {
    combineReducers,
    createStore,
    compose,
    Action
} from 'redux';

import { Pages } from './activePage/pages-enum';
import { pagesReducer } from './activePage/pages-reducer';

export interface IStore {
    activePage: Pages;
}

export const initialState: IStore = {
    activePage: Pages.ABOUT_ME,
};

const reducers = combineReducers<IStore>({
    activePage: pagesReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;

export default createStore<IStore, Action, any, any>(reducers, initialState, composeEnhancers);
