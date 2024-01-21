import React, { useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useDispatch, useSelector } from 'react-redux';
import { addHit, clearHits } from '../../../store/tokenSlice';
import style from './table.module.css';
import Service from '../../../api/service';
import Hit from './hit';

const Table = () => {
    const hits = useSelector((state) => state.token.hits);
    const token = useSelector((state) => state.token.token);
    const dispatch = useDispatch();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        Service.getHitsForUser(token).then((res) => {
            res.map((hit) => dispatch(addHit(hit)));
        });
    };

    const deleteHits = () => {
        dispatch(clearHits());
        Service.removeHitsByUser(token).then((res) => console.log(res));
    };

    return (
        <div styleName="table-header">
            <table>
                <thead>
                <tr>
                    <th scope="col">X</th>
                    <th scope="col">Y</th>
                    <th scope="col">R</th>
                    <th scope="col">Current time</th>
                    <th scope="col">Running time</th>
                    <th scope="col">Result</th>
                </tr>
                </thead>
                <tbody>
                {
                    hits.map((hit, i) => {
                        return (
                            <Hit {...hit} key={i}/>
                        );
                    })
                }
                </tbody>
            </table>
            <button styleName="clear-button" type="reset" onClick={deleteHits}>
                Clear
            </button>
        </div>
    );
};

export default CSSModules(Table, style, {
    allowMultiple: true,
    handleNotFoundStyleName: 'ignore',
});
