import {
    useState,
    useEffect
} from 'react';

import {
    useLocation 
} from 'react-router-dom';

import {
    // worksContent,
    // aboutMeContent,
    tabsContent
} from './content';

import TabList, { ITabsListProps } from './tabList/tabList';
import { Slide } from './slide/slide'

export default () => {
    const location = useLocation();
    const [ test, setTest ] = useState('');
    useEffect(() => {
        setTest(location.hash);
    }, [ location ]);

    return (
        <div id="wrapper">
            <Slide anchor="home">
                <div>dupa</div>
                <nav className="mainNav">
                    <ul>
                        <li>
                            <span className="navLabel aboutLabel">born</span>
                            <span className="navLabelHover aboutLabel">
                                <a href="#about">about</a>
                            </span>
                        </li>
                        <li>
                            <span className="navLabel">to</span>
                            <span className="navLabelHover worksLabel">
                                <a href="#works">works</a>
                            </span>
                        </li>
                        <li>
                            <span className="navLabel">co<span className="specialElem">.</span>de</span>
                            <span className="navLabelHover">
                                <a href="#contact">contact</a>
                            </span>
                        </li>
                    </ul>
                </nav>
            </Slide>
            <Slide anchor="about">
                <span>ABOUT</span>
                <a href="#home">UP</a>
            </Slide>
            <Slide anchor="works">
                <span>WORKS</span>
                <a href="#home">UP</a>
            </Slide>
            <Slide anchor="contact">
                <span>CONTACT</span>
                <a href="#home">UP</a>
            </Slide>
            {/* <footer>
                <div id="footer_wrapper">
                    <TabList tabs={ tabsContent } />

                    <p><a href="mailto:lukasz@borntoco.de">lukasz @borntoco.de</a></p>
                    <p><a href="">+44 747 7050 023</a></p>

                    <p>copyright &copy;2019 borntoco.de</p>            
                </div>
            </footer> */}
        </div>
    );

};