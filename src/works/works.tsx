import * as React from 'react';
import { IParagraph, Paragraph } from '../para/para';

export interface IWorksProps {
    title: string;
    left: {
        para: Array<IParagraph>;
    };
    right: {
        para: Array<IParagraph>;
    };
}

export default class Works extends React.Component<IWorksProps, {}> {

    public render() {
        const {
            title,
            left,
            right
        } = this.props;

        return(    
            <section id="content">
                <h2>Works</h2>
                <article id="left">
                    <p>
                        You can find most of my codes on my <a href="https://github.com/op1ekun">github</a> account. This is where I&nbsp;keep all my personal projects - including this site&nbsp;&#9786;
                    </p>
                    <p>
                        <a href="https://github.com/op1ekun/borntoco.de">borntoco.de</a> - The repository for this website.
                    </p>
                    <p>
                        <a href="https://github.com/op1ekun/SAJA">SAJA</a> - Scalable Architecture for Javascript Applications. Inspired by <em>Nicholas Zakas</em>. Compose your application of loosely coupled modules which use <em>pub/sub</em> pattern for communication. All based on <em>RequireJS</em>.
                    </p>    
                    <p>
                        <a href="https://github.com/op1ekun/cinodine">cinodine</a> - continuous intergration app for javascript. It is used in my previous workplace and runs seamlessly on <em>Bamboo</em> server. Uses <em>node.js</em> along with <em>jsdom</em> and <em>QUnit</em> modules. Everything to simulate real browser&nbsp;environment. Yes it was written before <em>Phantom.js</em> became popular ;)
                    </p>
                </article>
                
                <article id="right">
                    <p>
                        <a href="https://github.com/op1ekun/plOOgins">plOOgins</a> - the OOP approach to <em>jQuery</em> plugins. Register your plugin class. Select elements you need. Run your plugin for all the selected elements. Chaining&nbsp;included!     
                    </p>
                    <p>
                        <a href="https://github.com/op1ekun/LocalCache">LocalCache</a> - <em>localStorage</em> in action! Cache whatever You want. If cache is full it will release the oldest stored items until there is enough space to store new data.  
                    </p>
                    <p>
                        <a href="https://github.com/op1ekun/todolist">todolist (AngularJS demo app)</a> - a demo TODO list application to showcase <em>AngularJS</em> modularization and best practices. I use it mainly to try new things and teach my junior colleagues how to code.
                    </p>
                </article>
            </section>
            // <section id="content">
            //     <h2>{ title }</h2>
            //     <article id="left">
            //         { left.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
            //     </article>
            //     <article id="right">
            //         { right.para.map((singlePara, index) => <Paragraph key={ index } { ...singlePara } />) }
            //     </article>
            // </section>
        );
        
    }
}
