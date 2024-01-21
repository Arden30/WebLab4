import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Validator from "../../../../validation/validator";
import Service from "../../../../api/service";
import {addHit} from "../../../../store/tokenSlice";
import CSSModules from "react-css-modules";
import style from "./graph.module.css";

const GraphSVG = () => {
        const dispatch = useDispatch()
        const hits = useSelector(state => state.token.hits)
        const token = useSelector(state => state.token.token)
        const svgRef = useRef(null);
        const rVal = useSelector(state => state.token.r)
        const svgSize = 410;

        const SendHit = (e) => {
                e.preventDefault()
                let rowX = e.nativeEvent.offsetX;
                let rowY = e.nativeEvent.offsetY;

                const hit = {
                        x: ((-1 * (rVal / 75) * (svgSize / 2 - rowX)) / 2 - 10 * rVal / 75).toFixed(2),
                        y: (((rVal / 75) * (svgSize / 2 - rowY)) / 2 + 10 * rVal / 75).toFixed(2),
                        r: rVal
                }
                // const validInfo = Validator.variablesIsValid(hit.x, hit.y, hit.r)
                if (Validator.rIsValid(rVal).success) {
                        Service.sendHit(hit, token)
                            .then(res => dispatch(addHit(res)))
                }
        }
        
        const click = (e) => {
                SendHit(e)
        }

        const CheckHit = (hit) => {
                let rectangle = false;
                let triangle = false;
                let circle = false;

                if (hit.x >= -rVal/2 && hit.x <= 0 && hit.y >= 0 && hit.y <= rVal) {
                        rectangle = true;
                }
                if (hit.x >= 0 && hit.x <= rVal/2 && hit.y >= -rVal/2 && hit.y <= 0 && hit.y >= hit.x - rVal/2) {
                        triangle = true;
                }
                if (hit.x >= 0 && hit.y >= 0 && hit.x*hit.x + hit.y*hit.y <= rVal*rVal/4) {
                        circle = true;
                }
                return rectangle || triangle || circle;
        }

    return (
        <svg styleName="graphSVG" height="450" width="450" xmlns="http://www.w3.org/2000/svg" onClick={(e) => click(e)} ref={svgRef}>
            {/*X */}
            <line stroke="black" x1="0" x2="450" y1="225" y2="225"/>
             {/*Стрелка X */}
            <polygon fill="black" points="450,225 440,230 440,220" stroke="black"/>

             {/*Y */}
            <line stroke="black" x1="225" x2="225" y1="0" y2="450"/>
             {/*Стрелка Y */}
            <polygon fill="black" points="225,0 220,10 230,10" stroke="black"/>

             {/*Справа по Х */}
            <line stroke="black" x1="300" x2="300" y1="235" y2="215"/>
            <line stroke="black" x1="375" x2="375" y1="235" y2="215"/>

             {/*Слева по Х */}
            <line stroke="black" x1="150" x2="150" y1="235" y2="215"/>
            <line stroke="black" x1="75" x2="75" y1="235" y2="215"/>

             {/*Снизу по Y */}
            <line stroke="black" x1="215" x2="235" y1="300" y2="300"/>
            <line stroke="black" x1="215" x2="235" y1="375" y2="375"/>

             {/*Сверху по Y */}
            <line stroke="black" x1="215" x2="235" y1="150" y2="150"/>
            <line stroke="black" x1="215" x2="235" y1="75" y2="75"/>

             {/*Подписи к делениям и осям */}
            <text fill="black" x="230" y="245">0</text>
             {/*Справа по Х */}
            <text id="r1" fill="black" x="300" y="255">{rVal/2}</text>
            <text id="r2" fill="black" x="375" y="255">{rVal}</text>

             {/*Слева по Х */}
            <text id="r3" fill="black" x="150" y="255">{-rVal/2}</text>
            <text id="r4" fill="black" x="75" y="255">{-rVal}</text>

             {/*Сверху по Y */}
            <text id="r5" fill="black" x="240" y="150">{rVal/2}</text>
            <text id="r6" fill="black" x="240" y="75">{rVal}</text>

             {/*Снизу по Y */}
            <text id="r7" fill="black" x="240" y="300">{-rVal/2}</text>
            <text id="r8" fill="black" x="240" y="375">{-rVal}</text>

             {/*Ось Х */}
            <text fill="black" x="430" y="215">X</text>
             {/*Ось Y */}
            <text fill="black" x="230" y="15">Y</text>

             {/*Прямоугольник (2 четверть) */}
            <polygon fill="blue"
                     fillOpacity="0.2"
                     stroke="blue"
                     points="225,225 150,225 150,75 225,75"/>

             {/*Треугольник (4 четверть) */}
            <polygon fill="blue"
                     fillOpacity="0.2"
                     stroke="blue"
                     points="225,300 225,225 300,225"/>

             {/*Четверть окружности (3 четверть) */}
            <path fill="blue"
                  fillOpacity="0.2"
                  stroke="blue"
                  d = "M 225 225 L 225 150 A 75,75 0 0,1 300,225 Z"/>
                {
                        hits.map((hit, i) => {
                                return (
                                    <circle cx={450 / 2 + ((hit.x + (1 / 75)) / rVal) * 150}
                                            cy={450 / 2 - ((hit.y - (1 / 75)) / rVal) * 150}
                                            r={4}
                                            fill={CheckHit(hit) ? 'green' :'red'}
                                            key={i}
                                    />
                                );
                        })
                }
        </svg>
    );
}

export default CSSModules(GraphSVG, style, { allowMultiple: true, handleNotFoundStyleName: 'ignore' });