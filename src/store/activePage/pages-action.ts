import { Action } from 'redux';
import { Pages } from './pages-enum';

export enum PageActionType {
    PAGE_CHANGE = 'PAGE_CHANGE',
    PAGE_RESET = 'PAGE_RESET'
}

export interface IPageAction extends Action {
    type: PageActionType;
    payload: Pages;
}

export const createPageChangeAction = (page: Pages): IPageAction => {
    return {
        type: PageActionType.PAGE_CHANGE,
        payload: page
    }
}
