import React from 'react';
import CSSModules from 'react-css-modules';
import style from './graph.module.css';
import GraphSVG from "./graphSVG";

const Graph = () => {
    return (
        <div styleName="graph">
           <GraphSVG />
        </div>
    );
}
export default CSSModules(Graph, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });