import React from 'react';
import CSSModules from 'react-css-modules';
import style from './panel.module.css';
import Coordinates from "./coordinates/coordinates";
import Graph from "./graph/graph";

const Panel = () => {
    return (
        <div styleName="panel">
            <Graph />
            <Coordinates />
        </div>
    );
}
export default CSSModules(Panel, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });