import { Action } from 'redux';

export enum ContentActionType {
    CONTENT_CHANGE = 'CONTENT_CHANGE',
    CONTENT_RESET = 'CONTENT_RESET'
}

export interface IContentAction extends Action {
    type: ContentActionType;
    payload: string;
}

export const createContentChangeAction = (content: string): IContentAction => {
    return {
        type: ContentActionType.CONTENT_CHANGE,
        payload: content
    }
}
