import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Pages } from '../store/activePage/pages-enum';
import { createPageChangeAction } from '../store/activePage/pages-action';

export interface IHeaderProps {
    switchToAboutMe: () => void;
    switchToWorks: () => void;
    switchToContact: () => void;
}

export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <header>
            <li><a href="#aboutMe" onClick={() => {}}>About Me</a></li>
            <li><a href="#works" onClick={props.switchToWorks}>Works</a></li>
            <li><a href="#contact" onClick={props.switchToContact}>Contact</a></li>
        </header>
    );
}

const mapDispatchToProps = (dispatch: any): IHeaderProps => {
    // return bindActionCreators({
    //     createPageChangeAction,
    // }, dispatch);
    return {
        switchToAboutMe: () => {
            dispatch(createPageChangeAction(Pages.ABOUT_ME));
        },
        switchToWorks: () => {
            dispatch(createPageChangeAction(Pages.WORKS));
        },
        switchToContact: () => {
            dispatch(createPageChangeAction(Pages.CONTACT));
        },
    }
}

export const HeaderView = connect(null, mapDispatchToProps)(Header);




