import {
    useRef,
    ReactNode
} from 'react';

export interface ISlideProps {
    anchor: string;
    children?: ReactNode;
}

export const Slide = (props: ISlideProps) => {
    return (
        <section id={props.anchor} className="slide">
            { props.children }
        </section>
    );
}