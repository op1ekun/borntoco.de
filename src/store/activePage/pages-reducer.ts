import { Reducer } from 'redux';
import { IPageAction, PageActionType } from './pages-action';
import { initialState } from '..';
import { Pages } from './pages-enum';

export const pagesReducer: Reducer<Pages, IPageAction> =
    (state: Pages = initialState.activePage, action: IPageAction): Pages =>  {
        switch(action.type) {
            case PageActionType.PAGE_RESET:
                return initialState.activePage;

            case PageActionType.PAGE_CHANGE:
                return action.payload;
            
            default:
                return state;
        }
    }
