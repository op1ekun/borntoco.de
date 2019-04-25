import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Pages } from '../store/activePage/pages-enum';
import { createPageChangeAction } from '../store/activePage/pages-action';
import { createContentChangeAction } from '../store/content/content-action';
// import TabList, { ITabsListProps } from '../tabList/tabList';

// export default class Header extends React.Component<ITabsListProps, {}> {
    
//     public render() {
//         const { tabs } = this.props;

//         // FIXME provide values through props, there should be no hardcoded stuff here
//         return (
//             <header>
//                 <h1>
//                     <a href="/">borntoco.de<span /></a>
//                 </h1>
//                 <q>
//                     <a href="http://www.codinghorror.com/blog/2004/08/why-im-the-best-programmer-in-the-world.html">But it's not our job to be better than anyone else; we&nbsp;just need to be better than we were a year ago.
//                     <strong>-&nbsp;Jeff&nbsp;Atwood</strong></a>
//                 </q>
//                 <nav id="nav">
//                     <TabList tabs={ tabs } />
//                 </nav>                 
//             </header>
//         );
//     }
// }

export interface IHeaderProps {
    switchToAboutMe: () => void;
    switchToWorks: () => void;
    switchToContact: () => void;
    changeContent: () => void;
    // createPageChangeAction: (page: Pages) => void;
    // createContentChangeAction: (content: string) => void;
}

export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
    return (
        <header>
            <li><a href="#aboutMe" onClick={() => {}}>About Me</a></li>
            <li><a href="#works" onClick={props.switchToWorks}>Works</a></li>
            <li><a href="#contact" onClick={props.switchToContact}>Contact</a></li>
            <li><a href="#content" onClick={props.changeContent}>Content</a></li>
        </header>
        // <header>
        //     <li><a href="#aboutMe" onClick={() => {
        //         props.createPageChangeAction(Pages.ABOUT_ME);
        //     }}>About Me</a></li>
        //     <li><a href="#works" onClick={() => {
        //         props.createPageChangeAction(Pages.WORKS);
        //     }}>Works</a></li>
        //     <li><a href="#contact" onClick={() => {
        //         props.createPageChangeAction(Pages.CONTACT);
        //     }}>Contact</a></li>
        //     <li><a href="#content" onClick={() => {
        //         props.createContentChangeAction('trollolo');
        //     }}>Content</a></li>
        // </header>
    );
}

const mapDispatchToProps = (dispatch: any): IHeaderProps => {
    // return bindActionCreators({
    //     createPageChangeAction,
    //     createContentChangeAction
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
        changeContent: () => {
            dispatch(createContentChangeAction('trollolo'));
        }
    }
}

export const HeaderView = connect(null, mapDispatchToProps)(Header);




