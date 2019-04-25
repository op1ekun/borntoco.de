import { Reducer } from 'redux';
import { IContentAction, ContentActionType } from './content-action';
import { initialState } from '..';

export const contentReducer: Reducer<Array<string>, IContentAction> =
    (state: Array<string> = initialState.content, action: IContentAction): Array<string> =>  {
        switch(action.type) {
            case ContentActionType.CONTENT_RESET:
                return initialState.content;

            case ContentActionType.CONTENT_CHANGE:
                return [
                    ...state,
                    action.payload
                ];
            
            default:
                return state;
        }
    }