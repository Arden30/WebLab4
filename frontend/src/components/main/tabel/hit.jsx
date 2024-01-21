import React from 'react';

const Hit = (hit) => {
    const resultStyle = {
        color: hit.result ? 'green' : 'red',
    };
    return (
        <tr>
            <td>
                {hit.x}
            </td>
            <td>
                {hit.y}
            </td>
            <td>
                {hit.r}
            </td>
            <td>
                {hit.currTime}
            </td>
            <td>
                {hit.executionTime} ns
            </td>
            <td style={resultStyle}>
                {hit.result ? "Hit" : "Miss"}
            </td>
        </tr>
    );
};

export default Hit;