import {
    combineReducers,
    createStore,
    compose,
    Action
} from 'redux';

import { Pages } from './activePage/pages-enum';
import { pagesReducer } from './activePage/pages-reducer';
import { contentReducer } from './content/content-reducer';

export interface IStore {
    activePage: Pages;
    content: Array<string>;
    maybe?: boolean;
}

export const initialState: IStore = {
    activePage: Pages.ABOUT_ME,
    content: ['dupa'],
    maybe: false
};

const reducers = combineReducers<IStore>({
    activePage: pagesReducer,
    content: contentReducer,
    maybe: () => true
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__() || compose;

export default createStore<IStore, Action, any, any>(reducers, initialState, composeEnhancers);
